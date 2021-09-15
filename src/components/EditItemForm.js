import react, { useState } from "react";

function EditItemForm({ item, handleSubmitEdit, selectUser }){

  const { itemName, itemImg, itemCreator, itemDescription, itemPrice } = item;
  const [ updatedInput, setUpdatedInput ] = useState({
    name: itemName,
    image: itemImg,
    itemCreator: selectUser,
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
      itemCreator: selectUser,
      itemDescription: updatedInput.description,
      itemPrice: updatedInput.price,
      id: item.id
    };

    handleSubmitEdit(updatedObj);
  }

  return(
    <div className="edit-form">
      <h1>Edit</h1>
      <form onSubmit= {handleSubmit}>
        <label>Name: <input type="text" name="name" value={updatedInput.name} onChange={handleInput}/></label>
        <label>Image URL: <input type="text" name="image" value={updatedInput.image} onChange={handleInput}/></label>
        <label>Description: <input type="text" name="description" value={updatedInput.description} onChange={handleInput}/></label>
        <label>Price: <input type="text" name="price" value={updatedInput.price} onChange={handleInput}/></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default EditItemForm;