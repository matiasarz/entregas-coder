import { useEffect } from 'react';
import Item from '../components/item/Item';
import { useGetCategoryFromFirestoreDB } from '../services/firebase';
import '../css-routes/styles.css';
import Loading from '../components/loading/Loading';

const Muebles = ({ title, setCategory }) => {
    const { category, loading } = useGetCategoryFromFirestoreDB('muebles');
    useEffect(() => setCategory('muebles'));

    if (loading) return <Loading />;

    return (
        <section className="sectionContainer">
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {category.map((item) => (
                    <Item
                        key={item.id}
                        data={item}
                        to={`/muebles/detalle/${item.id}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Muebles;
