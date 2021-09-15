import react from "react"
import CartItemList from "./CartItemsList";

function Cart({ cartArr }){
  console.log(cartArr)
  return(
    <div>
      <h1>Cart</h1>
       <CartItemList cartArr={cartArr} />
    </div>

  )
}

export default Cart;