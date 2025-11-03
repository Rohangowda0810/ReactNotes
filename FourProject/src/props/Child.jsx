import React from 'react'

function Child({ clickHello, clickSubmit }) {
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={clickHello} style={{display: 'block', margin: '10px 0'}}>Click me</button>
      <button style={{display: 'block', margin: '10px 0'}}>Delete</button>
      <button onClick={clickSubmit} style={{display: 'block', margin: '10px 0'}}>Submit</button>
    </div>
  )
}

export default Child