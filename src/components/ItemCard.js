import react from "react";

function ItemCard({ item, buttonText }){

  const { itemName, itemImg, itemCreator, itemDescription, itemPrice } = item;

  return(
    <div className="item-card">
      <img src={itemImg} alt={itemName}></img>
      <span>{itemPrice}</span>
      <h3>{itemName}</h3>
      <p>{itemDescription}</p>
      <button>{buttonText}</button>
    </div>
  )
}

export default ItemCard;