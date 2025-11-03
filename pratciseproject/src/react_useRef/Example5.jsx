import React from 'react'
import { useRef } from 'react'
function Example5() {
    let countvalue=useRef(0)
    let handleClick=()=>{
    countvalue.current++
    console.log("You clicked "+countvalue.current)
    }
  return (
    <div>
      <h1>Example of useref hook to track the value changes in console</h1>
      <h2>The value is :{countvalue.current}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Example5