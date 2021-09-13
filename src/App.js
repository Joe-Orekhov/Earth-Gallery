import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js"
import LoginPage from "./components/LoginPage.js"
import ShopPage from "./components/ShopPage.js"
import SellPage from "./components/SellPage.js"
import Cart from "./components/Cart.js"

function App() {
  return (
    <div>

      <Header />
      <LoginPage />
      <ShopPage />
      <SellPage />
      <Cart />

    </div>
  );
}

export default App;
