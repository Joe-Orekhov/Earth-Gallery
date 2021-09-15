import react, { useState } from "react";

function EditItemForm({ item, handleSubmitEdit, selectUser }){

  const { itemName, itemImg, itemCreator, itemDescription, itemPrice } = item;
  const [ updatedInput, setUpdatedInput ] = useState({
    itemName,
    itemImg,
    itemCreator: selectUser,
    itemDescription,
    itemPrice
  })

  function handleInput(event) {
    setUpdatedInput({
      ...updatedInput,
      [event.target.name] : event.target.value
    });
    console.log(updatedInput);
  }

  function handleSubmit() {
    handleSubmitEdit(updatedInput)
  }

  return(
    <div className="edit-form">
      <h1>Edit</h1>
      <form>
        <label>Name: <input type="text" name="name" value={itemName} onChange={handleInput}/></label>
        <label>Image URL: <input type="text" name="image" value={itemImg}/></label>
        <label>Description: <input type="text" name="description" value={itemDescription}/></label>
        <label>Price: <input type="text" name="price" value={itemPrice}/></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default EditItemForm;