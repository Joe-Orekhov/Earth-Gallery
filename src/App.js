import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import LoginPage from "./components/LoginPage"
import ShopPage from "./components/ShopPage"
import SellPage from "./components/SellPage"
import Cart from "./components/Cart"
import React, { useEffect, useState } from 'react';
import { getByDisplayValue } from '@testing-library/react';

function App() {

  const [ itemsArray, setItemsArray ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ displayedItems, setDisplayedItems ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(resp => resp.json())
    .then(itemsData => {
      // console.log(itemsData);
      setItemsArray(itemsData);
      setDisplayedItems(itemsData);
    })
  }, [])

  function handleSearchSubmit(term) {
    let renderedItems = itemsArray.filter(item => item.itemName.toLowerCase().includes(term.toLowerCase()));
    setDisplayedItems(renderedItems);
  }

  const [ usernames, setUsernames ] = useState([])
  const [ selectUser, setSelectUser ] = useState({})

  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(resp=> resp.json())
    .then(data => setUsernames(data.map(x=> x.username)))
  }, [])

  function handleUser(user){
    setSelectUser(user)
  }

  return (
    <div>
      <Header />
      <LoginPage usernames={usernames} handleUser={handleUser}/>
      <ShopPage displayedItems={displayedItems} handleSearchSubmit={handleSearchSubmit}/>
      <SellPage displayedItems={displayedItems} handleSearchSubmit={handleSearchSubmit}/>
      <Cart />
    </div>
  );
}

export default App;