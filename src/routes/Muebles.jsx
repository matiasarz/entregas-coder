import { useEffect } from "react";
import Item from "../components/item/Item";
import firestoreDB, { GetCategoryFromFirestoreDB } from "../services/firebase";
import '../css-routes/styles.css';

const Muebles = ({ title, setCategory }) => {

    const { category } = GetCategoryFromFirestoreDB(firestoreDB,'muebles');
    useEffect(() => setCategory('muebles'), []);

    return (
        <section className="sectionContainer">
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {
                    category.map(item => <Item key={item.id} data={item} to={`/muebles/detalle/${item.id}`} />)
                }
            </div>
        </section>   
    )
}

export default Muebles
