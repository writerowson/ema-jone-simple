import React from 'react';
import './Product.css'



const Product = (props) => {
    // const { product, handleAddToCart } = { props }
    const { name, img, seller, ratings, price } = props.product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p>Price : ${price}</p>
                <p><small>Manufacture: <b>{seller}</b></small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;
