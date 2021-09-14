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
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ displayedItems, setDisplayedItems ] = useState([]);
  // const [ userSellItems, setUserSellItems ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(resp => resp.json())
    .then(itemsData => {
      setItemsArray(itemsData);
      setDisplayedItems(itemsData);
    })
  }, [])

  function handleSearchSubmit(term) {
    let renderedItems = itemsArray.filter(item => item.itemName.toLowerCase().includes(term.toLowerCase()));
    setDisplayedItems(renderedItems);
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
    // let sellItemsList = displayedItems.filter(item => item.itemCreator === user);
    // setUserSellItems(sellItemsList);
    // console.log(userSellItems);
  }

  
  return (
    <div>
      <Header selectUser={selectUser}/>
      <Switch>
        <Route path="/shop">
          <ShopPage displayedItems={displayedItems} handleSearchSubmit={handleSearchSubmit}/>
        </Route>
        <Route path="/sell">
          <SellPage displayedItems={displayedItems} handleSearchSubmit={handleSearchSubmit} selectUser={selectUser}/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <LoginPage usernames={usernames} handleUser={handleUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;