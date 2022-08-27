import { useEffect } from "react";
import Item from "../components/item/Item";
import firestoreDB, { GetCategoryFromFirestoreDB } from "../services/firebase";
import '../css-routes/styles.css';

const Tecnologia = ({ title, setCategory }) => {

    const { category } = GetCategoryFromFirestoreDB(firestoreDB,'tecnologia');
    useEffect(() => setCategory('tecnologia'), []);

    return (
        <section className="sectionContainer">
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {
                    category.map(item => <Item key={item.id} data={item} to={`/tecnologia/detalle/${item.id}`} />)
                }
            </div>
        </section> 
    )
}

export default Tecnologia
