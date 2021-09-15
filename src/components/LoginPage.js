import react, { useState } from "react"
import { Link } from "react-router-dom"

function LoginPage({ userArr, handleUser }){

  const [ input, setInput ] = useState([])
  
  function handleSend(){
    handleUser(input)
  }

  function handleChange(e){
    const selectedUser = userArr.filter((users)=> users.id === parseInt(e.target.value))
    return(
      setInput(selectedUser)
    )  
  }

  return(
    
    <div id="loginFormBox">
      <h3 id="loginPrompt">WELCOME, PLEASE LOGIN...</h3>
      <form id="loginForm" onChange={handleChange}>
        <select >
          <option>Select User</option>
          {userArr.map(user => {
            return(
            <option value={user.id} key={user.id} >{user.username}</option>
            )}
          )}
        </select>
      </form>
      <Link to="/shop">
        <button id="loginBttn" onClick={handleSend} >Login</button>
      </Link>
    </div>
  )
}

export default LoginPage;