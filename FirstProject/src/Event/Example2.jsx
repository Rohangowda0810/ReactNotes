import React from 'react'

function Example2() {
    let handleclick=(name)=>{
        alert("welcome to "+name)
    }
  return (
    <div>
      <button onClick={()=>handleclick("React Developer")}>React</button>
      <button  onClick={()=>handleclick("Html Developer")}>HTML</button>

      <button  onClick={()=>handleclick("Js Developer")}>Java Script</button>
    </div>
  )
}

export default Example2
