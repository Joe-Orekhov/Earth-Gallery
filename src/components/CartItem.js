import React from "react";
import ItemCard from "./ItemCard";

function CartItem({ item }){

  return(
    <div className="cart-item-card">
      <h3 className="cart-name">{item.itemName}</h3>
      <span className="cart-price">$ {item.itemPrice}</span>
      <img className="cart-image" src={item.itemImg} alt={item.name}></img>
    </div>
  )
}

export default CartItem;