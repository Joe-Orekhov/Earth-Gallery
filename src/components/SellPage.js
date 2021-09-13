import react from "react"
import NewItemForm from "./NewItemForm";
import ItemsContainer from "./ItemsContainer";

function SellPage(){
  return(
    <div>
      <h1>SellPage</h1>
      <NewItemForm />
      <ItemsContainer />
    </div>
  )
}

export default SellPage;