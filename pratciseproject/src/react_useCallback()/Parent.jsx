import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const[count,setCount]=useState(0)
    let Wish=useCallback(()=>{
        alert("good morning")
    },[])
  return (
    <div>
       <h1>Example with using useCallback hook</h1>
       <h2>Parent Component</h2>
       <h4>The Count is: {count}</h4>
       <button onClick={()=>setCount(count+1)}>Count</button>
       <Child name="Raj" click={Wish}/>
    </div>
  )
}

export default Parent