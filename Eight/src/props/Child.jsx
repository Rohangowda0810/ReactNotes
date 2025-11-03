import React from 'react'

function Child(props) {
    const{name,place,event,event1}=props
  return (
    <>
      <p>hi my name {name}</p>
      <img src="https://tse2.mm.bing.net/th/id/OIP.IgqBrlToKBEc5lJ9i2o3hwHaFc?pid=Api&P=0&h=180" alt="" onMouseOver={event1}/>
      <p onMouseOver={event1}> i am from {place}</p>
      <button onClick={event}>click here</button>
    </>
  )
}

export default Child
