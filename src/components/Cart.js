import React from "react";
import CartItemsList from "./CartItemsList";
import { Link } from "react-router-dom";

function Cart({ selectUser, userCartItems }){
  return(
    <div className="cart-container">
      <h1>Cart</h1>
       <CartItemsList selectUser={selectUser} userCartItems={userCartItems} />
    </div>

  )
}

export default Cart;