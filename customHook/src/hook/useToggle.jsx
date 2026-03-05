import { useState } from "react";

function useToggle() {
    let [state, setState] = useState(false);
    return (
        <>
            <button onClick={()=>setState(state=>!state)}>{state ? 'show' : 'hide'}</button>
        </>
    )
}

export default useToggle
