import React from 'react'
import Child from './Child'


function Parent() {
  let handleHelloClick = () => {
    alert("hello")
  }
  let handleSubmitClick = () => {
    alert("submitted")
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <Child 
        clickHello={handleHelloClick}
        clickSubmit={handleSubmitClick}
      />
    </div>
  )  
}

export default Parent