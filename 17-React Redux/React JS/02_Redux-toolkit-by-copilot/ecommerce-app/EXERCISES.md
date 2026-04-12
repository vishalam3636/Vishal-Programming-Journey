# Redux-Toolkit Learning Exercises

Try these challenges to solidify your understanding! 🚀

---

## 📚 Study Guide - Review These First

Before attempting exercises, review these key concepts:

1. **Slices** - State + Reducers in one file
2. **Store** - Combines all slices
3. **Actions** - Auto-generated from reducers
4. **Dispatch** - Send actions to store
5. **useSelector** - Read from store
6. **Immer** - Automatic immutability

---

## 🟢 BEGINNER - Read & Understand

### Exercise 1: Identify the Data Flow
Given this code:
```javascript
<button onClick={() => dispatch(addToCart(product))}>Add</button>
```

**Question:** Trace this action through your app and answer:
1. What reducer gets called?
2. What state gets updated?
3. What component re-renders to show the change?

**Answer to check yourself:**
> 1. cartSlice.addToCart reducer
> 2. state.cart.items and state.cart.totalPrice
> 3. Cart.jsx (uses useSelector for these)

### Exercise 2: State Shape Recognition
Look at your **store.js**. The state shape is:
```javascript
{
  products: { items: [...] },
  cart: { items: [...], totalPrice: 0 }
}
```

**Question:** How would you access:
1. All products? → `state.products.items`
2. All cart items? → `state.cart.items`
3. Cart total price? → `state.cart.totalPrice`

### Exercise 3: Action Type Guessing
In **cartSlice.js** you have this reducer:
```javascript
decreaseQuantity: (state, action) => { ... }
```

**Question:** What action type gets generated?
**Answer:** `'cart/decreaseQuantity'`

---

## 🟡 INTERMEDIATE - Make Changes

### Exercise 4: Add a New Action to Cart
**Goal:** Add a "setQuantity" action that sets quantity to exact number

**Steps:**
1. Open `src/redux/cartSlice.js`
2. Add a new reducer:
```javascript
setQuantity: (state, action) => {
  const item = state.items.find(i => i.id === action.payload.id);
  if (item) item.quantity = action.payload.quantity;
  // Recalculate total price
  state.totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}
```
3. Export the action:
```javascript
export const { ..., setQuantity } = cartSlice.actions;
```

**Test it:** Try using `dispatch(setQuantity({id: 1, quantity: 5}))`

### Exercise 5: Use the New Action in Cart.jsx
**Goal:** Add an input field to set exact quantity

**Hint:** Add this in Cart.jsx inside `CartItem`:
```javascript
<input
  type="number"
  value={item.quantity}
  onChange={(e) => dispatch(setQuantity({
    id: item.id,
    quantity: parseInt(e.target.value)
  }))}
/>
```

### Exercise 6: Add a Discount Code Slice
**Goal:** Create a new slice to manage discount codes

**Steps:**
1. Create `src/redux/discountSlice.js`:
```javascript
import { createSlice } from '@reduxjs/toolkit';

const discountSlice = createSlice({
  name: 'discount',
  initialState: {
    code: '',
    percentage: 0,
  },
  reducers: {
    applyDiscount: (state, action) => {
      // Check if valid code, set percentage
      if (action.payload === 'SAVE10') state.percentage = 10;
      if (action.payload === 'SAVE20') state.percentage = 20;
      state.code = action.payload;
    },
    clearDiscount: (state) => {
      state.code = '';
      state.percentage = 0;
    },
  },
});

export const { applyDiscount, clearDiscount } = discountSlice.actions;
export default discountSlice.reducer;
```

2. Add to **store.js**:
```javascript
import discountReducer from './discountSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    discount: discountReducer,  // ← Add this
  },
});
```

### Exercise 7: Create a Discount Input Component
**Goal:** Add discount code input to Cart.jsx

**Code:**
```javascript
const { code, percentage } = useSelector(state => state.discount);
const dispatch = useDispatch();

const handleApplyDiscount = (discountCode) => {
  dispatch(applyDiscount(discountCode));
};

// In JSX:
<input 
  placeholder="Enter code (SAVE10 or SAVE20)"
  onChange={(e) => handleApplyDiscount(e.target.value)}
/>
<p>Discount: {percentage}% off</p>
```

---

## 🔴 ADVANCED - Build New Features

### Exercise 8: Add Product Search Filter
**Goal:** Add a search feature to filter products

**Steps:**
1. Add a slice for search in **productSlice.js**:
```javascript
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
```

2. Add filtering logic in **ProductList.jsx**:
```javascript
const { items, searchQuery } = useSelector(state => state.products);

const filteredProducts = items.filter(product =>
  product.name.toLowerCase().includes(searchQuery?.toLowerCase() || '')
);

// Display filteredProducts instead of items
```

3. Add search input in **ProductList.jsx**:
```javascript
<input
  placeholder="Search products..."
  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
/>
```

### Exercise 9: Track Purchase History
**Goal:** Create a history of all purchases

