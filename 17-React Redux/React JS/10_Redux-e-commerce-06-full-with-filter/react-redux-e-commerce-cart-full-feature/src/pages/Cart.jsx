import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { addToCart, decrementFromCart, removeItemFromCart } from "../redux/cartSlice";
import { incrementStock, decrementStock } from "../redux/productSlice";

export default function Cart(){
    const dispatch = useDispatch();
    const {cartItems, totalItem, totalPrice} = useSelector((state) => state.cartItems);
    const {products} = useSelector((state) => state.products);

    console.log(cartItems, ">>>cartItems")
    console.log(totalItem, ">>>totalItem")
    console.log(totalPrice, ">>>totalPrice")
    return(
        <div className="cart">
            <h1>Cart</h1>
            <div>
                <p>Total Items: {totalItem}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
            <div className="cartItemContaine">
                {
                    cartItems.map((item) => {
                        const currProd = products.find((currItem) => currItem.id === item.id );
                        return(
                            <div className="cartItem" key={item.id}>
                                <img src={item.thumbnail} />
                                <p>Name: {item.name}</p>
                                <p>Price: ${item.price}</p>
                                <div>
                                    <button
                                        onClick={()=>{
                                            dispatch(decrementFromCart(item));
                                            dispatch(incrementStock({id:item.id, quantity:1}));
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button
                                        onClick={()=>{
                                            dispatch(addToCart(item));
                                            dispatch(decrementStock({id:item.id, quantity:1}))
                                        }}

                                        disabled={!currProd || currProd.stock<=0}
                                    >
                                        +
                                    </button>
                                </div>
                                <p>
                                    <button
                                        onClick={()=>{
                                            dispatch(removeItemFromCart(item));
                                            dispatch(incrementStock({id:item.id, quantity:item.quantity}));
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