import React, { use, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementStock, incrementStock } from "../radux/productSlice.js";
import { addToCart, decrementFromCart } from "../radux/cartSlice.js";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { cartItems, totalPrice, totalItem } = useSelector(
    (state) => state.cartItems,
  );

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(decrementStock({ id: item.id, quantity: 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(decrementFromCart(item));
    dispatch(incrementStock({ id: item.id, quantity: 1 }));
  };

  console.log(products, ">>>products in home page");
  console.log(cartItems, ">>>>cartItems in home page");
  return (
    <div className="home">
      {/* <div>
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
            </div> */}

      <div className="productsList">
        {products?.map((item) => {
          const currProduct = cartItems?.find(
            (currProd) => currProd.id === item.id,
          );
          const quantity = currProduct?.quantity || 0;
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
                  disabled={quantity > 0}
                >
                  Add To Cart
                </button>
                <div>
                  <button
                    onClick={() => handleDecrement(item)}
                    disabled={quantity <= 0}
                  >
                    -
                  </button>
                  <span>Quantity: {quantity}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={item.stock <= 0}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
