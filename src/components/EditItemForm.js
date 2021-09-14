import react from "react"

function EditItemForm({ item }){

  const { itemName, itemImg, itemCreator, itemDescription, itemPrice } = item;

  return(
    <div className="edit-form">
      <h1>Edit</h1>
      <form>
        <input type="text" name="name">Name: </input>
        <input type="text" name="image">Image URL: </input>
        <input type="text" name="description">Description: </input>
        <input type="text" name="price">Price: </input>
        <input type="submit">Submit</input>
      </form>
    </div>
  )
}

export default EditItemForm;