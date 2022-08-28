import { useEffect } from 'react';
import Item from '../components/item/Item';
import '../css-routes/styles.css';
import { useGetCategoryFromFirestoreDB } from '../services/firebase';
import Loading from '../components/loading/Loading';

const Belleza = ({ title, setCategory }) => {
    const { category, loading } = useGetCategoryFromFirestoreDB('belleza');
    useEffect(() => setCategory('belleza'), []);

    if (loading) return <Loading />;

    return (
        <section className="sectionContainer">
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {category.map((item) => (
                    <Item
                        key={item.id}
                        data={item}
                        to={`/belleza/detalle/${item.id}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Belleza;
