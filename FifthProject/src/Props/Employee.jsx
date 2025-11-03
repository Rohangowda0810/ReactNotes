import React from 'react'
import CEmployeelist from './CEmployeelist'

function Employee() {
  return (
    <div>
      <h1>Employee</h1>
      <CEmployeelist name="Dhoni" age={44} id={7} designation="crickter"condition={false}/>
      <CEmployeelist/>
    </div>
  )
}

export default Employee