**Steps:**
1. Create `src/redux/historySlice.js`:
```javascript
const historySlice = createSlice({
  name: 'history',
  initialState: {
    purchases: [],
  },
  reducers: {
    recordPurchase: (state, action) => {
      state.purchases.push({
        id: Date.now(),
        items: action.payload.items,
        total: action.payload.total,
        date: new Date().toLocaleString(),
      });
    },
  },
});

export const { recordPurchase } = historySlice.actions;
export default historySlice.reducer;
```

2. Dispatch on checkout:
```javascript
// In Cart.jsx checkout button:
const handleCheckout = () => {
  dispatch(recordPurchase({items, total: totalPrice}));
  dispatch(clearCart());
};
```

3. Display purchase history:
```javascript
const purchases = useSelector(state => state.history.purchases);

// Show purchases in a component
{purchases.map(purchase => (
  <div key={purchase.id}>
    <p>Date: {purchase.date}</p>
    <p>Total: ${purchase.total}</p>
  </div>
))}
```

### Exercise 10: Add User Wishlist
**Goal:** Create a wishlist separate from cart

**Challenge:**
1. Create a `wishlistSlice.js` similar to `cartSlice.js`
2. Add actions: `addToWishlist`, `removeFromWishlist`, `moveToCart`
3. Add to store.js
4. Create a `Wishlist.jsx` component
5. Add "Add to Wishlist" button in ProductList
6. Show wishlist items with "Move to Cart" option

---

## ✅ Verification Checklist

After completing exercises, verify:

- [ ] Can identify state shape for each slice
- [ ] Can create new slices with reducers
- [ ] Can dispatch actions from components
- [ ] Can read state with useSelector
- [ ] Can add new slices to store.js
- [ ] Can calculate derived state (totals, filtered lists)
- [ ] Understand Immer automatic immutability
- [ ] Can structure complex features with Redux

---

## 🎯 Questions to Self-Test

1. **What's the difference between a slice and a reducer?**
   - Slice = state + reducers + actions
   - Reducer = just the function that updates state

2. **How does Immer make my life easier?**
   - Can write `state.push()` instead of spread operators
   - Automatically converts to immutable updates

3. **What happens when you dispatch an action?**
   - Action goes to reducer → state updates → componentsre-render

4. **Why use Redux instead of useState?**
   - Shared state across components
   - Better for complex apps
   - Time-travel debugging
   - Organized state management

5. **What does configureStore do?**
   - Combines all slice reducers into one store
   - Auto-includes middleware & DevTools
   - Simplifies Redux setup

---

## 🐛 Common Mistakes to Avoid

### ❌ WRONG
```javascript
// Mutating outside reducer
const items = useSelector(state => state.cart.items);
items.push(newItem);  // Direct mutation!

// Not exporting actions
const { addToCart } = cartSlice;  // Missing .actions

// Wrong state path
useSelector(state => state.shopping.items);  // Should be state.cart
```

### ✅ RIGHT
```javascript
// Dispatch action instead
dispatch(addToCart(newItem));  // Safe!

// Export from actions
export const { addToCart } = cartSlice.actions;

// Correct state path
useSelector(state => state.cart.items);
```

---

## 💡 Pro Tips

1. **Selector Performance**: Extract smaller pieces
```javascript
// ✅ Better - only re-renders if THIS changes
const cartTotal = useSelector(state => state.cart.totalPrice);

// ⚠️ Less efficient - re-renders if ANY cart property changes
const cart = useSelector(state => state.cart);
```

2. **Reducer Calculation**: Always recalculate derived values
```javascript
// After adding to cart, always recalculate total
state.totalPrice = state.items.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
```

3. **Action Names**: Use past tense
```javascript
// ✅ Good
addToCart, removeFromCart, increaseQuantity

// ⚠️ Less clear
add, remove, increase
```

---

## 🚀 Challenge Difficulty Levels

| Level | Challenge | Estimated Time |
|-------|-----------|-----------------|
| Beginner | Ex 1-3 (Understanding) | 15-20 min |
| Intermediate | Ex 4-7 (Building) | 30-45 min |
| Advanced | Ex 8-10 (Creating) | 60+ min |

---

## 📖 File References

When doing exercises, modify these files:

```
src/redux/
├── store.js           ← Add new slices here
├── productSlice.js    ← Add search/filter
├── cartSlice.js       ← Add setQuantity
├── discountSlice.js   ← NEW (Ex 6)
└── historySlice.js    ← NEW (Ex 9)

src/components/
├── ProductList.jsx    ← Add search input
├── Cart.jsx           ← Add discount, checkout
├── Wishlist.jsx       ← NEW (Ex 10)
└── History.jsx        ← NEW (Ex 9)
```

---

## 🎉 You're doing great!

Once you complete all exercises, you'll truly understand:
- ✅ How Redux manages state
- ✅ How to structure Redux-Toolkit slices
- ✅ How to scale Redux to bigger apps
- ✅ How to think in "Redux pattern"

Keep coding! 💪

For help: Check REDUX-FLOW-GUIDE.md or CODE-EXPLAINED.md
