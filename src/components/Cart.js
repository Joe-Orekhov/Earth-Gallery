import React from "react";
import CartItemsList from "./CartItemsList";
import { Link } from "react-router-dom";

function Cart({ selectUser, userCartItems }){
  return(
    <div>
      <h1>Cart
        <Link to="/sell"><button>Sell</button></Link>
        <Link to="/shop"><button>Shop</button></Link>
      </h1>
       <CartItemsList selectUser={selectUser} userCartItems={userCartItems} />
    </div>

  )
}

export default Cart;