import { useSelector } from "react-redux";

const AddToCart = () => {
    const cartCount = useSelector((state) => state.cart.value);

    return (
        <div className="cart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className="cart-count">{cartCount}</span>
            </div>
    )
}

export default AddToCart;