import React, { useEffect, useRef, useState } from 'react'

function Example2() {
    const[count,setCount]=useState(0)
    let prevCount=useRef()
    useEffect(()=>{
        prevCount.current=count
    },[count])
  return (
    <div>
      <h1>Storing the previous value to useref from usestate</h1>
    <h2>The current value of count is :{count}</h2>
    <h2>The previous value of count is:{prevCount.current}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Example2