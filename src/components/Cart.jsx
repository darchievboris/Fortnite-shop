import React, { useContext } from "react";
import { ShopContext } from "../context";

const Cart = () => {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.length;
  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity && <span className="cart_quantity">{quantity}</span>}
    </div>
  );
};

export default Cart;
