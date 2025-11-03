// import React, { useEffect, useState } from 'react'

// function DataFetcher() {
// const[data,setData]=useState(null)
// console.log(data)
//     useEffect(()=>{
//         async function fetchData() {
//          try{
//          let response= await  fetch('https://fakestoreapi.com/products')
//            let result= await  response.json() 
//         //    console.log(result)
//         setData(result)
//         }
//          catch(error){
//             console.log("Error while fetching ",error)
//          }   
//         }
//         fetchData()
//     },[])
//   return (
//     <div>
//       <h1>Example for Api data Fetching</h1>
//       {data?(<div>
//         <h2>Data Fetched successfully</h2>
//         <pre>{JSON.stringify(data,null,10)}</pre>
//       </div>):(<p>Loading!.....</p>)}
//     </div>
//   )
// }

// export default DataFetcher

import React, { useEffect, useState } from 'react'

function DataFetcher() {
const[data,setData]=useState(null)
console.log(data)
    useEffect(()=>{
      let fetchdata=async ()=>{
     fetch('https://fakestoreapi.com/products')
     .then((res)=>res.json())
    .then((json)=>setData(json))
    .catch((err)=>console.log(err))
      }
      fetchdata()
    },[])
  return (
    <div>
      <h1>Example for Api data Fetching</h1>
      {data?(<div>
        <h2>Data Fetched successfully</h2>
        <pre>{JSON.stringify(data,null,10)}</pre>
      </div>):(<p>Loading!.....</p>)}
    </div>
  )
}

export default DataFetcher