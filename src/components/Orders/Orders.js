import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import "../Orders/Order.css"
import useProducts from '../../hooks/useProducts'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const navigate = useNavigate()

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/inventory">
                        <button onClick={() => navigate('./inventory')}>Proceed check our</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};
export default Orders;