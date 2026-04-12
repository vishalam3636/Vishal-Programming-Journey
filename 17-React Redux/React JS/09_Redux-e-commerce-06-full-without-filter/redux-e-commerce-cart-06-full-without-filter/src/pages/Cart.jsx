import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addToCart, decrementFromCart, removeFromCart} from "../redux/cartSlice.js";
import {decrementStock, incrementStock} from "../redux/productSlice.js";


export default function Cart(){
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);

    const {cartItems, totalItems, totalPrice} = useSelector((state) => state.cartItems);
    return(
        <div className="cart">
            <h1>Cart</h1>
            <div>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: ${totalPrice}</p>
            </div>
            <div className="cartItemContaine">
                {
                    cartItems.map((item) => {
                        const currentItem = products.find((curr) => curr.id === item.id)
                        const itemQuantity = currentItem.quantity;
                        return(
                            <div className="cartItem" key={item.id}>
                                <img src={item.thumbnail} />
                                <p>Name: {item.title}</p>
                                <p>Price: ${item.price}</p>
                                <div>
                                    <button
                                        onClick={()=>{
                                            dispatch(decrementFromCart(item));
                                            dispatch(incrementStock({id:item.id, quantity:1}))
                                        }}

                                        disabled={itemQuantity<=0}
                                    >
                                        -
                                    </button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button
                                        onClick={()=>{
                                            dispatch(addToCart(item));
                                            dispatch(decrementStock({id:item.id, quantity:1}))
                                        }}

                                        disabled={currentItem.stock<=0}
                                    >
                                        +
                                    </button>
                                </div>
                                <p>
                                    <button
                                        onClick={()=>{
                                            dispatch(removeFromCart(item))
                                            dispatch(incrementStock({id:item.id, quantity: item.quantity}))
                                        }}
                                    >
                                        Remove Item
                                    </button>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}