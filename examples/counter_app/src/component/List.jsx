import { useState } from "react";
import Counter from "./Counter";

function List() {
    let [item, setItem] = useState(['A', 'B', 'C']);
    function handler() {
        setItem(['D', ...item]);
    }
    return (
        <>
            <button onClick={handler}>Click Me</button>
            {
                item.map((ele) => {
                    return <Counter key={ele} item={ele}></Counter>
                })
            }
        </>
    )
}

export default List; 