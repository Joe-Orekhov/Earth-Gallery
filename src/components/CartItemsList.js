import React from "react";
import CartItem from "./CartItem";

function CartItemsList({ selectUser, userCartItems }){
  return(
    <div className="cart-list">
      {userCartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
    </div>
  )
}

export default CartItemsList;