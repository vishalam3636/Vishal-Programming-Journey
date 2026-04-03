import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  clearCart 
} from '../redux/cartSlice';
import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(state => state.cart);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      
      {items.length === 0 ? (
        <p className="empty-message">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
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
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
                <p className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
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
