import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementStock, incrementStock } from "../redux/productSlice.js";
import { addToCart, decrementFromCart } from "../redux/cartSlice.js";

export default function Home() {
  const { products } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const { cartItems, totalItem, totalPrice } = useSelector(
    (state) => state.cartItems,
  );
  const dispatch = useDispatch();

  const handleAddTocart = (item) => {
    dispatch(addToCart(item));
    dispatch(decrementStock({ id: item.id, quantity: 1 }));
  };

  const handleDecrermentFromCart = (item) => {
    dispatch(decrementFromCart(item));
    dispatch(incrementStock({ id: item.id, quantity: 1 }));
  };

  const visibleProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const filtered = products.filter((item) =>
      (item.title || "").toLowerCase().includes(query),
    );

    const sorted = [...filtered].sort((a, b) => {
      let comparison = 0;

      if (sortBy === "price") {
        comparison = a.price - b.price;
      } else {
        comparison = (a.title || "").localeCompare(b.title || "");
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return sorted;
  }, [searchTerm, products, sortBy, sortOrder]);

  console.log(products, ">>>products in home");
  console.log(cartItems, ">>>cartItems in home");
  console.log(totalItem, ">>>total ite,m");
  return (
    <div className="home">
      <div>
        <input
          type="text"
          placeholder="Find by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
        {visibleProducts?.map((item) => {
          const currProduct = cartItems?.find((prod) => prod.id === item.id);
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
                  onClick={() => handleAddTocart(item)}
                  disabled={quantity >= 0}
                >
                  Add To Cart
                </button>
                <div>
                  <button onClick={() => handleDecrermentFromCart(item)}>
                    -
                  </button>
                  <span>Quantity: {item.quantity}</span>
                  <button
                    onClick={() => handleAddTocart(item)}
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
