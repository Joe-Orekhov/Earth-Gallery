import react from "react"
import ItemCard from "./ItemCard"

// If I don't include a default prop here, my map doesn't work. Why do I have an undefined itemsArray if I set my default state to [] in App?
function ItemsContainer({ displayedItems = [] } ){

  const buttonText = "Add To Cart"

  return(
    <div className="cards-container">
      {displayedItems.map(item => { return <ItemCard key={item.id} item={item} buttonText={buttonText}/>})}
    </div>
  )
}

export default ItemsContainer;