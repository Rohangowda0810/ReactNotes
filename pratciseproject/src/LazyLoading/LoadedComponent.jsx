import React, { useEffect, useState } from 'react'

function LoadedComponent() {
    const[data,setData]=useState([])
    useEffect(()=>{
        const item=[]
        for(let i=0;i<10000;i++){
            item.push(i+"Welcome to react js class")
        }
        setData(item)
    },[])
  return (
    <div>
      <h1>Loaded Component</h1>
<ol>
    {data.map((ele,index)=>{
        return<li key={index}>{ele}</li>
    })}
</ol>
    </div>
  )
}

export default LoadedComponent