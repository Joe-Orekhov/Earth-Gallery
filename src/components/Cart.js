import react from "react"
import CartItemList from "./CartItemsList";
import { Link } from "react-router-dom";

function Cart({ selectUser }){
  return(
    <div>
      <h1>Cart
      </h1>
       <CartItemList selectUser={selectUser} />
    </div>

  )
}

export default Cart;