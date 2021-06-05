import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce( (total, prd) => total + prd.price , 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 350){
        shipping = 0;
    }
    else if (total > 150){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }

    const tax = total / 10;
    const grandtotal = (total + shipping + Number(tax));
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items ordered: {cart.length}</h5>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandtotal)}</p>

        </div>
    );
};

export default Cart;