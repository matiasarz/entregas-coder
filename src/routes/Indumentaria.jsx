import { useEffect } from "react";
import Item from "../components/item/Item";
import firestoreDB, { GetCategoryFromFirestoreDB } from "../services/firebase";
import '../css-routes/styles.css';

const Indumentaria = ({ title, setCategory }) => {

    const { category } = GetCategoryFromFirestoreDB(firestoreDB,'indumentaria');

    useEffect(() => setCategory('indumentaria'), []);

    return (
        <section className="sectionContainer">
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {
                    category.map(item => <Item key={item.id} data={item} to={`/indumentaria/detalle/${item.id}`} />)
                }
            </div>
        </section>
    )
}

export default Indumentaria
