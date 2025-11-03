import React from 'react'
import useFetch from './useFetch'

function User() {
   let  data=useFetch('https://jsonplaceholder.typicode.com/users')
  console.log(data)
   return (
    <div>
      <h1>Example for Custom hook to print
        users details
      </h1>
      {data?(<ul>
        {data.map((ele,index)=>{
           return(
            <li key={index}>
<h3>Id:{ele.id}</h3>
<h5>Name:{ele.name}</h5>
<p>Email:{ele.email}</p>
<p>Company:{ele.company.name}</p>
            </li>
           )
        })}
      </ul>):(<p>Data is loading!.....</p>)}
    </div>
  )
}

export default User