import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../reducers/todo/todoSlice"


export default function Todo() {
  const dispatch = useDispatch();
  let ar = useSelector(state => state.todos);

  return (
    <div>
      {
        ar.map(ele => {
          return (<div key={ele.text} style={{display:"flex",gap:'2rem'}}>
            <p>{ele.text}</p>
            <button onClick={() => dispatch(removeTodo(ele.id))}>Delete</button>
          </div>)
        })
      }

    </div>
  )
}
