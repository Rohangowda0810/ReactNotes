import React from 'react'
import Component3 from './Component3'

function Component2({name,age}) {
  return (
   <div style={{
        textAlign:"center",width:"400px",
        boxShadow:"0px 0px 10px black",padding:"10px",
        margin:"0px auto"
    }}>
      <h1>Component 2</h1>
      <Component3 name={name} age={age}/>
    </div>
  )
}

export default Component2