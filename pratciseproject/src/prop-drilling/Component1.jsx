import React, { useState } from 'react'
import Component2 from './Component2'

function Component1() {
    let[name,setName]=useState('Raj')
    let[age,setAge]=useState(30)
    let handleChange=()=>{
      setName('Virat')
      setAge(40)
    }
  return (
    <div style={{
        textAlign:"center",width:"500px",
        boxShadow:"0px 0px 10px black",padding:"10px",
        margin:"50px auto"
    }}>
      <h1>Component 1</h1>
      <h3>My name is {name}</h3>
      <h5>I am {age} years old</h5>
      <button onClick={handleChange}>Change</button>
      <Component2 name={name} age={age}/>
    </div>
  )
}

export default Component1