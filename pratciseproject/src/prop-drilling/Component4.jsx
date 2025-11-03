import React from 'react'

function Component4({name,age}) {
  return (
  <div style={{
        textAlign:"center",width:"200px",
        boxShadow:"0px 0px 10px black",padding:"10px",
        margin:"0px auto"
    }}>
      <h1>Component 4</h1>
      <h3>My name is {name}</h3>
      <h5>I am {age} years old</h5>
    </div>
  )
}

export default Component4