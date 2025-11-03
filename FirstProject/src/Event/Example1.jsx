import React from 'react'

function Example1() {
    let heandlerclick=()=>{
        alert("Button clicked")
    }
    let heandlerChange=(event)=>{
         alert("option changed"+event.target.value)
    }
  return (
    <div>
      <button onClick={heandlerclick}>Click here</button>
      <select onChange={heandlerChange}>
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
      </select>
    </div>
  )
}

export default Example1
