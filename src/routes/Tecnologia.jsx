import { useEffect } from "react";
import Item from "../components/item/Item";
import { useSearchCategory } from "../hooks/useSearchCategory";

const Tecnologia = ({ title, setCategory }) => {

    const { category, filter } = useSearchCategory('http://localhost:3000/dat.json','tecnologia');
    useEffect(() => setCategory(filter), []);

    return (
        <>
            <h2>{title}</h2>
            <div className="itemListContainer">
                {
                    category.map(item => <Item key={item.id} data={item} />)
                }
            </div>
        </>
    )
}

export default Tecnologia
