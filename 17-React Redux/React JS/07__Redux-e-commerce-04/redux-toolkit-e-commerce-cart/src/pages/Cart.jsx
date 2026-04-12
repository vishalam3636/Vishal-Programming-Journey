import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addToCart, decrementFromCart} from "../redux/cartSlice.js"
import {decrementStock, incrementStock} from "../redux/productSlice.js";

export default function Cart() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    const {cartItems, totalItem, totalPrice} = useSelector((state) => state.cartItems)

    console.log(cartItems, ">>>cartItems in cart")
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div>
                <p>Total Items:{totalItem}</p>
                <p>Total Price: {totalPrice.toFixed(2)}</p>
            </div>
            <div className="cartItemContainer">
                {
                    cartItems?.map((item) => {
                        const productInStore = products.find((product) => product.id === item.id);
                        const availableStock = productInStore?.stock ?? 0;

                        return (
                            <div className="cartItem" key={item.id}>
                                <img src={item.thumbnail} />
                                <p>Name: {item.title}</p>
                                <p>Price: ${item.price}</p>
                                <div>
                                    <button onClick={()=>{
                                        dispatch(decrementFromCart(item));
                                        dispatch(incrementStock({id:item.id, quantity:1}))
                                    }}>-</button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button 
                                        onClick={()=>{
                                            if (availableStock <= 0) return;
                                            dispatch(addToCart(item));
                                            dispatch(decrementStock({id: item.id, quantity:1}))
                                        }}
                                        disabled={availableStock <= 0}
                                    >+</button>
                                </div>
                                <p>
                                    <button>Remove Item</button>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
