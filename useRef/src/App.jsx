import { useState } from "react"
import './App.css';
import { useRef } from "react";

function App() {
  let [time, setTime] = useState(0);
  let intervalRef = useRef(null);

  console.log('app render');

  function handleStart() {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; 
    }
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null; 
    setTime(0);
  }

  return (
    <>
      <h2>Time {time}</h2>
      <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </>
  )
}

export default App
