import { useState, useEffect } from 'react';
import Item from '../components/item/Item';
import { useGetCategoryFromFirestoreDB } from '../services/firebase';
import '../css-routes/styles.css';
import Loading from '../components/loading/Loading';

const Tecnologia = ({ title, setCategory }) => {
    const { category, loading } = useGetCategoryFromFirestoreDB('tecnologia');
    useEffect(() => setCategory('tecnologia'), []);

    const [asd, setasd] = useState(1);

    if (loading) return <Loading />;

    return (
        <section className="sectionContainer">
            <button onClick={() => setasd(asd + 1)}>asd</button>
            <h1 className="sectionTitle">{title}</h1>
            <div className="itemListContainer">
                {category.map((item) => (
                    <Item
                        key={item.id}
                        data={item}
                        to={`/tecnologia/detalle/${item.id}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Tecnologia;
