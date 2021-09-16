import React from "react";

  function Header({ selectUser }){
  
    function HeaderDisplayed(){
      if(typeof(selectUser.username) == 'string'){
        return(
          <div id="header">
            <h1>{`Welcome to ${selectUser.username}'s Art Gallery`}</h1>
          </div>
        )
      }else if(selectUser.username === undefined){
        return(
          <div id="header">
            <h1>{`Welcome to Earths Gallery`}</h1>
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