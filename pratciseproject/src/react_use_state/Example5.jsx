import React, { useState } from 'react'

function Example5() {
    const[image,setImage]=useState("https://tse2.mm.bing.net/th/id/OIP.y8XTMV6baf5RxB9CQ9Bf_AHaFj?pid=Api&P=0&h=180")
    let reactimg=()=>setImage("https://tse2.mm.bing.net/th/id/OIP.y8XTMV6baf5RxB9CQ9Bf_AHaFj?pid=Api&P=0&h=180")
     let Angularimg=()=>setImage("https://tse3.mm.bing.net/th/id/OIP.Y547A1WkJDBXb4OYF_JSjgAAAA?pid=Api&P=0&h=180")
  return (
    <>
      <img src={image} alt="no" style={{height:"100px",width:"100px"}} />
      <button onClick={reactimg}>React</button>
      <button onClick={Angularimg}>Angular</button>
    </>
  )
}

export default Example5
