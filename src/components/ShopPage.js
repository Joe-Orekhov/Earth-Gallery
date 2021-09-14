import react, { useEffect, useState } from "react"
import ItemsContainer from "./ItemsContainer";
import Search from "./Search";

function ShopPage({ displayedItems, handleSearchSubmit }){

  const buttonText = "Add To Cart"

  return(
    <div className="shop-page">
      <h1>Shop</h1>
      <Search handleSearchSubmit={handleSearchSubmit} />
      <ItemsContainer displayedItems={displayedItems} buttonText={buttonText} />
    </div>
  )
}

export default ShopPage;