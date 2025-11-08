import React from 'react'
import { useAuth } from '../Context/AuthContext'
const Loginform = () => {
  const { username, password, setUsername, setPassword } = useAuth();
  const handleLogin = (event) =>{
    event.preventDefault()  
    console.log("login success")
   

console.log(username, password)
  }
  return (
   <form>
    <div>
   <label>Username:</label> <input type = "text" value={username} placeholder = "Enter your username" onChange={(e) => setUsername(e.target.value)} />
   <div>
    <label>Password:</label> <input type = "password" value={password} placeholder = "Enter your password" onChange={(e) => setPassword(e.target.value)} />
   </div>
   <button type = "submit" onClick={handleLogin}>Login</button>
    </div>
   </form>
  )
}

export default Loginform