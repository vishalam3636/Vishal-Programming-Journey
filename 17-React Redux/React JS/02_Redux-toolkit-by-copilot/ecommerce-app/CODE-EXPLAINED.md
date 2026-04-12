# Your Code Explained - Line by Line

## 📁 File: src/redux/store.js

```javascript
import { configureStore } from '@reduxjs/toolkit';
                ↓
    Redux-Toolkit's function to create a store
    (replaces old createStore from Redux)

import productReducer from './productSlice';
    ↓
    Imports the product slice reducer
    Handles all product-related state

import cartReducer from './cartSlice';
    ↓
    Imports the cart slice reducer
    Handles all cart-related state


const store = configureStore({
    ↓
    Creates the Redux store using configureStore()
    Features:
    - Auto-includes Redux DevTools
    - Auto-includes middleware
    - Simplified setup

  reducer: {
    products: productReducer,    ← state.products = productReducer
    cart: cartReducer,           ← state.cart = cartReducer
  },
    ↓
    Combines all slice reducers into one store
    Creates the state shape:
    {
      products: {...},
      cart: {...}
    }
});

export default store;
    ↓
    Exports store to be used in App.jsx with <Provider>
```

---

## 📦 File: src/redux/productSlice.js

```javascript
import { createSlice } from '@reduxjs/toolkit';
    ↓
    Function to create a slice (combines state + actions)

const initialState = {
  items: [
    { id: 1, name: 'Laptop', price: 999.99, image: '💻' },
    { id: 2, name: 'Phone', price: 699.99, image: '📱' },
    { id: 3, name: 'Headphones', price: 199.99, image: '🎧' },
    { id: 4, name: 'Smartwatch', price: 299.99, image: '⌚' },
    { id: 5, name: 'Tablet', price: 499.99, image: '📱' },
    { id: 6, name: 'Camera', price: 1299.99, image: '📷' },
  ],
};
    ↓
    Initial state contains all products
    This data is displayed in ProductList.jsx


const productSlice = createSlice({
    ↓
    Creates a slice with name, initial state, and reducers

  name: 'products',
    ↓
    Slice name (used in action types like 'products/someAction')

  initialState,
    ↓
    The initial state defined above

  reducers: {
    // Add more reducers as needed
  },
    ↓
    Reducers object:
    - Empty in this version (just displaying products)
    - Could add: addProduct, deleteProduct, filterProducts, etc.
});

export default productSlice.reducer;
    ↓
    Exports the reducer to be used in store.js
    The reducer is what gets imported into configureStore()
```

---

## 🛒 File: src/redux/cartSlice.js

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],              ← Empty array (no items initially)
  totalPrice: 0,          ← Total starts at 0
};

const cartSlice = createSlice({
  name: 'cart',           ← Action types: 'cart/addToCart', 'cart/removeFromCart'
  initialState,
  reducers: {
    
    // ACTION 1: Add item to cart
    addToCart: (state, action) => {
        ↓
        state = current cart state
        action.payload = the product being added
        
      const existingItem = state.items.find(item => item.id === action.payload.id);
         ↓
         Checks if product already in cart
         
      if (existingItem) {
        existingItem.quantity += 1;
            ↓
            If already there: increase quantity by 1
            (This is how "add same item twice" increases quantity)
      } else {
        state.items.push({
          ...action.payload,        ← Spread product data
          quantity: 1,              ← Set initial quantity to 1
        });
            ↓
            If NEW item: add to cart with quantity 1
      }
      
      // Update total price
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
            ↓
            Recalculate total: sum of (price × quantity) for all items
            reduce() iterates through all items and sums them
    },

    
    // ACTION 2: Remove item from cart
    removeFromCart: (state, action) => {
        ↓
        action.payload = product ID to remove
        
      state.items = state.items.filter(item => item.id !== action.payload);
            ↓
            Keep all items EXCEPT the one with matching ID
            
      // Update total price
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
            ↓
            Recalculate total after deletion
    },

    
    // ACTION 3: Increase quantity
    increaseQuantity: (state, action) => {
        ↓
        action.payload = product ID
        
      const item = state.items.find(item => item.id === action.payload);
            ↓
            Find the item in cart
            
      if (item) {
        item.quantity += 1;
            ↓
            Increase its quantity by 1
      }
      
      // Update total price
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
            ↓
            Recalculate total
    },

    
    // ACTION 4: Decrease quantity
    decreaseQuantity: (state, action) => {
        ↓
        action.payload = product ID
        
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
            ↓
            If quantity > 1, just decrease it
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(i => i.id !== action.payload);
            ↓
            If quantity is 1, remove the item entirely
      }
      
      // Update total price
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
            ↓
            Recalculate total
    },

    
    // ACTION 5: Clear entire cart
    clearCart: (state) => {
        ↓
        No payload needed (just clear everything)
        
      state.items = [];
      state.totalPrice = 0;
            ↓
            Empty the cart and reset total
    },
  },
});

