import react from "react"
import CartItemList from "./CartItemsList";
import { Link } from "react-router-dom";

function Cart({ selectUser }){
  return(
    <div>
      <h1>Cart
        <Link to="/sell"><button>Sell</button></Link>
        <Link to="/shop"><button>Shop</button></Link>
      </h1>
       <CartItemList selectUser={selectUser} />
    </div>

  )
}

export default Cart;