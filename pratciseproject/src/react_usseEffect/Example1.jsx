import React, { useEffect, useState } from 'react'

function Example1() {
    let [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("the count value is "+count)
    },[count])
  return (
    <div>
      <h1>Example for useEffect Hook runs on every 
        render
      </h1>
      <h3>The Count value is :{count}</h3>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Example1