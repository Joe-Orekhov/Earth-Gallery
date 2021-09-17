import React from "react";

function CartItem({ item, userCartItems, performCartDelete }){

  function handleCartDelete() {
    const deleteIndex = userCartItems.findIndex(arrayItem => arrayItem === item);
    performCartDelete(deleteIndex);
  }

  return(
    <div className="cart-item-card">
      <img className="cart-image" src={item.itemImg} alt={item.name}></img>
      <h3 className="cart-name">{item.itemName}</h3>
      <p className="cart-price">$ {item.itemPrice}</p>
      <button className="cart-button-delete" onClick={handleCartDelete}>Put Back</button>
    </div>
  )
}

export default CartItem;