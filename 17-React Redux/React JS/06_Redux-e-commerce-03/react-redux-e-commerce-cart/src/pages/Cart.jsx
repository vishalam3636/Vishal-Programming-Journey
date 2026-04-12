import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
    const {cartItems, totalPrice, totalItem} = useSelector((state)=> state.cartItems);

    console.log(cartItems, ">>>cartItems in cart")
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div>
                <p>Total Items:{totalItem}</p>
                <p>Total Price:{Number(totalPrice).toFixed(2)}</p>
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
                                    <button>-</button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button>+</button>
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
