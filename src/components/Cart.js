import react from "react"
import CartItemList from "./CartItemsList";
import { Link } from "react-router-dom";

function Cart({ cartArr }){
  return(
    <div>
      <h1>Cart
        <Link to="/sell"><button>Sell</button></Link>
        <Link to="/shop"><button>Shop</button></Link>
      </h1>
       <CartItemList cartArr={cartArr} />
    </div>

  )
}

export default Cart;