import react from "react"
import ItemCard from "./ItemCard"
import NewItemCard from "./NewItemCard"

// If I don't include a default prop here, my map doesn't work. Why do I have an undefined itemsArray if I set my default state to [] in App?
function ItemsContainer({ displayedItems = [], buttonText } ){

  return(
    <div className="cards-container">
      {/* How can we make the below only render on the sell page? */}
      <NewItemCard buttonText={"Add New"}/>
      {displayedItems.map(item => { return <ItemCard key={item.id} item={item} buttonText={buttonText}/>})}
    </div>
  )
}

export default ItemsContainer;