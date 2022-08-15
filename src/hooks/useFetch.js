import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(e => console.log(`Error: ${e}`))
            setLoading(false);
    }, [])

    return { data, loading }
}


