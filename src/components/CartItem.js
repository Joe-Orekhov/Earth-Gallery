import react from "react"

function CartItem({ cartItem }){
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