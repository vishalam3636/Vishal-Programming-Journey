import React from "react";

export default function Cart(){
    return(
        <div className="cart">
            <h1>Cart</h1>
            <div>
                <p>Total Items: {0}</p>
                <p>Total Price: ${0}</p>
            </div>
            <div className="cartItemContaine">
                {
                    // cartItems.map((item) => {
                    //     return(
                    //         <div className="cartItem" key={item.id}>
                    //             <img src={item.thumbnail} />
                    //             <p>Name: {item.title}</p>
                    //             <p>Price: ${item.price}</p>
                    //             <div>
                    //                 <button>
                    //                     -
                    //                 </button>
                    //                 <span>Quantity: {item.quantity}</span>
                    //                 <button>
                    //                     +
                    //                 </button>
                    //             </div>
                    //             <p>
                    //                 <button>
                    //                     Remove Item
                    //                 </button>
                    //             </p>
                    //         </div>
                    //     )
                    // })
                }
            </div>
        </div>
    )
}