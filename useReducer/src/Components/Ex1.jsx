import { useReducer, useState } from 'react'

export default function Ex1() {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(function (state) {
        return state - 1;
    }, 0);

    return (
        <>
            <div>
                <h1>Counter 1</h1>
                <p>Counter : {count}</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
            <div>
                <h1>Counter 2</h1>
                <p>Counter : {state}</p>
                <button onClick={() => dispatch()}>Increase</button>
            </div>
        </>
    )
}
