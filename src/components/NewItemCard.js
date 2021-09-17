import React, { useState } from "react";
import NewItemForm from "./NewItemForm";

function NewItemCard({ selectUser, performAdd }){

  const [ showNewForm, setShowNewForm ] = useState(false);

  function handleNewFormClick() {
    setShowNewForm(!showNewForm)
  }

  return(
    <div className="item-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Golden_star.svg" alt="new-star"></img>
      <span></span>
      <h3>Sell New Item</h3>
      <p></p>
      <button onClick={handleNewFormClick}>Add New</button>
      {showNewForm ? <NewItemForm selectUser={selectUser} performAdd={performAdd} handleNewFormClick={handleNewFormClick}/> : null}
    </div>
  )
}

export default NewItemCard;