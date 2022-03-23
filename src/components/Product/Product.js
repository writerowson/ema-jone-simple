import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
                <p className='btn-text'>Add to cart  </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;

const student1 = { name: "rafique", marks: 79, result: "A+" };
console.log(student1.mark + 1);
