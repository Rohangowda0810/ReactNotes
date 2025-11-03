import React, { useRef } from 'react'

function Example1() {
    let countValue=useRef(0)
    // console.log(countValue.current)
    let handleClick=()=>{
       countValue.current++
          console.log(countValue.current)
    }
  return (
    <div>
      <h1>Example for useRef hook</h1>
      <h2>{countValue.current}</h2>
<button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default Example1