import { useEffect } from 'react';
import Item from '../components/item/Item';
import '../css-routes/styles.css';
import { useGetCategoryFromFirestoreDB } from '../services/firebase';
import Loading from '../components/loading/Loading';

const Electrodomesticos = ({ title, setCategory }) => {
    const { category, loading } =
        useGetCategoryFromFirestoreDB('electrodomesticos');
    useEffect(() => setCategory('electrodomesticos'));

    if (loading) return <Loading />;

    return (
        <section className="sectionContainer">
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {category.map((item) => (
                    <Item
                        key={item.id}
                        data={item}
                        to={`/electrodomesticos/detalle/${item.id}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Electrodomesticos;
