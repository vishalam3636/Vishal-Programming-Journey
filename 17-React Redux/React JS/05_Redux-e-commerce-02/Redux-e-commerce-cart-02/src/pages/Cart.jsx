import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { incrementStock, decrementStock } from "../redux/productSlice.js";
import { decrementFromCart, addToCart } from "../redux/cartSlice";

export default function Cart() {
    const dispatch = useDispatch();
    const {cartItems, totalInCart, TotalPrice} = useSelector((state) => state.cartItems)

    console.log(cartItems, ">>>cartItems in cart page")
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div>
                <p>Total Items:{totalInCart}</p>
                <p>Total Price:{TotalPrice}</p>
            </div>
            <div className="cartItemContainer">
                {
                    cartItems?.map((item) => {
                        return (
                            <div className="cartItem" key={item.id}>
                                <img src={item.thumbnail} />
                                <p>Name: {item.title}</p>
                                <p>Price: ${item.price}</p>
                                <div>
                                    <button
                                        onClick={()=> {
                                            dispatch(decrementFromCart(item));
                                            dispatch(incrementStock({ id: item.id, quantity: 1 }));
                                        }}
                                    >-</button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button
                                        onClick={()=>{
                                            dispatch(addToCart(item));
                                            dispatch(decrementStock({ id: item.id, quantity: 1 }));
                                        }}
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
