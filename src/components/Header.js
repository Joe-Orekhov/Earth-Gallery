
import React from "react";
import { Link } from "react-router-dom";

  function Header({ selectUser }){
  
    function HeaderDisplayed(){
      if(typeof(selectUser.username) == 'string'){
        return(
          <div id="header">
              <h1>
                {`Welcome to ${selectUser.username}'s Art Gallery`}
            </h1>
            <div className="tab-home"> 
              <Link to="/sell"><button className="tab">Sell</button></Link>
              <Link to="/shop"><button className="tab">Shop</button></Link>
              <Link to="/cart"><button className="tab">Cart</button></Link>
              <Link to="/login"><button className="tab">Login</button></Link>
            </div>
          </div>
        )
      }else if(selectUser.username === undefined){
        return(
          <div id="header">
            <h1>{`Welcome to Earths Gallery`}</h1>
            <Link to="/login"><button className="tab">Login</button></Link>
          </div>
        )
      }else{
        return(
          <div id="header">

            <h1>{`Earths gallery is experiencing some dificulties`}</h1>
          </div>
        )
      }


    }
    return(
      <HeaderDisplayed />
  )
}

export default Header;