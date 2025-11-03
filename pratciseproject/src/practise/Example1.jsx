import React, { useState } from 'react'

function Example1() {
    const [count,setState]=useState(0)
  return (
    <div style={{boxShadow:"0px 0px 10px black",height:"200px",width:"400px",margin:"100px auto",border:"1px solid black" ,backgroundColor:"red",color:"gold",textAlign:"center"}}>
    <h1>Counter app </h1>
    <h3>Count :{count}</h3>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <button onClick={()=>setState(count+1)} style={{backgroundColor:"green"}}>Increment</button>
        <button onClick={()=>setState(0)}style={{backgroundColor:"green"}}>Reset</button>
      <button onClick={()=>setState(count-1)}style={{backgroundColor:"green"}}>Decrement</button>
</div>
</div>
  )
}

export default Example1

