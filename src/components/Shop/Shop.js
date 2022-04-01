import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'


import './Shop.css'
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';



const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])


    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }

        }
        setCart(saveCart)
        // dependency
    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }




    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;