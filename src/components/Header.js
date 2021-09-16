import { Link } from "react-router-dom";

  function Header({ selectUser }){
  
    function HeaderDisplayed(){
      if(typeof(selectUser.username) == 'string'){
        return(
          <div id="header">
              <h1>
                {`Welcome to ${selectUser.username}'s Art Gallery`}
            </h1>
          </div>
        )
      }else if(selectUser.username == undefined){
        return(
          <div id="header">
            <h1>{`Welcome to Earths Gallery`}</h1>
            <div class="tab-home"> 
              <Link to="/sell"><button class="tab">Sell</button></Link>
              <Link to="/shop"><button class="tab">Shop</button></Link>
              <Link to="/cart"><button class="tab">Cart</button></Link>
              <Link to="/login"><button class="tab">Login</button></Link>
            </div>
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