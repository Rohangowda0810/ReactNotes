import React, { useState } from 'react'

function Example1() {
    const[State,setState]=useState(100)
    const[name,setName]=useState("rohan")
  return (
    <div>
      <h1>Example for useState hook to add the data</h1>
      <h3>{State}</h3>
      <p>my name is{name}</p>
    </div>
  )
}

export default Example1
