import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import '../css-routes/styles.css';

const Inicio = () => {
    return (
        <>
            <img
                src="https://www.masdigital.net/hubfs/Blog/tips-impulsar-ecommerce-1.jpg"
                alt="portada"
                className="frontPage"
            />
            <section className="sectionContainer">
                <ItemListContainer text="Catálogo de productos" />
            </section>
        </>
    );
};

export default Inicio;
