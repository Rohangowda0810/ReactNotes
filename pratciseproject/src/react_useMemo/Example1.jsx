import React, { useState } from 'react'

function Example1() {
    const[count,setCount]=useState(0)
    const[number,setNumber]=useState(0)
    // console.log(number)
    function CubeNumber(num){
        console.log("Calculation Done!!")
        return Math.pow(num,3)
    }
    let result=CubeNumber(number)
  return (
    <div style={{margin:"50px auto",textAlign:"center"}}>
      <h1>Example without using usememo Hook</h1>
      <input type='number' value={number} 
      onChange={(e)=>setNumber(e.target.value)}/>
      <h2>The cube of number: {result}</h2>
      <button  onClick={()=>setCount(count+1)}>Counter++</button>
      <h2>The counter value is: {count}</h2>
    </div>
  )
}

export default Example1