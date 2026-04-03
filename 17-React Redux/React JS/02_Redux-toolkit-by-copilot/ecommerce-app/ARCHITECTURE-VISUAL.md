# Redux-Toolkit Architecture - Visual Reference

## 📊 Your Redux Store Structure

```
REDUX STORE
│
├─── products (slice)
│    └─ state shape:
│       {
│         items: [
│           { id: 1, name: 'Laptop', price: 999.99, image: '💻' },
│           { id: 2, name: 'Phone', price: 699.99, image: '📱' },
│           ... (4 more products)
│         ]
│       }
│    └─ actions: (none currently)
│    └─ file: src/redux/productSlice.js
│
└─── cart (slice)
     └─ state shape:
        {
          items: [
            { id: 1, name: 'Laptop', price: 999.99, image: '💻', quantity: 2 },
            { id: 3, name: 'Headphones', price: 199.99, image: '🎧', quantity: 1 }
          ],
          totalPrice: 2199.97
        }
     └─ actions:
        ├─ addToCart(product)
        ├─ removeFromCart(productId)
        ├─ increaseQuantity(productId)
        ├─ decreaseQuantity(productId)
        └─ clearCart()
     └─ file: src/redux/cartSlice.js
```

---

## 🔄 Data Flow Visualization

```
USER INTERFACE
│
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ProductList.jsx                              Cart.jsx      │
│  ├─ useSelector(products)                     ├─ useSelector(cart)
│  ├─ useDispatch()                             ├─ useDispatch()
│  └─ [💻][📱][🎧][⌚][📱][📷]                 └─ Laptop ×2: $1999.98
│     [Add][Add][Add][Add][Add][Add]               [+] [-] [Remove]
│                                                 Total: $2199.97
│     Button clicks here                         [Checkout] [Clear]
│
└────────────┬──────────────────────────────────┬────────────┘
             │                                  │
             │ dispatch(addToCart)             │ dispatch(removeFromCart)
             │ dispatch(increaseQuantity)      │ dispatch(decreaseQuantity)
             │                                  │ dispatch(clearCart)
             └──────────────────┬───────────────┘
                                │
                        ┌───────▼────────┐
                        │ REDUX ACTION   │
                        │ {              │
                        │   type: 'cart  │
                        │   /addToCart', │
                        │   payload:...  │
                        │ }              │
                        └───────┬────────┘
                                │
                        ┌───────▼────────────┐
                        │ CARTSLICE REDUCER  │
                        │ (state, action) => │
                        │   newState         │
                        └───────┬────────────┘
                                │
                        ┌───────▼────────────┐
                        │ REDUX STORE        │
                        │ state.cart updated │
                        └───────┬────────────┘
                                │
                        ┌───────▼────────────┐
                        │ useSelector finds  │
                        │ subscription match │
                        └───────┬────────────┘
                                │
                        ┌───────▼────────────┐
                        │ Components notify  │
                        │ RE-RENDER          │
                        └───────┬────────────┘
                                │
                        ┌───────▼────────────┐
                        │ UI SHOWS NEW DATA  │
                        │ Cart items updated │
                        └────────────────────┘
```

---

## 📁 Complete Folder Structure

