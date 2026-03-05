import { useState } from "react";

function Counter({item}) {
    let [count, setCount] = useState(0);
    return (
        (<>
            <p>Counter {item} : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
        )
    )
}

export default Counter; 