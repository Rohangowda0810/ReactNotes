import React from 'react'

function Example1() {
    let Employee_Details=[{
        sl:1,
        name:"Suhas",
        age:"23",
        place:"Shivamogga",
        eid:100,
        dept:"Dev"
  },{
        sl:2,
        name:"Anjali",
        age:"28",
        place:"Mumbai",
        eid:101,
        dept:"HR"
  },{
        sl:3,
        name:"Ravi",
        age:"32",
        place:"Banglore",
        eid:102,
        dept:"Marketing"
  },{
        sl:4,
        name:"Priya",
        age:"26",
        place:"Delhi",
        eid:103,
        dept:"Finance"
  },{
        sl:5,
        name:"Amit",
        age:"35",
        place:"Pune",
        eid:104,
        dept:"Operations"
  },{
        sl:6,
        name:"Neha",
        age:"30",
        place:"Hyderabad",
        eid:105,
        dept:"Sales"
  },{
        sl:7,
        name:"Kiran",
        age:"29",
        place:"Chennai",
        eid:106,
        dept:"Dev"
  },{
        sl:8,
        name:"Vikram",
        age:"31",
        place:"Kolkata",
        eid:107,
        dept:"Support"
  },{
        sl:9,
        name:"Swati",
        age:"27",
        place:"Jaipur",
        eid:108,
        dept:"HR"
  },{
        sl:10,
        name:"Rajesh",
        age:"33",
        place:"Ahmedabad",
        eid:109,
        dept:"Logitics"
  },{
        sl:11,
        name:"Deepika",
        age:"24",
        place:"Mysore",
        eid:110,
        dept:"Design"
  }
]
  
  return (
    <div>
      <hr />
      <h2>Employee Detailes</h2>
      <table border={1}>
      <tr>
        <th>S.NO</th>
        <th>Employee Name</th>
        <th>Employee Age</th>
        <th>Employee Place</th>
        <th>Employee Id</th>
        <th>Employee Department</th>
      </tr>
      {
        Employee_Details.map((ele,index)=>{
            return (
                <>
            <tr key={index}>
                <td>{ele.sl}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.place}</td>
                <td>{ele.eid}</td>
                <td>{ele.dept}</td>
            </tr>
            </>
         ) })
      }
      </table>
    </div>
  )
}

export default Example1
