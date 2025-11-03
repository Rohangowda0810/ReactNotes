import React from 'react'
import useFetch from './useFetch'

function Product() {
  const data = useFetch('https://fakestoreapi.com/products')
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
 <img src={ele.image} alt="no-img" style={{height:"150px",width:"150px"}}/>               
<h3>Id:{ele.id}</h3>
<h5>Title:{ele.title}</h5>
<p>Price:{ele.price}</p>
<p>Rating:{ele.rating.rate}</p>
            </li>
           )
        })}
      </ul>):(<p>Data is loading!.....</p>)}
    </div>
  )
}

export default Product