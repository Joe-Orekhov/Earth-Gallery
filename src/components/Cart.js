import React from "react";
import CartItemsList from "./CartItemsList";

function Cart({ selectUser, userCartItems, performCheckout }){
  return(
    <div className="cart-container">
      <h1>Cart</h1>
       <CartItemsList selectUser={selectUser} userCartItems={userCartItems} performCheckout={performCheckout}/>
    </div>
  )
}

export default Cart;