import { useCallback, useState } from 'react'
import Cart from './compo/Cart'

function App() {
  let [cnt, setCnt] = useState(0);
  let [title, setTitle] = useState('Hello');

  console.log('App render');

  const handler = useCallback(() => {
    console.log('hello');
    setCnt(cnt + 1);
  }, [cnt])

  // const handler = () => {
  //   console.log('hello');
  // }

  return (
    <div>
      <p>Counter {cnt}</p>
      <button onClick={() => setCnt(cnt=>cnt+1)}>Incre</button>
      <Cart title={title} setTitle={setTitle} handler={handler}></Cart>
    </div>
  )
}

export default App
