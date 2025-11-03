import React from 'react'
import Child from './Child'

function Parent() {
    let eventhandler=()=>{
        alert("hi boss")
    }
    let onmouse=()=>{
        <img src="https://www.karnataka.com/wp-content/uploads/2013/11/mandya-city-entrance.jpg" alt="no-img" style={{height:"100px",width:"100px"}} />
      
    }
  return (
    <>
      <Child name="rohan" place="mandya" event={eventhandler} event1={onmouse}/>
    </>
  )
}

export default Parent
