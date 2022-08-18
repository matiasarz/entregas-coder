import { useEffect } from "react";
import Item from "../components/item/Item";
import { useSearchCategory } from "../hooks/useSearchCategory";

const Belleza = ({ title, setCategory }) => {

    const { category, filter } = useSearchCategory('http://localhost:3000/dat.json','belleza');
    useEffect(() => setCategory(filter), []);

    return (
        <>
            <h2>{title}</h2>
            <div className="itemListContainer">
                {
                    category.map(item => <Item key={item.id} data={item} to={`/${filter}/detalle/${item.id}`} />)
                }
            </div>
        </>
    )
}

export default Belleza
