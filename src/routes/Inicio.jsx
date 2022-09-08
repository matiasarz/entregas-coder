import Form from '../components/form/Form';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import '../css-routes/styles.css';

const Inicio = () => {
    return (
        <section className="sectionContainer">
            <ItemListContainer text="Catálogo de productos" />
            <Form />
        </section>
    );
};

export default Inicio;
