import React from 'react'
import useCounter from './useCounter'

function Component2() {
    const{increment,reset,decrement,count}=useCounter()
  return (
    <div>
         <h1>Example for custom hook for component2 to use
        counter logic
      </h1>
      <h3>The item added to cart: {count}</h3>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
    </div>
  )
}

export default Component2