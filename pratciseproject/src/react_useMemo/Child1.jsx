import React from 'react'

const Child1 =React.memo( ({name}) => {
    console.log("child component re rendered")
  return (
    <div>
      <h2>Child Component</h2>
      <p>My name is {name}</p>
    </div>
  )
})

export default Child1