import { useState } from "react";

function App() {

  let [count, setCount] = useState(0);

  function inc() {
    count++;
    setCount(count);
  }

  function min() {
    count--;
    setCount(count);
  }



  return (
    <>
        <h2>Hello Work {count}</h2>
      <div onClick={inc} style={{ cursor: "pointer" }}>plus</div>
      <div onClick={min} style={{ cursor: "pointer", margin: "2rem .5rem" }}>minus</div>
    </>
  );
}

export default App; 