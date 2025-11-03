import React from 'react'

function Adduser({setUser}) {
  return (
    <div>
      <h1>Add User</h1>
      <input type='text' placeholder='Enter user name'
      onChange={(e)=>setUser(e.target.value)}/>
    </div>
  )
}

export default Adduser