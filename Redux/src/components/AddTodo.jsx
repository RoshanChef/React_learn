import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todo/todoSlice";

export default function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function handle(e) {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    return (
        <div>
            <form onSubmit={handle}>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}