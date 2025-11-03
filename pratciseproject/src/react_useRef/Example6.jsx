import React, { useRef, useState } from 'react';

function Example6() {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  let StartTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  let StopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  let ResetTimer = () => {
    setTime(0);
     clearInterval(timerRef.current);
    timerRef.current = null; h
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Example of useRef hook to design the stopwatch using timers</h1>
      <div
        style={{
          width: '200px',
          padding: '20px',
          boxShadow: '0px 0px 10px black',
          margin: '20px auto',
          textAlign: 'center',
        }}
      >
        <h3>The Time is: {time}</h3>
        <button onClick={StartTimer}>Start</button>
        <button onClick={StopTimer}>Stop</button>
        <button onClick={ResetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Example6;