import React from 'react'

function List1() {
    let car=["bmw","audi","benz"]
    car.splice(2,0,"xuv700")
    let name=["rohan","pratheek","kousthubha"]
    let forname=name.map((ele,index)=>{
               return<li>{ele}</li>
    }

    )
  return (
    <>
    <h3>ordered list</h3>
      <ol>
        {car.map((ele,index)=>{
             return<li>{ele}</li>
        })}
      </ol>
<h3>unorderd list</h3>
<ul>
   {forname}
</ul>
    </>
  )
}

export default List1
