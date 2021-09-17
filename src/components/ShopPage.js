import React from "react";
import ItemsContainer from "./ItemsContainer";
import Search from "./Search";


function ShopPage({ displayedItems, handleSearchSubmit, performCartAdd }){

  const buttonText = "Add To Cart"

  return(
    <div>
      <h1>
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