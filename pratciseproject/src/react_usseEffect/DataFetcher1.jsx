// 
import { useState,useEffect } from "react"
import React from 'react'

function DataFetcher1() {
    const[data,setData]=useState(null)
    const[error,setError]=useState(false)
console.log(data)
    useEffect(()=>{
        async function fetchData() {
         try{
         let response= await  fetch('https://fakestoreapi.com/products')
           let result= await  response.json() 
        //    console.log(result)
        setData(result)
        }
         catch(error){
            console.log("Error while fetching ",error)
            setError(true)
         }   
        }
        fetchData()
    },[])
  return (
    <div>
      <h1>Example for api fetching in the list format</h1>
   {error&&<p>Error while fetching the data try again</p>}
   {!error && data && (
  <table border={1}>
<tr>
    <th>ID</th>
    <th>Title</th>
    <th>Price</th>
    <th>Description</th>
    <th>Category</th>
    <th>Images</th>
    <th>Rating</th>
    <th>Count</th>
</tr>
{data.map((ele,index)=>{
    return(
        <>
        <tr key={index}>
<td>{ele.id}</td>
<td>{ele.title}</td>
<td>{ele.price}</td>
<td>{ele.description}</td>
<td>{ele.category}</td>
<td><img src={ele.image} height={200} width={200}/></td>
<td>{ele.rating.rate}</td>
<td>{ele.rating.count}</td>
        </tr>
        </>
    )
})}
  </table>
   )}
    </div>
  )
}

export default DataFetcher1 