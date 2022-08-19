import { useEffect } from "react";
import Item from "../components/item/Item";
import { useSearchCategory } from "../hooks/useSearchCategory";
import '../css-routes/styles.css';

const Indumentaria = ({ title, setCategory }) => {

    const { category, filter } = useSearchCategory('http://localhost:3000/dat.json','indumentaria');
    useEffect(() => setCategory(filter), []);

    return (
        <section className="sectionContainer">
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {
                    category.map(item => <Item key={item.id} data={item} to={`/${filter}/detalle/${item.id}`} />)
                }
            </div>
        </section>
    )
}

export default Indumentaria
