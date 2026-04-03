import React, { useEffect, useMemo, useState } from "react";
export default function Home(){
    return(
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
                {
                    // filteredProducts?.map((item) => {
                    //     return(
                    //         <div className="product" key={item.id}>
                    //             <div className="item">
                    //                 <img src={item.thumbnail} />
                    //             </div>
                    //             <div>
                    //                 <p>Price: {item.price} Rupees</p>
                    //                 <p>Name: {item.title}</p>
                    //                 <p>category: {item.category}</p>
                    //                 <p>discount: {item.discountPercentage}%</p>
                    //                 <p>In Stock: {item.stock}</p>
                    //                 <button>
                    //                     Add To Cart
                    //                 </button>
                    //                 <div>
                    //                     <button>-</button>
                    //                     <span>Quantity: {cartQuantity}</span>
                    //                     <button>+</button>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     )
                    // })
                }
            </div>
        </div>
    )
}