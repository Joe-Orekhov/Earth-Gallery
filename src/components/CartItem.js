import react from "react"
import ItemCard from "./ItemCard";

function CartItem({ cartItem }){
  console.log(cartItem)
  return(
    <div className="item-card">
      <div className="image-box">
        <img className="item-image" src={cartItem.itemImg} alt={cartItem.name}></img>
      </div>
      <span id="card-price">{cartItem.itemPrice}</span>
      <h3 name="name">{cartItem.itemName}</h3>
      <p>{cartItem.itemDescription}</p>
    </div>
  )
}



export default CartItem;