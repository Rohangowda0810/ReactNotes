import React from 'react'
import useCounter from './useCounter'

function Component1() {
    const {increment,reset,decrement,count}=useCounter(100)
  return (
    <div>
      <h1>Example for custom hook for component1 to use
        counter logic
      </h1>
      <h2> The Count Value is: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Component1