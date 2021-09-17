import React from "react";
import { Link, useLocation } from "react-router-dom";
function Header({ selectUser }){
  const location = useLocation().pathname;
  if (location === "/") {
    return (
      <div id="header">
        <h1>
          {`Welcome to Earth's Gallery`}
        </h1>
      </div>
    )
  } else if (selectUser.username !== undefined) {
    console.log(selectUser);
    return (
      <div id="header">
           <h1>
             {`Welcome to ${selectUser.username}'s Art Gallery`}
         </h1>
         <div className="tab-home">
           <Link to="/sell"><button className="tab" id={location === "/sell" ? "current-tab" : null}>Sell</button></Link>
           <Link to="/shop"><button className="tab" id={location === "/shop" ? "current-tab" : null}>Shop</button></Link>
           <Link to="/cart"><button className="tab" id={location === "/cart" ? "current-tab" : null}>Cart</button></Link>
         </div>
         <Link to="/"><button className="login-tab-else">Logout</button></Link>
       </div>
    )
  } else {
    return(
      <div id="header">
        <h1>{`Welcome to Earth's Gallery`}</h1>
        <Link to="/"><button className="login-tab">Login</button></Link>
      </div>
    )
  }
}
export default Header;
// import React from "react";
// import { Link } from "react-router-dom";

//   function Header({ selectUser }){
  
//     function HeaderDisplayed(){
//       if(typeof(selectUser.username) == 'string'){
//         return(
//           <div id="header">
//               <h1>
//                 {`Welcome to ${selectUser.username}'s Art Gallery`}
//             </h1>
//             <div className="tab-home"> 
//               <Link to="/sell"><button className="tab" id={location === "/sell" ? "current-tab" : null}>Sell</button></Link>
//               <Link to="/shop"><button className="tab">Shop</button></Link>
//               <Link to="/cart"><button className="tab">Cart</button></Link>
//             </div>
//             <Link to="/login"><button className="login-tab-else">Logout</button></Link>
//           </div>
//         )
//       }else if(selectUser.username === undefined){
//         return(
//           <div id="header">
//             <h1>{`Welcome to Earths Gallery`}</h1>
//             <Link to="/login"><button className="login-tab">Login</button></Link>
//           </div>
//         )
//       }else{
//         return(
//           <div id="header">
//             <h1>{`Earths gallery is experiencing some dificulties`}</h1>
//           </div>
//         )
//       }


//     }
//     return(
//       <HeaderDisplayed />
//   )
// }

// export default Header;