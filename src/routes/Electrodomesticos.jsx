import { useEffect } from "react";
import Item from "../components/item/Item";
import '../css-routes/styles.css';
import firestoreDB, { GetCategoryFromFirestoreDB } from "../services/firebase";

const Electrodomesticos = ({ title, setCategory }) => {

    const { category } = GetCategoryFromFirestoreDB(firestoreDB, 'electrodomesticos');
    useEffect(() => setCategory('electrodomesticos'), [])

    return (
        <section className="sectionContainer">
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {
                    category.map(item => <Item key={item.id} data={item} to={`/electrodomesticos/detalle/${item.id}`} />)
                }
            </div>
        </section>        
    )
}

export default Electrodomesticos
