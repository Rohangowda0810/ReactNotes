import React from 'react'

function Fun3() {
  return (
    <div style={{height:"400px",width:"50%",padding:"10px",margin:"10px",backgroundColor:"lightgreen",boxShadow:"0px 0px 10px black"}}>
      <h1>Fun Component 3</h1>
      <Sub1/>
      <div style={{display:'flex'}}>
      <Sub2/>
      <Sub3/>
      </div>
    </div>
  )
}

export default Fun3

function Sub1(){
  return(
    <div style={{height:"75px",width:"95%",padding:"10px",margin:"5px",backgroundColor:"orange",boxShadow:"0px 0px 10px black"}}>
     <p>Sub2</p>
    </div>)
}
    function Sub2(){
  return(
    <div style={{height:"150px",width:"50%",padding:"10px",margin:"5px",backgroundColor:"orange",boxShadow:"0px 0px 10px black"}}>
     <p>Sub2</p>
    </div>
  )
}

function Sub3(){
  return(
    <div style={{height:"150px",width:"50%",padding:"10px",margin:"5px",backgroundColor:"orange",boxShadow:"0px 0px 10px black"}}>
     <p>Sub3</p>
    </div>
  )
}