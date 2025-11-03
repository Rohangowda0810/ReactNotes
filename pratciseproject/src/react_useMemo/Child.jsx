import React from 'react'

function Child({name}) {
    console.log("child Component Re renderded")
  return (
    <div>
     <h2>Child Component</h2>
<p>My name is {name}</p>
    </div>
  )
}

export default Child