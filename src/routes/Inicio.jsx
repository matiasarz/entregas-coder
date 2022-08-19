import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import '../css-routes/styles.css';

const Inicio = () => {
    return (
        <section className="sectionContainer">
            <ItemListContainer text='Catálogo de productos' />
        </section>
    )
}

export default Inicio
