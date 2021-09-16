import React, { useState } from "react";

function EditItemForm({ item, handleSubmitEdit, selectUser, performDelete, handleHideForm }){

  const { itemName, itemImg, itemDescription, itemPrice } = item;

  const [ updatedInput, setUpdatedInput ] = useState({
    name: itemName,
    image: itemImg,
    itemCreator: selectUser.username,
    description: itemDescription,
    price: itemPrice
  })

  function handleInput(event) {
    setUpdatedInput({
      ...updatedInput,
      [event.target.name] : event.target.value
    });
  }

  function handleSubmit(event) {

    event.preventDefault();

    const updatedObj = {
      itemName: updatedInput.name,
      itemImg: updatedInput.image,
      itemCreator: selectUser.username,
      itemDescription: updatedInput.description,
      itemPrice: updatedInput.price,
      id: item.id
    };

    handleSubmitEdit(updatedObj);
    handleHideForm()
  }

  function handleDeleteClick() {
    performDelete(item.id);
  }

  return(
    <div className="edit-form-home">
    <div className="edit-form">
      <h2>{`Editing ${updatedInput.name}`}</h2>
      <form onSubmit= {handleSubmit}>
        <label>Name:<br/> <input type="text" name="name" value={updatedInput.name} onChange={handleInput}/></label>
        <br />
        <label>Image URL:<br/> <input type="text" name="image" value={updatedInput.image} onChange={handleInput}/></label>
        <br />
        <label>Description: <br/> <textarea name="description" value={updatedInput.description} onChange={handleInput}/></label>
        <br />
        <label>Price: <br/> <input type="text" name="price" value={updatedInput.price} onChange={handleInput}/></label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
    </div>
  )
}

export default EditItemForm;