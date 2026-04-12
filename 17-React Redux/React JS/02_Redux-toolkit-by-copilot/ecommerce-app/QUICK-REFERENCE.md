# Redux-Toolkit Quick Reference

## 📚 Your Project Structure

```
src/
├── redux/                    # All Redux logic here
│   ├── store.js             # ⭐ Central store (combines all slices)
│   ├── productSlice.js      # 📦 Product state management
│   └── cartSlice.js         # 🛒 Cart state management
│
├── components/              # React components
│   ├── ProductList.jsx      # Displays products
│   └── Cart.jsx             # Displays cart
│
└── App.jsx                  # Providers & main layout
```

---

## 🔑 Key Files Explained

### **store.js** - The Command Center
| Aspect | Details |
|--------|---------|
| **Purpose** | Combines all Redux slices, creates the store |
| **Import** | `configureStore` from `@reduxjs/toolkit` |
| **Does** | Merges reducers from each slice |
| **Output** | The single Redux store |
| **Used By** | App.jsx in `<Provider store={store}>` |

### **cartSlice.js** - State + Actions
| Aspect | Details |
|--------|---------|
| **Purpose** | Define cart state and how it changes |
| **Has** | State shape, reducer functions |
| **Auto-Creates** | Action creators (addToCart, removeFromCart) |
| **Exports** | Actions & reducer |
| **Immer Bonus** | Can write "mutating" code safely |

### **productSlice.js** - Read-Only Data
| Aspect | Details |
|--------|---------|
| **Purpose** | Store products catalog |
| **Has** | Initial products data |
| **Currently** | No reducers (read-only) |
| **Could Add** | Filter, sort, search actions |

---

## 💻 Code Patterns

### Pattern 1: Creating a Slice

```javascript
// Step 1: Import createSlice
import { createSlice } from '@reduxjs/toolkit';

// Step 2: Define initial state
const initialState = {
  items: [],
  loading: false,
};

// Step 3: Create slice with name, state, reducers
const mySlice = createSlice({
  name: 'myFeature',           // Used in action type prefix
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Redux-Toolkit + Immer: can "mutate" safely
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

// Step 4: Export actions & reducer
export const { addItem, removeItem } = mySlice.actions;
export default mySlice.reducer;
```

### Pattern 2: Creating the Store

```javascript
// Import reducers from slices
import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './slices/featureSlice';
import anotherReducer from './slices/anotherSlice';

// Create store, passing all reducers
const store = configureStore({
  reducer: {
    feature: featureReducer,      // state.feature
    another: anotherReducer,      // state.another
  },
});

export default store;
```

### Pattern 3: Using in Components

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/featureSlice';

export function MyComponent() {
  // Get state from Redux
  const items = useSelector(state => state.feature.items);
  
  // Get dispatch function
  const dispatch = useDispatch();
  
  // Dispatch action with payload
  const handleAdd = (item) => {
    dispatch(addItem(item));  // Sends action to store
  };
  
  const handleRemove = (id) => {
    dispatch(removeItem(id));  // Remove by ID
  };
  
  return (
    <>
      {items.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => handleRemove(item.id)}>Delete</button>
        </div>
      ))}
      <button onClick={() => handleAdd({id: 1, name: 'New'})}>Add</button>
    </>
  );
}
```

### Pattern 4: Wrapping App with Provider

```javascript
// App.jsx
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      {/* All components can now use Redux */}
      <ProductList />
      <Cart />
    </Provider>
  );
}
```

---

## 🎯 State Management Patterns

### ✅ DO - Good Patterns

```javascript
// ✅ Dispatch with simple payload
dispatch(removeFromCart(productId));

// ✅ Select specific state
const cartItems = useSelector(state => state.cart.items);

// ✅ Multiple independent selectors
const items = useSelector(state => state.cart.items);
const total = useSelector(state => state.cart.totalPrice);

// ✅ Write "mutating" code in reducers
reducers: {
  addItem: (state, action) => {
    state.items.push(action.payload);  // Immer handles it!
  }
}
```

### ❌ DON'T - Bad Patterns

```javascript
// ❌ Don't return new state in Immer slices
reducers: {
  addItem: (state, action) => {
    return {...state, items: [...]};  // Not needed!
  }
}

