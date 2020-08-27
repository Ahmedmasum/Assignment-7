import React from "react";
import "./Cart.css";
import { Button } from "react-bootstrap";

const Cart = (props) => {
  const newCart = props.cart;
  let totalPrice = newCart.reduce((result, course) => result + course.price, 0);
  if (newCart.length > 2) {
    totalPrice = totalPrice - 5;
  }

  return (
    <div className="cart-div">
      <h3>Courses Cart</h3>
      <p>Number of Courses Added: {props.cart.length}</p>
      <p>Total Price: {totalPrice} $</p>
      {newCart.length > 2 ? <p>Discount: 5 $</p> : null}
      <p>Grand Total: {totalPrice}</p>
      <Button variant="danger">Procced To CheckOut</Button>
    </div>
  );
};

export default Cart;
