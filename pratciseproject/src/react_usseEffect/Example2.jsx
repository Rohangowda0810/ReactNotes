import React, { useEffect, useState } from 'react';

function Example2() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log("component mounted");
    document.title = `Count is ${count}`;
    return () => {
      console.log("component unmount component is cleaned");
    };
  }, [count]); // component did update

  return (
    <div style={{ textAlign: "center" }}>
      <h1>The Count value is: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Example2;