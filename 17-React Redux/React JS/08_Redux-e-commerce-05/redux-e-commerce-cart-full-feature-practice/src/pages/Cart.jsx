import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementFromCart, removeItemFromCart } from "../redux/cartSlice";
import { incrementStock, decrementStock } from "../redux/productSlice";

export default function Cart() {
    const dispatch = useDispatch();
    const {cartItems, totalItems, totalPrice} = useSelector((state) => state.cartItems);
    const {products} = useSelector((state) => state.products)

    console.log(cartItems, ">>>cartItems in cart")
    console.log(products, ">>>products in cart")
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div>
                <p>Total Items:{0}</p>
                <p>Total Price: {0}</p>
            </div>
            <div className="cartItemContainer">
                {
                    cartItems?.map((item) => {
                        const findProduct = products.find(product => product.id === item.id)
                        return (
                            <div className="cartItem" key={item.id}>
                                <img src={item.thumbnail} />
                                <p>Name: {item.title}</p>
                                <p>Price: ${item.price}</p>
                                <div>
                                    <button
                                        onClick={()=> {
                                            dispatch(decrementFromCart(item));
                                            dispatch(incrementStock({id: item.id, quantity:1}))
                                        }}
                                    >-</button>
                                    <span>Quantity: {item?.quantity}</span>
                                    <button
                                        onClick={()=>{
                                            dispatch(addToCart(item));
                                            dispatch(decrementStock({id:item.id, quantity:1}))
                                        }}
                                        disabled={findProduct.stock<=0}
                                    >+</button>
                                </div>
                                <p>
                                    <button
                                        onClick={() => {
                                            dispatch(removeItemFromCart(item));
                                            dispatch(incrementStock({id: item.id, quantity: item?.quantity}))
                                        }}
                                    >Remove Item</button>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
