// import React, { useState } from 'react';

// function Exmple4() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h3>The count value is {count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// export default Exmple4;

import React,{useState}from 'react'

function Exmple4() {
    const[count,setCount]=useState(0)
    let increment=()=>{
        setCount((prev)=>prev+1)
    }
    let decreament=()=>{
        setCount((prev)=>prev-1)
    }
    let reset=()=>{
        setCount(0)
    }
  return (
    <div style={{margin:"100px auto",width:"250px",padding:"10px",boxShadow:"0px 0px 10px black",textAlign:"center"}}>
        <h1>Counter App</h1>
        <h5>The count value is{count}</h5>
         <button onClick={increment}>incre</button>
          <button onClick={decreament}>decre</button>
           <button onClick={reset}>reset</button>
    </div>
  )
}

export default Exmple4