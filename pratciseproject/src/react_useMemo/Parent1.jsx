import React, { useState } from 'react'
import Child from './Child'

function Parent1() {
    const[count,setCount]=useState(0)
  return (
    <div>
       <h1>Example with using React.memo</h1>
       <h2>Parent Component</h2>
       <h4>The Count is: {count}</h4>
       <button onClick={()=>setCount(count+1)}>Count</button>
       <Child name="Raj"/>
        <Child name="virat"/>
    </div>
  )
}

export default Parent1