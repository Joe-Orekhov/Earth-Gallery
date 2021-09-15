import react, { useState } from "react"

function NewItemForm({ selectUser, performAdd }){

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
    console.log(newInput);
    performAdd(newInput);
  }

  return(
    <div className="item-form">
      <h1>New</h1>
      <form onSubmit={handleNewSubmit} >
        <label>Name: <input type="text" name="itemName" onChange={handleUserInput} /></label>
        <label>Image URL: <input type="text" name="itemImg" onChange={handleUserInput} /></label>
        <label>Description: <input type="text" name="itemDescription" onChange={handleUserInput} /></label>
        <label>Price: <input type="text" name="itemPrice" onChange={handleUserInput} /></label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewItemForm;