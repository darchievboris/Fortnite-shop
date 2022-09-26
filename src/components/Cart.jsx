import React from 'react';

const Cart = ({quantity=0, handleBasketShow = Function.prototype}) => {
    return (
        <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity && <span className="cart_quantity">{quantity}</span> }
        </div>
    )
};

export default Cart;