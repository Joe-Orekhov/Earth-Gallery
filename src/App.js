import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import LoginPage from "./components/LoginPage"
import ShopPage from "./components/ShopPage"
import SellPage from "./components/SellPage"
import Cart from "./components/Cart"
import { useEffect, useState } from 'react';
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

  return (
    <div>
      <Header />
      <LoginPage />
      <ShopPage displayedItems={displayedItems} handleSearchSubmit={handleSearchSubmit}/>
      <SellPage displayedItems={displayedItems} handleSearchSubmit={handleSearchSubmit}/>
      <Cart />
    </div>
  );
}

export default App;
