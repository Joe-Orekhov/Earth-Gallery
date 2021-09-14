import react, { useState } from "react";

function ItemCard({ item, buttonText }){

  const { itemName, itemImg, itemCreator, itemDescription, itemPrice } = item;
  const [ showEditForm, setEditForm ] = useState(false);

  function handleClick() {
    setEditForm(!showEditForm);
  }

  return(
    <div className="item-card">
      <div className="image-box">
        <img className="item-image" src={itemImg} alt={itemName}></img>
      </div>
      <span id="card-price">{itemPrice}</span>
      <h3>{itemName}</h3>
      <p>{itemDescription}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

export default ItemCard;