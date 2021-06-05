import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h5>{name}</h5>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only{stock} left in stock - Order soon</small></p>
                <button className= "main-button" onClick = {() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faDolly} />Add to Card</button>
            </div>

        </div>
    );
};

export default Product;