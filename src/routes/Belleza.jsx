import { useEffect } from "react";
import Item from "../components/item/Item";
import '../css-routes/styles.css';
import firestoreDB, { GetCategoryFromFirestoreDB } from "../services/firebase";

const Belleza = ({ title, setCategory }) => {

    const { category } = GetCategoryFromFirestoreDB(firestoreDB, 'belleza')
    useEffect(() => setCategory('belleza'), []);

    return (
        <section className="sectionContainer">
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {
                    category.map(item => <Item key={item.id} data={item} to={`/belleza/detalle/${item.id}`} />)
                }
            </div>
        </section>
    )
}

export default Belleza
