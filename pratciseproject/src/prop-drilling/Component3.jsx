import React from 'react'
import Component4 from './Component4'

function Component3({name,age}) {
  return (
   <div style={{
        textAlign:"center",width:"300px",
        boxShadow:"0px 0px 10px black",padding:"10px",
        margin:"0px auto"
    }}>
      <h1>Component 3</h1>
      <Component4 name={name} age={age}/>
    </div>
  )
}

export default Component3