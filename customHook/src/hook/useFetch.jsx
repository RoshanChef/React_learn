import { useState } from "react";
import { useEffect } from "react";

function useFetch(url) {
    let [data, setData] = useState([]);
    console.log('custom hook render');
    
    useEffect(() => {

        let getData = async () => {
            let data = await fetch(url);
            let res = await data.json();
            setData(res);
        }

        getData();

    }, [url])

    return data;
}

export default useFetch;