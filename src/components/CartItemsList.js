import React, { useState } from "react";
import CartItem from "./CartItem";

function CartItemsList({ selectUser, userCartItems, performCheckout, performCartDelete }){

  function handleCheckout() {
    performCheckout();
    alert("Purchase complete! Check your email for confirmation and shipping details.")
  }

  return(
    <div className="cart-list">
      {userCartItems.map((cartItem) => <CartItem 
        key={cartItem.id} 
        item={cartItem} 
        userCartItems={userCartItems} 
        performCartDelete={performCartDelete}
      />)}
      <div className="cart-summary">
        <p>Total: ${userCartItems.reduce((previous, current) => previous + parseInt(current.itemPrice), 0)}</p>
        <button onClick={handleCheckout}>1-Click 📦</button>
      </div>
    </div>
  )
}

export default CartItemsList;