import React ,{useState}from 'react'

function Example2() {
    const[state,setState]=useState('Welcome to react js class')
    const[content,setContent]=useState('hello good morning')
    let change=()=>{
        setState('Thank you for visiting')
    }
  return (
    <div>
      <h1>Example for Changeing State</h1>
      <h2>{state}</h2>
      <h2>{content}</h2>
      <button onClick={change}>click here</button>
      <button onClick={()=>setContent("welcome to class")}>change</button>
    </div>
  )
}

export default Example2
