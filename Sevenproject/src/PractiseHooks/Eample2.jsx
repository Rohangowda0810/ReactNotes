import React,{useState} from 'react'

function Eample2() {
   let[state,setState]= useState({name:'rohan',age:"22",place:"mandya"})
   let updateDetails=()=>{
    setState({...state,name:'kousthubha'})
   }
  return (
    <div>
      <h3>name:{state.name}</h3>
      <h3>Age:{state.age}</h3>
      <h3>place:{state.place}</h3>
      <button onClick={updateDetails}>Update</button>
    </div>
  )
}

export default Eample2
