import {useDispatch} from 'react-redux';
import { addItem } from './redux/slice';

const Product = () => {
    const dispatch = useDispatch();

    return (
        <div>
        <section className="products-section">
        <h2 className="section-title">Featured Products</h2>
        
        <div className="products-grid">
            <div className="product-card">
                <div className="product-image">📱</div>
                <div className="product-info">
                    <h3 className="product-title">Smartphone Pro</h3>
                    <p className="product-description">Latest flagship smartphone with advanced features and stunning display.</p>
                    <div className="product-footer">
                        <span className="product-price">$899</span>
                        <button onClick={()=>dispatch(addItem())} className="add-to-cart-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <div className="product-card">
                <div className="product-image" style={{background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"}}>💻</div>
                <div className="product-info">
                    <h3 className="product-title">Laptop Ultra</h3>
                    <p className="product-description">Powerful laptop for professionals with high performance and sleek design.</p>
                    <div className="product-footer">
                        <span className="product-price">$1,299</span>
                        <button onClick={()=>dispatch(addItem())} className="add-to-cart-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <div className="product-card">
                <div className="product-image" style={{background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"}}>🎧</div>
                <div className="product-info">
                    <h3 className="product-title">Wireless Headphones</h3>
                    <p className="product-description">Premium noise-cancelling headphones with exceptional sound quality.</p>
                    <div className="product-footer">
                        <span className="product-price">$349</span>
                        <button onClick={()=>dispatch(addItem())} className="add-to-cart-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <div className="product-card">
                <div className="product-image" style={{background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"}}>⌚</div>
                <div className="product-info">
                    <h3 className="product-title">Smart Watch</h3>
                    <p className="product-description">Feature-rich smartwatch with fitness tracking and health monitoring.</p>
                    <div className="product-footer">
                        <span className="product-price">$449</span>
                        <button onClick={()=>dispatch(addItem())} className="add-to-cart-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
     </div>
    )
}

export default Product;