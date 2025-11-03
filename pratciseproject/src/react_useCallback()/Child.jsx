import React from 'react'

const Child =React.memo( ({name,click}) => {
    console.log("child component re rendered")
  return (
    <div>
      <h2>Child Component</h2>
      <p>My name is {name}</p>
      <button onClick={click}>Click</button>
    </div>
  )
})

export default Child