```
ecommerce-app/
│
├── 📄 package.json                    (Dependencies)
├── 📄 vite.config.js                  (Vite config)
├── 📄 index.html                      (Entry HTML)
│
├── 📚 DOCUMENTATION
│   ├── README.md
│   ├── QUICK-REFERENCE.md             ⭐ START HERE (2 min)
│   ├── CODE-EXPLAINED.md
│   ├── REDUX-FLOW-GUIDE.md            (5 min dive)
│   ├── CONCEPTS-AT-GLANCE.md
│   ├── EXERCISES.md
│   ├── LEARNING.md
│   └── README-LEARNING.md
│
└── 📁 src/
    │
    ├── 📁 redux/                      (Redux State Management)
    │   ├── ⭐ store.js               (Central store - combines all)
    │   │   └─ configureStore({
    │   │      reducer: {
    │   │        products: productReducer,
    │   │        cart: cartReducer
    │   │      }
    │   │    })
    │   │
    │   ├── 📦 productSlice.js        (Product state)
    │   │   ├─ initialState: { items: [...6 products...] }
    │   │   ├─ reducers: {} (empty - read-only)
    │   │   └─ export: reducer
    │   │
    │   └── 🛒 cartSlice.js           (Cart state + actions)
    │       ├─ initialState: { items: [], totalPrice: 0 }
    │       ├─ reducers:
    │       │  ├─ addToCart
    │       │  ├─ removeFromCart
    │       │  ├─ increaseQuantity
    │       │  ├─ decreaseQuantity
    │       │  └─ clearCart
    │       └─ export: { actions, reducer }
    │
    ├── 📁 components/                 (React Components)
    │   ├── 🎨 ProductList.jsx
    │   │   ├─ useSelector: state.products.items
    │   │   ├─ useDispatch: addToCart
    │   │   ├─ Displays: 6 products in grid
    │   │   └─ File: ProductList.css
    │   │
    │   └── 🛍️ Cart.jsx
    │       ├─ useSelector: state.cart.items, totalPrice
    │       ├─ useDispatch: remove, increase, decrease, clear
    │       ├─ Displays: cart items with quantity controls
    │       └─ File: Cart.css
    │
    ├── ⚛️ App.jsx                    (Main app component)
    │   └─ <Provider store={store}>
    │      ├─ <ProductList />       (left side)
    │      └─ <Cart />              (right sidebar)
    │   └─ File: App.css
    │
    ├── 🏃 main.jsx                   (App entry point)
    ├── 📋 index.css                  (Global styles)
    │
    └── 📁 assets/                    (Images, icons)
        ├── react.svg
        ├── vite.svg
        └── hero.png
```

---

## 🔄 Slice Creation Pattern

```
CREATE SLICE
│
├─ 1. Import createSlice
│  └─ import { createSlice } from '@reduxjs/toolkit'
│
├─ 2. Define initialState
│  └─ const initialState = { /* ... */ }
│
├─ 3. Create slice
│  └─ const mySlice = createSlice({
│     │  name: 'myFeature',
│     │  initialState,
│     │  reducers: {
│     │    action1: (state, action) => { /* ... */ },
│     │    action2: (state, action) => { /* ... */ },
│     │  }
│     })
│
├─ 4. Export actions
│  └─ export const { action1, action2 } = mySlice.actions
│
└─ 5. Export reducer
   └─ export default mySlice.reducer
      (Used in store.js)
```

---

## 🎯 Component Usage Pattern

```
COMPONENT SETUP
│
├─ Import redux hooks
│  └─ import { useSelector, useDispatch } from 'react-redux'
│
├─ Import actions
│  └─ import { actionName } from '../redux/sliceName'
│
├─ In component:
│  │
│  ├─ Get dispatch
│  │  └─ const dispatch = useDispatch()
│  │
│  ├─ Read state
│  │  └─ const data = useSelector(state => state.sliceName.data)
│  │
│  └─ Handle events
│     └─ onClick={() => dispatch(actionName(payload))}
│
└─ Component re-renders when selected state changes
```

---

## 🔗 Connection Map

```
App.jsx
│
├─ Wraps everything with <Provider store={store}>
│
├─── ProductList.jsx
│    ├─ Subscribes to: state.products.items
│    ├─ Dispatches: addToCart(product)
│    ├─ When user clicks "Add"
│    │  └─ Goes to: cartSlice.addToCart reducer
│    │     └─ Updates: state.cart.items, state.cart.totalPrice
│    │
│    └─ Affected when: product data changes (rarely)
│
└─── Cart.jsx
     ├─ Subscribes to: state.cart.items, state.cart.totalPrice
     ├─ Dispatches: removeFromCart, increaseQuantity, decreaseQuantity, clearCart
     ├─ When user clicks buttons
     │  └─ Goes to: cartSlice reducers
     │     └─ Updates: state.cart.items, state.cart.totalPrice
     │
     └─ Re-renders whenever: cart state changes ✅
```

---

## 📊 State Transformation Example

```
STEP 1: Initial State
{
  products: { items: [6 products] },
  cart: { items: [], totalPrice: 0 }
}

STEP 2: User adds Laptop
User clicks "Add" → dispatch(addToCart({id: 1, name: 'Laptop', price: 999.99}))

STEP 3: Reducer processes
addToCart(state, action) {
  state.items.push({...action.payload, quantity: 1});
  state.totalPrice = 999.99;
}

STEP 4: State Updates
{
  products: { items: [6 products] },
  cart: {
    items: [{id: 1, name: 'Laptop', price: 999.99, quantity: 1}],
    totalPrice: 999.99
  }
}

STEP 5: Cart component re-renders
Shows: "Laptop - $999.99 (qty: 1)"
       "Total: $999.99"
```

