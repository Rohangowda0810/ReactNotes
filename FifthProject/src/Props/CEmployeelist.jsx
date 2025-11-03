import React from 'react'

function CEmployeelist(props) {
    let{name="stranger",age="unknown",id="unknown",designation="unavilable",condition=false}=props
  return (
    <div>
      <h3>The Employee name is {name}</h3>
      <p>THe Employee age is {age} and id is {id}</p>
      <p>The Employee designation is {designation}</p>
      <h1>{condition?<span>online</span>:<span>offline</span>}</h1>
    </div>
  )
}

export default CEmployeelist
