import react from "react"
import ItemsContainer from "./ItemsContainer";

function SellPage({ displayedItems, handleSearchSubmit }){

  const buttonText= "Edit";

  return(
    <div>
      <h1>SellPage</h1>
      <ItemsContainer displayedItems={displayedItems} buttonText={buttonText}/>
    </div>
  )
}

export default SellPage;