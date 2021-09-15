import './App.css';
import Header from "./components/Header"
import LoginPage from "./components/LoginPage"
import ShopPage from "./components/ShopPage"
import SellPage from "./components/SellPage"
import Cart from "./components/Cart"
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {

  const [ itemsArray, setItemsArray ] = useState([]);
  // const [ searchTerm, setSearchTerm ] = useState("");
  const [ displayedItems, setDisplayedItems ] = useState([]);
  const [ patchedEdit, setPatchedEdit ] = useState(false);
  const [ deletedItem, setDeletedItem ] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(resp => resp.json())
    .then(itemsData => {
      setItemsArray(itemsData);
      setDisplayedItems(itemsData);
    })
  }, [patchedEdit, deletedItem])

  function handleSearchSubmit(term) {
    let renderedItems = itemsArray.filter(item => item.itemName.toLowerCase().includes(term.toLowerCase()));
    setDisplayedItems(renderedItems);
  }

  function handleSubmitEdit(editedItem) {
    console.log(editedItem)
    fetch(`http://localhost:3000/items/${editedItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(editedItem)
    })
    .then(resp => resp.json())
    .then(data => setPatchedEdit(!patchedEdit))
  }

  function performDelete(deleteItemId) {
    // console.log(deleteItemId);
    fetch(`http://localhost:3000/items/${deleteItemId}`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      //   "Accept": "application/json"
      // },
      // body: JSON.stringify(deleteItemId)
    })
    .then(resp => resp.json())
    .then(data => setDeletedItem(!deletedItem))
  }

  const [ usernames, setUsernames ] = useState([])
  const [ selectUser, setSelectUser ] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(resp=> resp.json())
    .then(data => {
      setUsernames(data.map(x=> x.username))
    })
  }, [])

  function handleUser(user){
    setSelectUser(user);
  }

  const [ cartArr, setCartArray ] = useState([])

  function handleCartItems(items){
    return setCartArray([...cartArr, items])
  }
  
  return (
    <div>
      <Header selectUser={selectUser}/>
      <Switch>
        <Route path="/shop">
          <ShopPage 
            displayedItems={displayedItems} 
            handleSearchSubmit={handleSearchSubmit}
            handleCartItems={ handleCartItems }
          />
        </Route>
        <Route path="/sell">
          <SellPage 
            displayedItems={displayedItems} 
            handleSearchSubmit={handleSearchSubmit} 
            selectUser={selectUser} 
            handleSubmitEdit={handleSubmitEdit}
            performDelete={performDelete}
          />
        </Route>
        <Route path="/cart">
          <Cart cartArr={cartArr} />
        </Route>
        <Route path="/">
          <LoginPage usernames={usernames} handleUser={handleUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;