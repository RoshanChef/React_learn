import { useState } from "react";
import UserContext from "./userContext";

export default function ContextProvider({ children }) {
    const [data, setData] = useState({ message: 'Hello welcome, Roshan kalmathe' });

    let obj = { data, setData };
    return (
        <UserContext.Provider value={obj}>
            {children}
        </UserContext.Provider>
    )
}
