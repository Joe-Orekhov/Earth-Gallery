import react from "react"
import CartItem from "./CartItem";

function CartItemList({ cartArr }){
  return(
    <div>
      {cartArr.map(cartItem => <CartItem cartItem={cartItem}/> )}
    </div>
  )
}

export default CartItemList;