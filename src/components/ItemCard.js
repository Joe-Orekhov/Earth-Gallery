import react, { useState } from "react";
import EditItemForm from "./EditItemForm";

function ItemCard({ item, selectUser, buttonText, buttonValue, handleSubmitEdit }){

  const { itemName, itemImg, itemCreator, itemDescription, itemPrice } = item;
  const [ showEditForm, setEditForm ] = useState(false);

  function handleClick(event) {
    if (event.target.value === "edit") {
      console.log("This is an edit button")
      setEditForm(!showEditForm);
    } else if (event.target.value === "addToCart") {
      console.log("This is added to cart!")
    }
  }

  return(
    <div className="item-card">
      <div className="image-box">
        <img className="item-image" src={itemImg} alt={itemName}></img>
      </div>
      <span id="card-price">{itemPrice}</span>
      <h3>{itemName}</h3>
      <p>{itemDescription}</p>
      <button onClick={handleClick} value={buttonValue}>{buttonText}</button>
      {showEditForm ? <EditItemForm item={item} handleSubmitEdit={handleSubmitEdit} selectUser={selectUser}/> : null}
    </div>
  )
}

export default ItemCard;