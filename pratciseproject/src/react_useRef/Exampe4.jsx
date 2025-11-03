import React, { useEffect, useRef } from 'react'

function Example4() {
    let inputref=useRef()
    let inputref1=useRef()
    useEffect(()=>{
        inputref.current.focus()
        inputref1.current.style.border="2px solid red"
    },[])
  return (
    <div style={{textAlign:"center"}}>
      <h1>Example of useref hook for focusing input</h1>
    <div style={{width:"300px",padding:"20px",boxShadow:"0px 0px 10px black",
        margin:"20px auto",textAlign:"center"
    }}>
        <label>Username</label>
        <input  ref={inputref}
        type='text' name='username' placeholder='Enter  username'/>
        <br></br><br></br>
        <label>Password</label>
        <input  ref={inputref1}
        type='password' name='password' placeholder='enter password'/>
        <br></br><br></br>
        <button>Login</button>
    </div>
    </div>
  )
}

export default Example4