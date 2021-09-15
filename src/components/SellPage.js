import react from "react"
import ItemsContainer from "./ItemsContainer";
import { Link } from "react-router-dom";


function SellPage({ displayedItems, handleSearchSubmit, selectUser, handleSubmitEdit, performDelete }){

  const buttonText= "Edit";

  const userSellItems = displayedItems.filter(item => item.itemCreator === selectUser)

  console.log(userSellItems);

  return(
    <div>
      <h1>SellPage
        <Link to="/cart"><button>Cart</button></Link>
        <Link to="/shop"><button>Shop</button></Link>
      </h1>
      <ItemsContainer 
        displayedItems={userSellItems} 
        buttonText={buttonText}
        handleClick={handleSubmitEdit}
        selectUser={selectUser}
        performDelete={performDelete}
      />
    </div>
  )
}

export default SellPage;