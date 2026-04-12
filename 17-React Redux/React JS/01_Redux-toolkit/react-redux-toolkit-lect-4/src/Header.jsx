import AddToCart from "./AddToCart";

const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="logo">
                <h1>ShopLogo</h1>
            </div>
            
            <nav className="nav">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Products</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Contact</a>
            </nav>
            <AddToCart />
        </div>
    </header>
    )
}

export default Header;