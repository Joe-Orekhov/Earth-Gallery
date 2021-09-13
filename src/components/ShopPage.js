import react, { useEffect, useState } from "react"
import ItemsContainer from "./ItemsContainer";
import Search from "./Search";

function ShopPage({ displayedItems, handleSearchSubmit }){

  return(
    <div className="shop-page">
      <h1>Shop</h1>
      <Search handleSearchSubmit={handleSearchSubmit} />
      <ItemsContainer displayedItems={displayedItems} />
    </div>
  )
}

export default ShopPage;