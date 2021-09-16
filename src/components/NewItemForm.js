import React, { useState } from "react";

function NewItemForm({ selectUser, performAdd, handleNewFormClick }){

  const [ newInput, setNewInput ] = useState({
    itemName: "",
    itemImg: "",
    itemCreator: selectUser.username,
    itemDescription: "",
    itemPrice: 0
  })

  function handleUserInput(event) {
    setNewInput({
      ...newInput,
      [event.target.name]: event.target.value
    })
  }

  function handleNewSubmit(event) {
    event.preventDefault();
    performAdd(newInput);
    handleNewFormClick();
  }

  return(
    <div className="edit-form">
      <h1>New</h1>
      <form onSubmit={handleNewSubmit} >
        <label>Name: <input type="text" name="itemName" onChange={handleUserInput} /></label>
        <br />
        <label>Image URL: <input type="text" name="itemImg" onChange={handleUserInput} /></label>
        <br />
        <label>Description: <textarea name="itemDescription" onChange={handleUserInput} /></label>
        <br />
        <label>Price: <input type="text" name="itemPrice" onChange={handleUserInput} /></label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewItemForm;