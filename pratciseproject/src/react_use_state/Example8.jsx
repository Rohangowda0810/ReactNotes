  
import React, { useState } from 'react';

function Example6() {
  const [data, setData] = useState({ name: "Kousthubha", age: 22, city: "Mandya" });

  const change = () => {
    setData({ ...data, name: "Pruthvin", age: 25 });
  };

  return (
    <div>
      <h1>My name is {data.name}</h1>
      <h3>I am from {data.city}</h3>
      <h5>I am {data.age} years old</h5>
      <button onClick={change}>Update details</button>
    </div>
  );
}

export default Example6;