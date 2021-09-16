import React from "react";
import ItemCard from "./ItemCard";

function CartItem({ item }){
  return(
    <div className="cart-item-card">
      <div className="image-box">
        <img className="item-image" src={item.itemImg} alt={item.name}></img>
      </div>
      <span id="card-price">{item.itemPrice}</span>
      <h3 name="name">{item.itemName}</h3>
      <p>{item.itemDescription}</p>
    </div>
  )
}



export default CartItem;