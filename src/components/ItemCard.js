import react from "react";

function ItemCard({ item, buttonText, handleClick }){

  const { itemName, itemImg, itemCreator, itemDescription, itemPrice } = item;

  return(
    <div className="item-card">
      <div className="image-box">
        <img className="item-image" src={itemImg} alt={itemName}></img>
      </div>
      <span id="card-price">{itemPrice}</span>
      <h3 name="name">{itemName}</h3>
      <p>{itemDescription}</p>
      <button onClick={() => handleClick(item)}> {buttonText}</button>
    </div>
  )
}

export default ItemCard;