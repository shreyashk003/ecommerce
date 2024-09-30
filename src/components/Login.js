import React, { useRef } from 'react'

function Login() {
    
    const username=useRef('')
    const password=useRef('')

const SignIn=()=>{
    if(username.current.value==='shreyash' && password.current.value === 'abc')
        alert("Welcome shreyash")
    else
        alert('access denied')
}


  return (
    <div>Login
        <input ref={username} type='text' placeholder="Enter username" ></input>
        <input ref={password} type='password' placeholder="Enter password"></input>
        <button onClick={SignIn}>login</button>
    </div>
  )
}

export default Login