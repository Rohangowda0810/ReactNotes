import React from 'react'

function Usergreeting(name,condition) {
  if(condition){
    return (
    
      <>
      <h1>wlcome to user{name}</h1>
       <p>your logged in successfully</p>
      </>
    )
  }
  else{
    return(
        <>
        <p>plz login</p>
        <p>plz checkpassword</p>
        </>
    )
       
}

}

export default Usergreeting
