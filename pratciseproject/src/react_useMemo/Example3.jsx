import React, { useMemo, useState } from 'react'

function Example3() {
    const[count,setCount]=useState(0)
    //expensive computation function
    const expensiveValue=()=>{
        console.log("Calculation expensive value")
        let result=0
        for(let i=0;i<count*1000000;i++){
            result+=i
        }
        return result
    }
    let res=useMemo(()=>expensiveValue,[count])
  return (
    <div style={{margin:"50px auto",textAlign:"center"}}>
      <h1>Example for useMemo Hook</h1>
      <h2>The count is: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>Expensive value:{res}</h1>
    </div>
  )
}

export default Example3