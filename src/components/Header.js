import react from "react"

  function Header({ selectUser }){
  console.log(selectUser.toString())
  return(
    <div id="header">
        <h1>{`Welcome to ${selectUser.toString()}'s Art Gallery`}</h1>
    </div>

  )
}

export default Header;