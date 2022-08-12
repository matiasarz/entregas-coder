import { useEffect, useState } from "react";

const useFecth = (url) => {

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(e => console.log(`Error: ${e}`))
            setLoading(false);
    }, [])

    return { data, loading }
}

export default useFecth
