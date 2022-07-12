import React, { useState } from "react"
import { useEffect } from "react"
import './Login.css'
import man from './man.png'

function Login() {

    const [email , setEmail] = useState()
    const [password , setPassword] = useState()

    useEffect (()=>{
        let mail = localStorage.getItem("email")
        let pass = localStorage.getItem("password")
        if(mail && pass)
        {
            window.location = '/Dashboard'
        }
    },[])

    function login()
    {
        if(email==="amitdorle@gmail.com" && password==="pass123")
        {
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            window.location = '/Dashboard'
        }
        else
        {
            alert('Login Failed')
        }

    }

  return (
<div className="login-container">
        
   <div className="form-container">
   <h2 className="login-head"><b className="bold">USER</b> Login</h2>
   <div className="login-person-container">
   <img src={man} alt='logo' className="login-person"/>
   </div><br />
        <form>
        
            <input type='text' className="login-input" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/><br /><br />

            <input type='password' className="login-input" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/><br /><br />
            <input type='checkbox' />remember me<br /><br />
        </form>
        <div className="login-button-container">
            <button  onClick={login} type='button' className="login-button">sign me in</button>
        </div>
    </div>
</div>
  )
}

export default Login