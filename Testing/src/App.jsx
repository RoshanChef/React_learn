import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function inc() {
    // functional update
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  return (
    <>
      <p>count {count}</p>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
    </>
  )
}

export default App
