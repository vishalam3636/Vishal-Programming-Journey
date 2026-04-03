import React, { useMemo, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { addToCart, decrementFromCart } from "../redux/cartSlice";
import {decrementStock, incrementStock} from "../redux/productSlice.js";
import ProductFilters from "../components/ProductFilters";

export default function Home(){
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    const {cartItems} = useSelector((state) => state.cartItems);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        dispatch(decrementStock({id:item.id, quantity:1}))
    }

    const handleIncrement = (item) => {
        dispatch(addToCart(item));
        dispatch(decrementStock({id:item.id, quantity:1}))
    }

    const handleDecrement = (item) => {
        dispatch(decrementFromCart(item));
        dispatch(incrementStock({id:item.id, quantity:1}))
    }

    const visibleProducts = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();

        const filtered = products.filter((item) =>
            (item.name || "").toLowerCase().includes(query)
        );

        const sorted = [...filtered].sort((a, b) => {
            let comparison = 0;

            if (sortBy === "price") {
                comparison = a.price - b.price;
            } else {
                comparison = (a.name || "").localeCompare(b.name || "");
            }

            return sortOrder === "asc" ? comparison : -comparison;
        });

        return sorted;
    }, [products, searchTerm, sortBy, sortOrder]);


    console.log(products, ">>>products in home")
    return(
        <div className="home">
            <ProductFilters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                sortBy={sortBy}
                onSortByChange={setSortBy}
                sortOrder={sortOrder}
                onSortOrderChange={setSortOrder}
                onReset={() => {
                    setSearchTerm("");
                    setSortBy("name");
                    setSortOrder("asc");
                }}
            />
            <div className="productsList">
                {
                    visibleProducts?.map((item) => {
                        const currProduct = cartItems.find(prod => prod.id === item.id);
                        const quantity = currProduct?.quantity || 0;
                        return(
                            <div className="product" key={item.id}>
                                <div className="item">
                                    <img src={item.thumbnail} />
                                </div>
                                <div>
                                    <p>Price: {item.price} Rupees</p>
                                    <p>Name: {item.name}</p>
                                    <p>category: {item.category}</p>
                                    <p>discount: {item.discountPercentage}%</p>
                                    <p>In Stock: {item.stock}</p>
                                    <button
                                        onClick={()=>handleAddToCart(item)}
                                        disabled={quantity>0}
                                    >
                                        Add To Cart
                                    </button>
                                    <div>
                                        <button
                                            onClick={()=>handleDecrement(item)}
                                            disabled={quantity<=0}
                                        >-</button>
                                        <span>Quantity: {quantity}</span>
                                        <button
                                            onClick={()=>handleIncrement(item)}
                                            disabled={item.stock<=0}
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