import React from 'react'

function Example3() {
    let submit=(event)=>{
        event.preventDefault()
        alert("form submitted")
    }
  return (
    <div>
      <form onSubmit={submit}>
        <label >User Name</label>
        <input type='text' name='username'/><br></br>
        <label >Password</label>
        <input type='text' name='password'/><br></br>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Example3
