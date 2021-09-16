import React from "react";
import ItemsContainer from "./ItemsContainer";
import Search from "./Search";
import { Link } from "react-router-dom";

function ShopPage({ displayedItems, handleSearchSubmit, performCartAdd }){

  const buttonText = "Add To Cart"

  return(
    <div className="shop-page">
      <h1>Shop
        <Link to="/sell"><button>Sell</button></Link>
        <Link to="/cart"><button>Cart</button></Link>
      </h1>
      <Search handleSearchSubmit={handleSearchSubmit} />
      <ItemsContainer 
        displayedItems={displayedItems} 
        buttonText={buttonText} 
        handleClick={performCartAdd}
      />
    </div>
  )
}

export default ShopPage;