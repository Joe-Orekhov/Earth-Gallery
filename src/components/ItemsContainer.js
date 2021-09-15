import react from "react"
import ItemCard from "./ItemCard"
import NewItemCard from "./NewItemCard"
import { useLocation } from "react-router-dom";

// If I don't include a default prop here, my map doesn't work. Why do I have an undefined itemsArray if I set my default state to [] in App?

function ItemsContainer({ displayedItems = [], buttonText, handleClick, selectUser, performDelete } ){


  // the below will help us get the pathname so we can conditionally render according to our route
  const location = useLocation();

  return(
    <div className="cards-container">

      {location.pathname === "/sell" ? <NewItemCard buttonText={"Add New"}/> : null}
      {displayedItems.map(item => { return <ItemCard key={item.id} item={item} selectUser={selectUser} buttonText={buttonText} buttonValue={location.pathname === "/sell" ? "edit" : "addToCart"} handleClick={handleClick} performDelete={performDelete}/>} )}
    </div>
  )
}

export default ItemsContainer;