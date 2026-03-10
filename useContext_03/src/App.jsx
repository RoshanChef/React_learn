import { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import { TodoProvider } from './Context/TodoContext';

export default function App() {
  const [curData, setData] = useState([]);
  const [edit, setEdit] = useState({
    inx: null,
    save: false,
    check: false,
  });

  function setter(value) { setData(value); }

  function set_edit(value) {
    setEdit(val => ({ ...val, ...value }));
  }

  useEffect(() => {
    console.log(edit);
  }, [edit]);



  return (
    <TodoProvider value={{ curData, setter, set_edit, edit }}>
      <Todo />
    </TodoProvider>
  )
}
