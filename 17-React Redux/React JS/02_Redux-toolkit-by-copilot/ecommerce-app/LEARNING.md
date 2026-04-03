# Redux-Toolkit E-Commerce App

A complete learning project to understand Redux-Toolkit by building a functional e-commerce store!

## Project Structure

```
src/
├── redux/
│   ├── store.js           # Redux store configuration
│   ├── productSlice.js    # Products state management
│   └── cartSlice.js       # Cart state management
├── components/
│   ├── ProductList.jsx    # Product display component
│   ├── ProductList.css    # Product list styling
│   ├── Cart.jsx           # Shopping cart component
│   └── Cart.css           # Cart styling
├── App.jsx                # Main app component
└── App.css                # Main app styling
```

## Key Redux-Toolkit Concepts Learned

### 1. **Slices** (`productSlice.js` & `cartSlice.js`)
- Slices combine reducers, actions, and state in one place
- Use `createSlice()` to define state shape and reducer functions
- Actions are automatically generated from reducer functions

### 2. **Store** (`store.js`)
- `configureStore()` sets up the Redux store with good defaults
- Combines multiple slices (products, cart) into one store
- Automatically includes Redux DevTools support

### 3. **State Management Pattern**
```javascript
// Example: Adding to cart
const handleAddToCart = (product) => {
  dispatch(addToCart(product));  // Action
};

const cartItems = useSelector(state => state.cart.items);  // Get state
```

### 4. **Immutability**
- Redux-Toolkit uses Immer under the hood
- Write "mutating" logic that's automatically converted to immutable updates
- Example in `cartSlice.js`:
  ```javascript
  state.items.push({...action.payload, quantity: 1});  // Looks mutating but is safe!
  ```

## Features

✅ **Product Listing** - Display 6 products with images and prices
✅ **Add to Cart** - Add products to shopping cart
✅ **Cart Management** - Increase/decrease quantities
✅ **Remove Items** - Delete products from cart
✅ **Total Calculation** - Automatic price calculation
✅ **Clear Cart** - Empty the entire cart
✅ **Responsive Design** - Works on mobile and desktop

## Redux Actions Available

### Cart Actions (cartSlice.js)
- `addToCart(product)` - Add a product or increase quantity
- `removeFromCart(productId)` - Remove an item from cart
- `increaseQuantity(productId)` - Increase item quantity
- `decreaseQuantity(productId)` - Decrease item quantity or remove if 0
- `clearCart()` - Empty the entire cart

## How State Flows

```
User clicks "Add to Cart"
        ↓
dispatch(addToCart(product))
        ↓
cartSlice reducer processes action
        ↓
State updates in Redux store
        ↓
Components using useSelector re-render
        ↓
UI updates automatically
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Learning Resources

- [Redux-Toolkit Documentation](https://redux-toolkit.js.org/)
- [Redux Official Docs](https://redux.js.org/)
- [React-Redux Hooks](https://react-redux.js.org/api/hooks)

## Key Takeaways

1. **Redux-Toolkit simplifies Redux** - Less boilerplate than traditional Redux
2. **Immer integration** - Write time-traveling updates that look like mutations
3. **Scalability** - Easy to add more slices for different features
4. **DevTools** - Built-in Redux DevTools for debugging
5. **Type Safety** - Works great with TypeScript (not shown in this example)

## Next Steps to Extend

- Add product filtering/search
- Implement user authentication & orders history
- Add product details page
- Implement wishlist feature
- Add discount/coupon system
- Connect to a backend API
- Convert to TypeScript for type safety

---

Happy learning! 🚀
