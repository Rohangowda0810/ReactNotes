import React from 'react'

function Example2() {
    let StudentData=[
        {
            id:1,
            name:"Raj",
            city:"Bangalore",
            skill:"React Js"
        },{
             id:2,
            name:"Sachin",
            city:"Mysore",
            skill:"Angular Js"
        },{
             id:3,
            name:"Riya",
            city:"Mangalore",
            skill:"Vue Js"
        },
        {
              id:4,
            name:"vijay",
            city:"kolar",
            skill:"Type script"
        }
    ]
  return (
    <div>
      <h1>Example for defination list to print array of object</h1>
      <dl>
        {StudentData.map((ele,index)=>{
         return(
            <>
            <dt key={index}>Student {ele.id}</dt>
            <dd>I am {ele.name},I am from {ele.city},I know {ele.skill} skill</dd>
            </>
         )
        })}
      </dl>
    </div>
  )
}

export default Example2