// Export all actions
export const { 
  addToCart,           ← Action created from reducer
  removeFromCart,      ← Action created from reducer
  increaseQuantity,    ← Action created from reducer
  decreaseQuantity,    ← Action created from reducer
  clearCart            ← Action created from reducer
} = cartSlice.actions;
    ↓
    These actions are generated AUTOMATICALLY by Redux-Toolkit
    from the reducer functions
    
    Usage in components:
    dispatch(addToCart(product))
    dispatch(removeFromCart(productId))
    etc.

// Export the reducer
export default cartSlice.reducer;
    ↓
    Exports reducer to be used in store.js
```

---

## ⚛️ File: src/components/ProductList.jsx

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
    ↓
    Hooks to interact with Redux:
    - useSelector: read state from store
    - useDispatch: send actions to store

import { addToCart } from '../redux/cartSlice';
    ↓
    Import the action to dispatch when user clicks

import './ProductList.css';

export default function ProductList() {
  const dispatch = useDispatch();
      ↓
      Get the dispatch function
      Used to send actions: dispatch(addToCart(product))

  const products = useSelector(state => state.products.items);
      ↓
      Read products from Redux store
      state.products is from store.js
      .items is the products array
      
      Returns: [6 product objects]
      
      Subscribes component to this part of state
      If products change → component re-renders

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
        ↓
        Send action to Redux:
        Type: 'cart/addToCart'
        Payload: {id: 1, name: 'Laptop', ...}
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
            ↓
            Loop through each product
            
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <button 
              className="add-btn"
              onClick={() => handleAddToCart(product)}
                  ↓
                  When clicked: dispatch addToCart action
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 🛒 File: src/components/Cart.jsx

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeFromCart,       ← Actions imported from cartSlice
  increaseQuantity,
  decreaseQuantity, 
  clearCart 
} from '../redux/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(state => state.cart);
      ↓
      Destructure items and totalPrice from state.cart
      
      Subscribes to cart state
      If cart changes → component re-renders


  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      
      {items.length === 0 ? (
        <p className="empty-message">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
                ↓
                Loop through each item in cart
                
              <div key={item.id} className="cart-item">
                <div className="item-image">{item.image}</div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price}</p>
                </div>
                
                <div className="quantity-control">
                  <button 
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                        ↓
                        Send decreaseQuantity action with product ID
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                        ↓
                        Send increaseQuantity action with product ID
                  >
                    +
                  </button>
                </div>
                
                <p className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                      ↓
                      Calculate: price × quantity
                </p>
                
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                      ↓
                      Send removeFromCart action with product ID
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
                ↓
                Display totalPrice from Redux state
                Automatically updated when items change
                
            <div className="cart-actions">
              <button 
                className="checkout-btn"
                onClick={() => alert(`Checkout: $${totalPrice.toFixed(2)}`)}
              >
                Checkout
              </button>
              <button 
                className="clear-btn"
                onClick={() => dispatch(clearCart())}
                    ↓
                    Send clearCart action (no payload needed)
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
```

---

## 📱 File: src/App.jsx

```javascript
import React from 'react';
import { Provider } from 'react-redux';
    ↓
    Provider: Component that makes Redux available to all children

import store from './redux/store';
    ↓
    Import the Redux store from store.js

import ProductList from './components/ProductList';
import Cart from './components/Cart';
    ↓
    Import components that use Redux

import './App.css';

function App() {
  return (
    <Provider store={store}>
        ↓
        Wraps entire app with Redux Provider
        All children can now use useSelector and useDispatch
        
      <div className="app">
        <header className="app-header">
          <h1>🛍️ Redux E-Commerce Store</h1>
          <p>Learn Redux-Toolkit with a practical example</p>
        </header>
        
        <div className="app-container">
          <div className="main-content">
            <ProductList />
                ↓
                Shows products from Redux store
                Dispatches addToCart when clicked
          </div>
          
          <div className="sidebar">
            <Cart />
                ↓
                Shows cart items from Redux store
                Dispatches remove/increase/decrease actions
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
```

---

## 🔄 Complete Flow: Adding Item to Cart

```
Step 1: User sees product "Laptop" in ProductList
        ↓
Step 2: User clicks "Add to Cart" button
        ↓
Step 3: ProductList.jsx executes:
        dispatch(addToCart({id: 1, name: 'Laptop', price: 999.99}))
        ↓
Step 4: Redux receives action:
        {
          type: 'cart/addToCart',
          payload: {id: 1, name: 'Laptop', price: 999.99}
        }
        ↓
Step 5: cartSlice reducer processes it:
        addToCart: (state, action) => {
          state.items.push({...action.payload, quantity: 1})
        }
        ↓
Step 6: State updates:
        cart: {
          items: [{id: 1, name: 'Laptop', price: 999.99, quantity: 1}],
          totalPrice: 999.99
        }
        ↓
Step 7: Cart.jsx component is subscribed with useSelector
        Sees new state → re-renders
        ↓
Step 8: User sees "Laptop" in their cart with total: $999.99
```

---

## 🎯 Key Takeaways

1. **Redux stores global state** that components can access
2. **Actions describe what happened** (addToCart, removeFromCart)
3. **Reducers update state** based on actions
4. **Components dispatch actions** when user interacts
5. **Components subscribe to state** with useSelector
6. **State updates → automatic re-renders**
7. **Redux-Toolkit simplifies everything** (Immer, auto actions, etc.)

Happy learning! 🚀
