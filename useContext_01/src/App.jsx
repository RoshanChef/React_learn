import Child from "./Components/Child"
import ContextProvider from "./Context/ContextProvider"
const App = () => {
  return (
    <ContextProvider>
        <Child/>
    </ContextProvider>
  )
}

export default App