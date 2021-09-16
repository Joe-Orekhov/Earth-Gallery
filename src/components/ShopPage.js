import react, { useEffect, useState } from "react"
import ItemsContainer from "./ItemsContainer";
import Search from "./Search";
import { Link } from "react-router-dom";

function ShopPage({ displayedItems, handleSearchSubmit, handleCartItems }){

  const buttonText = "Add To Cart"

  return(
    <div>
      <h1>Shop
      </h1>
      <Search handleSearchSubmit={handleSearchSubmit} />
      <ItemsContainer displayedItems={displayedItems} buttonText={buttonText} handleClick={handleCartItems}/>
    </div>
  )
}

export default ShopPage;