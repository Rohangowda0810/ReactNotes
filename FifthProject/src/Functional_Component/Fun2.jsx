import React from 'react'

function Fun2() {
  return (
   <div style={{height:"400px",width:"50%",padding:"10px",margin:"10px",backgroundColor:"pink",boxShadow:"0px 0px 10px black"}}>
      <h1>Fun Component 2</h1>
      <div style={{display:'flex'}}>
        <Sub1/>
        <Sub2/>
      </div>
    </div>
  )
}

export default Fun2


function Sub1(){
  return(
    <div style={{height:"200px",width:"50%",padding:"10px",margin:"5px",backgroundColor:"lightblue",boxShadow:"0px 0px 10px black"}}>
     <p>sub1</p>
    </div>
  )
}
  function Sub2(){
  return(
    <div style={{height:"200px",width:"50%",padding:"10px",margin:"5px",backgroundColor:"lightblue",boxShadow:"0px 0px 10px black"}}>
     <p>Sub2</p>
    </div>
  )
}