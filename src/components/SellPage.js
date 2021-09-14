import react from "react"
import NewItemForm from "./NewItemForm";
import ItemsContainer from "./ItemsContainer";


function SellPage({ displayedItems, handleSearchSubmit }){
  return(
    <div>
      <h1>SellPage</h1>
      <NewItemForm />
      <ItemsContainer displayedItems={displayedItems}/>
    </div>
  )
}

export default SellPage;