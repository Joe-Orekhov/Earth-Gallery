import react, { useState } from "react";
import EditItemForm from "./EditItemForm";
import { useLocation } from "react-router-dom";


function ItemCard({ item, selectUser, buttonText, buttonValue, handleClick, performDelete }){

  const location = useLocation();
  const { itemName, itemImg, itemCreator, itemDescription, itemPrice } = item;
  const [ showEditForm, setEditForm ] = useState(false);

  function handleEditClick(event) {
    if (location.pathname === "/sell") {
      console.log("This is an edit button")
      setEditForm(!showEditForm);
    } else if (location.pathname === "/shop") {
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
      {showEditForm ? <EditItemForm item={item} handleSubmitEdit={handleClick} selectUser={selectUser} performDelete={performDelete}/> : null}
    </div>
  )
}

export default ItemCard;