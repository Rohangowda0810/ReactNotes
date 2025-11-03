import React from 'react'
import Child from './Child'


function Parent() {
    let person={
        names:"Rohan",
        age:22,
        city:"Mandya"
    }
       
    
  return (
    <div>
      <h1 style={{height:"400px",width:"300",boxShadow:"0px 0px 10px black",color:"blue" }}>Parent Component</h1>
      <Child name="Virat" age={36} city="mumbai"/>
      <Child name="Rohan" age={22} city="Mandya"/>
      <Child name={person.names} age={person.age} city={person.city}/>
      
    </div>
  )
}

export default Parent
