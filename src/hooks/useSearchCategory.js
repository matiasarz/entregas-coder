import { useEffect, useState } from "react";
import { useFetch } from "./useFetch"

export const useSearchCategory = (url, filter) => {

    const [ category, setCategory ] = useState([])
    const { data } = useFetch(url);
    
    useEffect(() => setCategory(data.filter(item => item.category === filter)), [data])

    return { category, filter }
}


