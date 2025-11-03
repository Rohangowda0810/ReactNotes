import React from 'react'

function Child(props) {
    
  
  return (
    <div>
      <h1>Child Component</h1>
      <p>my name is{props.name}</p>
      <p>am from{props.city}</p>
      <p>i am{props.age}</p>
    </div>
  )
}

export default Child
