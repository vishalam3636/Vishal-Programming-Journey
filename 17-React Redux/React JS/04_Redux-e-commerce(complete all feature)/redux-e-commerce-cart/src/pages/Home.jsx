import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementFromCart } from "../redux/cartSlice";
import { decrementStock, incrementStock, setFilters } from "../redux/productsSlice";

export default function Home(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const filters = useSelector((state) => state.products.filters);
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    const [searchTitle, setSearchTitle] = useState(filters.title);
    const [searchCategory, setSearchCategory] = useState(filters.category);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(
                setFilters({
                    title: searchTitle.trim(),
                    category: searchCategory
                })
            );
        }, 400);

        return () => clearTimeout(timer);
    }, [searchTitle, searchCategory, dispatch]);

    const categories = useMemo(() => {
        return ["all", ...new Set(products.map((item) => item.category))];
    }, [products]);

    const filteredProducts = useMemo(() => {
        return products.filter((item) => {
            const matchesTitle = item.title
                .toLowerCase()
                .includes(filters.title.toLowerCase());
            const matchesCategory =
                filters.category === "all" || item.category === filters.category;

            return matchesTitle && matchesCategory;
        });
    }, [products, filters]);

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
    return(
        <div className="home">
            <div>
                <input
                    type="text"
                    placeholder="Find by title"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
                <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="productsList">
                {
                    filteredProducts?.map((item) => {
                        const cartItem = cartItems.find((cartProduct) => cartProduct.id === item.id);
                        const cartQuantity = cartItem?.quantity || 0;
                        const isInCart = cartQuantity > 0;

                        return(
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
                                    <div>
                                        <button onClick={() => handleDecrement(item)} disabled={cartQuantity <= 0}>-</button>
                                        <span>Quantity: {cartQuantity}</span>
                                        <button onClick={() => handleIncrement(item)} disabled={item.stock <= 0}>+</button>
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