import { useMemo, useState } from 'react'
import Cart from './compo/Cart'

function App() {
  let [cnt, setCnt] = useState(0);
  let [number, setNumber] = useState(10000000);

  console.log('App render');


  let val = useMemo(() => {
    let total = 0;
    for (let i = 4; i <= number; i++) {
      if (number % i != 0) {
        total++;
      }
    }
    return total;
  },[number]);

  return (
    <div>
      <p>Counter {cnt}</p>
      <button onClick={() => setCnt(cnt + 1)}>Incre</button>
      <p>Total Primes {val} </p>
      <button onClick={() => setNumber(number => number + 1)}>click me</button>
      <Cart title="hello"></Cart>
    </div>
  )
}

export default App
