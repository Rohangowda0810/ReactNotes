 import React, { useState } from 'react'
import axios from 'axios'
function Example1() {
    let [data,setData]=useState(null)
    console.log(data)
    let fetchData=async ()=>{
         try{
           let response= await axios.get('https://fakestoreapi.com/products')
        //  console.log(response.data)
        setData(response.data)
        }
         catch(err){
            console.log("error while fetching the data "+err)
         }
    }
  return (
    <div style={{
        margin:"100px auto",textAlign:"center"
    }}>
      <button style={{height:"50px",width:"120px",
        backgroundColor:"yellow",borderRadius:"10px"
      }} onClick={fetchData}
      >Get Data</button>
    </div>
  )
}

export default Example1