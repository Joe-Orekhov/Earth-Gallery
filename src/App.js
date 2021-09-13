import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js"
import LoginPage from "./components/LoginPage.js"
import ShopPage from "./components/ShopPage.js"
import SellPage from "./components/SellPage.js"
import Cart from "./components/Cart.js"

import react, { useEffect, useState } from "react"

function App() {

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
      <ShopPage />
      <SellPage />
      <Cart />

    </div>
  );
}

export default App;