---

## 🎓 Learning Progression

```
LEVEL 1: UNDERSTAND STRUCTURE (1-2 hours)
├─ Read: QUICK-REFERENCE.md
├─ Read: CODE-EXPLAINED.md
├─ Run app: npm run dev
└─ Observe: Click buttons, watch Redux DevTools

LEVEL 2: UNDERSTAND FLOW (2-3 hours)
├─ Read: REDUX-FLOW-GUIDE.md
├─ Read: CONCEPTS-AT-GLANCE.md
├─ Do: Exercises 1-3
└─ Explain: Redux flow to someone

LEVEL 3: BUILD FEATURES (4-6 hours)
├─ Do: Exercises 4-7
├─ Modify: Create new slice
├─ Add: New actions and components
└─ Test: Everything works together

LEVEL 4: MASTER PATTERNS (6+ hours)
├─ Do: Exercises 8-10
├─ Build: Your own project
├─ Learn: createAsyncThunk
└─ Become: Redux expert! 🎉
```

---

## 🚀 Key Files to Know

| File | Purpose | Key Code |
|------|---------|----------|
| store.js | Central Redux | `configureStore()` |
| productSlice.js | Product state | `initialState = { items: [...] }` |
| cartSlice.js | Cart & actions | `addToCart, removeFromCart, ...` |
| ProductList.jsx | Show products | `useSelector(products)` |
| Cart.jsx | Show cart | `useSelector(cart)`, `useDispatch()` |
| App.jsx | Main wrapper | `<Provider store={store}>` |

---

## 💾 File Size Reference

```
Redux folder: ~3 KB
├─ store.js: ~300 B
├─ productSlice.js: ~500 B
├─ cartSlice.js: ~2 KB
└─ (Lean and organized!)

Component folder: ~6 KB
├─ ProductList: ~2 KB
├─ Cart: ~3 KB
└─ Styles: ~1 KB

Documentation: ~50 KB
├─ Guides and learning materials
└─ Everything you need to understand Redux
```

---

## 🎯 State Access Patterns

```
GET PRODUCTS:
const products = useSelector(state => state.products.items);

GET CART ITEMS:
const items = useSelector(state => state.cart.items);

GET TOTAL PRICE:
const total = useSelector(state => state.cart.totalPrice);

GET BOTH:
const { items, totalPrice } = useSelector(state => state.cart);

GET EVERYTHING:
const { products, cart } = useSelector(state => state);
```

---

## 📝 Action Dispatch Patterns

```
SIMPLE PAYLOAD:
dispatch(removeFromCart(productId));

OBJECT PAYLOAD:
dispatch(setQuantity({id: productId, quantity: 5}));

NO PAYLOAD:
dispatch(clearCart());

WITH CALCULATION:
dispatch(applyDiscount('SAVE10'));
```

---

## ✨ Immer "Mutations" That Are Safe

```javascript
// These look like they're mutating state, but they're safe!
// Redux-Toolkit + Immer handles it internally.

// ✅ Array push
state.items.push(newItem);

// ✅ Array filter (creates new array)
state.items = state.items.filter(item => item.id !== id);

// ✅ Object property change
state.quantity = 5;

// ✅ Nested property change
state.user.name = 'John';

// ✅ Total calculation
state.totalPrice = state.items.reduce((sum, item) => 
  sum + item.price * item.quantity, 0
);
```

---

## 🎉 You Now Know:

```
✅ Where Redux files go (redux/ folder)
✅ How store.js combines everything
✅ How slices organize state + reducers
✅ How components read state (useSelector)
✅ How components update state (useDispatch)
✅ How Immer makes mutations safe
✅ The complete data flow
✅ How to scale with new slices
✅ Best practices and patterns
✅ How to debug with Redux DevTools
```

---

**You're ready to:**
- ✅ Understand existing Redux code
- ✅ Create new Redux slices
- ✅ Modify state correctly
- ✅ Build Redux-based React apps
- ✅ Debug Redux problems

**Next:** Try EXERCISES.md to practice! 🚀
