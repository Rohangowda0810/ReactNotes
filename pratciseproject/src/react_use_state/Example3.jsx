import React, { useState } from 'react'

function Example3() {
    const[count,setCount]=useState(0)
  return (
    <div>
      <h1>Example for counter value</h1>
      <h4>you clicked{count} times</h4>
      <button onClick={()=>setCount(count+1)}>count</button>
    </div>
  )
}

export default Example3
