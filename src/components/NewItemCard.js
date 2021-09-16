import React, { useState } from "react";
import NewItemForm from "./NewItemForm";

function NewItemCard({ selectUser, performAdd }){

  const [ showNewForm, setShowNewForm ] = useState(false);

  return(
    <div className="item-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Golden_star.svg" alt="new-star"></img>
      <span></span>
      <h3>Sell New Item</h3>
      <p></p>
      <button onClick={() => setShowNewForm(!showNewForm)}>Add New</button>
      {showNewForm ? <NewItemForm selectUser={selectUser} performAdd={performAdd}/> : null}
    </div>
  )
}

export default NewItemCard;