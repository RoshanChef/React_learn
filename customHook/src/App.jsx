import useToggle from "./hook/useToggle";

function App() {
  let toggle = useToggle();
  console.log('render');
  return (
    <>
    {toggle}
    </>
  )
}

export default App
