import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementFromCart } from "../redux/cartSlice";
import { decrementStock, incrementStock } from "../redux/productSlice";

export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const cartItems = useSelector((state) => state.cartItems.cartItems);

    const handleAddToCart = (item) => {
        if (item.stock <= 0) return;
        dispatch(addToCart(item));
        dispatch(decrementStock({ id: item.id, quantity: 1 }));
    }

    const handleIncrement = (item) => {
        if (item.stock <= 0) return;
        dispatch(addToCart(item));
        dispatch(decrementStock({ id: item.id, quantity: 1 }));
    };

    const handleDecrement = (item) => {
        const cartItem = cartItems.find((cartProduct) => cartProduct.id === item.id);
        if (!cartItem) return;

        dispatch(decrementFromCart(item));
        dispatch(incrementStock({ id: item.id, quantity: 1 }));
    };

    console.log(products, ">>>products in home")
    return (
        <div className="home">
            <div className="productsList">
                {
                    products.map((item) => {
                        const cartItem = cartItems.find((cartProduct) => cartProduct.id === item.id);
                        const cartQuantity = cartItem?.quantity || 0;
                        const isInCart = cartQuantity > 0;

                        return (
                            <div className="product" key={item.id}>
                                <div className="item">
                                    <img src={item.thumbnail} />
                                </div>
                                <div>
                                    <p>Price: {item.price} Rupees</p>
                                    <p>Name: {item.title}</p>
                                    <p>category: {item.category}</p>
                                    <p>discount: {item.discountPercentage}%</p>
                                    <p>In Stock: {item.stock}</p>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        disabled={isInCart || item.stock <= 0}
                                    >
                                        Add To Cart
                                    </button>
                                    <div style={{ visibility: `${isInCart ? "visible" : "hidden"}` }}>
                                        <button
                                            onClick={() => handleDecrement(item)} disabled={cartQuantity <= 0}
                                        >-</button>
                                        <span>Quantity: {cartQuantity}</span>
                                        <button
                                            onClick={() => handleIncrement(item)} disabled={item.stock <= 0}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}