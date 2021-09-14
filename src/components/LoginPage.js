import react, { useState } from "react"
import { Link } from "react-router-dom"

function LoginPage({ usernames, handleUser }){
  const [ input, setInput ] = useState({})

  function handleChange(e){
    return(
      setInput(e.target.value)
    )  
  }

  return(
    
    <div id="loginFormBox">
      <h3 id="loginPrompt">WELCOME, PLEASE LOGIN...</h3>
      <form id="loginForm">
        <select onChange={handleChange}>
          {usernames.map(name => <option >{name}</option>)}
        </select>
      </form>
      <Link to="/shop">
        <button id="loginBttn" onClick={()=> handleUser(input)} >Login</button>
      </Link>
    </div>
  )
}

export default LoginPage;