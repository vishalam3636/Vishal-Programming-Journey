import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, decrementFromCart } from "../redux/cartSlice";
import { incrementStock, decrementStock } from "../redux/productsSlice";

export default function Cart(){
    const dispatch = useDispatch();

    const { cartItems, totalInCart, TotalPrice } = useSelector((state) => state.cartItems);
    const products = useSelector((state) => state.products.products);

    return(
        <div className="cart">
            <h1>Cart</h1>
            <div>
                <p>Total Items: {totalInCart}</p>
                <p>Total Price: ${TotalPrice.toFixed(2)}</p>
            </div>
            <div className="cartItemContaine">
                {
                    cartItems.map((item) => {
                        const productInStore = products.find((product) => product.id === item.id);
                        const availableStock = productInStore?.stock ?? 0;

                        return(
                            <div className="cartItem" key={item.id}>
                                <img src={item.thumbnail} />
                                <p>Name: {item.title}</p>
                                <p>Price: ${item.price}</p>
                                <div>
                                    <button
                                        onClick={() => {
                                            dispatch(decrementFromCart(item));
                                            dispatch(incrementStock({ id: item.id, quantity: 1 }));
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button
                                        onClick={() => {
                                            if (availableStock <= 0) return;
                                            dispatch(addToCart(item));
                                            dispatch(decrementStock({ id: item.id, quantity: 1 }));
                                        }}
                                        disabled={availableStock <= 0}
                                    >
                                        +
                                    </button>
                                </div>
                                <p>
                                    <button
                                        onClick={() => {
                                            dispatch(removeFromCart(item));
                                            dispatch(incrementStock({ id: item.id, quantity: item.quantity }));
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