// ❌ Don't dispatch inside reducer
reducers: {
  addItem: (state, action) => {
    dispatch(someAction);  // Forbidden!
  }
}

// ❌ Don't mutate outside of reducers
// In component:
const items = useSelector(state => state.cart.items);
items.push(newItem);  // ❌ Direct mutation!

// ❌ Don't call selectors in loop (performance issue)
for (let i = 0; i < 100; i++) {
  useSelector(state => state.cart.items);  // Bad!
}
```

---

## 🧩 How Redux Connects to React

```javascript
Redux Store                React Component
┌─────────────┐           ┌──────────────┐
│ State:      │           │              │
│ {           │──────────▶│ useSelector  │
│   cart: {   │ subscribes│ gets data    │
│     items[] │           │              │
│   }         │           └──────────────┘
└─────────────┘                 ▲
        ▲                       │
        │                  displays
        │                       │
        └───────────────────────┘
         dispatch(action)
```

---

## 🔄 Real Example: Add to Cart Flow

```javascript
// 1. User clicks button in ProductList.jsx
<button onClick={() => handleAddToCart(product)}>Add to Cart</button>

// 2. Component dispatches action
const dispatch = useDispatch();
dispatch(addToCart({id: 1, name: 'Laptop', price: 999.99}));

// 3. Action reaches cartSlice reducer
// Action: {type: 'cart/addToCart', payload: {...}}
addToCart: (state, action) => {
  state.items.push({...action.payload, quantity: 1});
}

// 4. Store state updates
{
  cart: {
    items: [{id: 1, name: 'Laptop', price: 999.99, quantity: 1}],
    totalPrice: 999.99
  }
}

// 5. Cart.jsx component sees updated state
const { items, totalPrice } = useSelector(state => state.cart);
// Re-renders automatically!

// 6. UI shows new cart item
<div>Laptop - $999.99 (qty: 1)</div>
```

---

## 📊 State Shape in Your App

```javascript
{
  // From productSlice.js
  products: {
    items: [
      { id: 1, name: 'Laptop', price: 999.99, image: '💻' },
      { id: 2, name: 'Phone', price: 699.99, image: '📱' },
      // ... 4 more products
    ]
  },

  // From cartSlice.js
  cart: {
    items: [
      { id: 1, name: 'Laptop', price: 999.99, image: '💻', quantity: 2 },
      { id: 3, name: 'Headphones', price: 199.99, image: '🎧', quantity: 1 }
    ],
    totalPrice: 2399.97  // (999.99 * 2) + 199.99
  }
}
```

---

## 🚀 Redux-Toolkit Advantages

| Feature | Benefit |
|---------|---------|
| **Slices** | No more action types/creators |
| **Immer** | "Mutate" state safely |
| **configureStore** | Auto-setup middleware |
| **DevTools** | Built-in time-travel debugging |
| **Minimal Code** | 80% less boilerplate than Redux |

---

## 🎓 Key Terms

| Term | Meaning |
|------|---------|
| **State** | Current data in Redux store |
| **Action** | Event describing what happened |
| **Reducer** | Function (state, action) → newState |
| **Dispatch** | Send action to store |
| **Slice** | State + Reducers + Actions together |
| **Selector** | Function that extracts state |
| **Payload** | Data sent with action |
| **DevTools** | Browser extension for Redux debugging |

---

## 🔗 Integration Checklist

- ✅ Create Redux folder
- ✅ Create slices with state + reducers
- ✅ Create store with configureStore()
- ✅ Wrap App with `<Provider store={store}>`
- ✅ Use `useDispatch()` in components to trigger actions
- ✅ Use `useSelector()` to read state
- ✅ Immer automatically handles immutability
- ✅ DevTools available in browser → Redux tab

---

## 📖 Next Steps

1. **Try adding a new slice** - e.g., `userSlice.js` for login
2. **Learn async** - Use `createAsyncThunk` for API calls
3. **Create selectors** - Reusable state queries
4. **Custom hooks** - Encapsulate Redux logic
5. **TypeScript** - Add type safety to Redux

---

**Your app running at:** http://localhost:5175/ 🎉
