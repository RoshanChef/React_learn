import { useEffect, useState } from "react"

function App() {
  let [date, setDate] = useState(new Date().toLocaleString());
  let [show, setShow] = useState(false);
  
  useEffect(() => {
    if (show) return;
    let id;
    function change() {
      id = setInterval(() => {
        setDate(new Date().toLocaleString());
        console.log('hello');

      }, 1000);
    } 

    change();

    return () => {
      clearInterval(id);
      console.log("cleanup runned");
    }
  }, [show])

  return (
    <>
      <h2>hello app</h2>
      {
        !show &&
        <h3>time : {date}</h3>
      }
      <button onClick={() => setShow(!show)} style={{
        background: '#333',
        color: "white",
        padding: ".51rem",
        cursor: "pointer"
      }}>
        {show ? "show" : "Hide"}
      </button>

    </>
  )
}

export default App
