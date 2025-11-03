import React,{useState,useEffect} from 'react'

function EffectApi() {
    const[data,setdata]=useState("null")
     useEffect(()=>{
       
        let fetchData=async()=>{
             try{
            let response=await fetch('https://fakestoreapi.com/products')
            let result=await response.json()
            setdata(result)
        }
        catch(error){
            console.log(error)
        }
    }
        fetchData(),[] })
  return (
    <div>
      <h2>My Cart</h2>
      <div>{data?(<pre>{JSON.stringify(data,null,5)}</pre>):(<p>loading...</p>
      ) }</div>
    </div>
  )
}

export default EffectApi
