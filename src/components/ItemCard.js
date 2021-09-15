import react, { useState } from "react";
import EditItemForm from "./EditItemForm";


function ItemCard({ item, selectUser, buttonText, buttonValue, handleClick }){


  const { itemName, itemImg, itemCreator, itemDescription, itemPrice } = item;
  const [ showEditForm, setEditForm ] = useState(false);

  function handleEditClick(event) {
    if (event.target.value === "edit") {
      console.log("This is an edit button")
      setEditForm(!showEditForm);
    } else if (event.target.value === "addToCart") {
      handleClick(item)
      console.log("This is added to cart!")
    }
  }

  return(
    <div className="item-card">
      <div className="image-box">
        <img className="item-image" src={itemImg} alt={itemName}></img>
      </div>
      <span id="card-price">{itemPrice}</span>
      <h3 name="name">{itemName}</h3>
      <p>{itemDescription}</p>
      <button onClick={handleEditClick} value={buttonValue}>{buttonText}</button>
      {showEditForm ? <EditItemForm item={item} handleSubmitEdit={handleEditClick} selectUser={selectUser}/> : null}
    </div>
  )
}

export default ItemCard;