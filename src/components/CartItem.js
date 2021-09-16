import React from "react";
import ItemCard from "./ItemCard";

function CartItem({ item, userCartItems, performCartDelete }){

  function handleCartDelete() {
    const deleteIndex = userCartItems.findIndex(arrayItem => arrayItem === item);
    performCartDelete(deleteIndex);
  }

  return(
    <div className="cart-item-card">
      <h3 className="cart-name">{item.itemName}</h3>
      <p className="cart-price">$ {item.itemPrice}</p>
      <button onClick={handleCartDelete}>Delete</button>
      <img className="cart-image" src={item.itemImg} alt={item.name}></img>
    </div>
  )
}

export default CartItem;