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

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then(resp => resp.json())
    .then(itemsData => {
      setItemsArray(itemsData);
      setDisplayedItems(itemsData);
    })
  }, [patchedEdit])

  function handleSearchSubmit(term) {
    let renderedItems = itemsArray.filter(item => item.itemName.toLowerCase().includes(term.toLowerCase()));
    setDisplayedItems(renderedItems);
  }

  function handleSubmitEdit(editedItem) {
    fetch(`http://localhost:3000/items${editedItem.id}`, {
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

  // USER NAME DATA

  const [ userArr, setUserArr ] = useState([])
  const [ selectUser, setSelectUser ] = useState({})

  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(resp=> resp.json())
    .then(data => {setUserArr(data)})
  }, [])

  function handleUser(user){
    setSelectUser(user[0])
  }

  // CART ITEMS LOGIC
  const [ cartArr, setCartArr ] = useState([])

  // function handleCartItems(item){
  //   return (
  //     setCartArr([...cartArr, item])
  //   )
  // }

  function handleCartItems(item){
    console.log(selectUser.id)
    return(
      fetch(`http://localhost:3000/users/${selectUser.id}`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body : JSON.stringify(item)
      })
      .then(resp => resp.json())
      .then(newCartItem => setCartArr([...cartArr, newCartItem ]))
    )
  }
  
  return (
    <div>
        <Header selectUser={selectUser} />
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
          />
        </Route>
        <Route path="/cart">
          <Cart cartArr={cartArr} />
        </Route>
        <Route path="/">
          <LoginPage userArr={userArr} handleUser={handleUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;