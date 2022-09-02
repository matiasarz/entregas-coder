import { useEffect, useState } from 'react';
import Item from '../components/item/Item';
import '../css-routes/styles.css';
import { useGetCategoryFromFirestoreDB } from '../services/firebase';
import Loading from '../components/loading/Loading';
import MenuAside from '../components/menuAside/MenuAside';

const Belleza = ({ title, setCategory }) => {
    const { categoryDB, loading } = useGetCategoryFromFirestoreDB('belleza');

    const [itemCategory, setItemCategory] = useState([]);

    useEffect(() => setCategory('belleza'));

    useEffect(() => setItemCategory(categoryDB), [categoryDB]);

    if (loading) return <Loading />;

    return (
        <section className="sectionContainer">
            <MenuAside
                categoryDB={categoryDB}
                setItemCategory={setItemCategory}
            />
            <div className="categoryContainer">
                <h1 className="sectionTitle">{title}</h1>
                <div className="itemListContainer">
                    {itemCategory.map((item) => (
                        <Item
                            key={item.id}
                            data={item}
                            to={`/belleza/detalle/${item.id}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Belleza;
