import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementFromCart } from "../redux/cartSlice";
import { decrementStock, incrementStock } from "../redux/productSlice";


export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const {cartItems, totalItems, totalPrice} = useSelector((state) => state.cartItems)

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        dispatch(decrementStock({id: item.id, quantity: 1}));
    }

    const handleIncrement = (item) => {
        dispatch(addToCart(item));
        dispatch(decrementStock({id:item.id, quantity:1}))
    }

    const handleDecrement = (item) => {
        dispatch(decrementFromCart(item));
        dispatch(incrementStock({id:item.id, quantity:1}))
    }

    console.log(cartItems, ">>>cartItems in home")
    console.log(products, ">>>products in home")
    return (
        <div className="home">
            <h1>Products</h1>

            <div className="productsList">
                {
                    products.length > 0 ? (
                        products.map((item) => {
                            const cartProduct = cartItems.find(product => product.id == item.id);
                            const cartQuantity = cartProduct?.quantity || 0;
                            const isInCart = cartQuantity>0;
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
                                            onClick={()=>handleAddToCart(item)}
                                            disabled={isInCart || item.stock<=0}
                                        >
                                            Add To Cart
                                        </button>
                                        <div>
                                            <button
                                                onClick={()=>handleDecrement(item)}
                                                disabled={cartQuantity<=0}
                                            >-</button>
                                            <span>Quantity: {0}</span>
                                            <button 
                                                onClick={()=>handleIncrement(item)}
                                                disabled={item.stock<=0}
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : <h1>Loading....</h1>
                }
            </div>
        </div>
    )
}