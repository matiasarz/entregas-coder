import { useEffect, useState } from 'react';
import Item from '../components/item/Item';
import { useGetCategoryFromFirestoreDB } from '../services/firebase';
import '../css-routes/styles.css';
import Loading from '../components/loading/Loading';
import MenuAside from '../components/menuAside/MenuAside';

const Indumentaria = ({ title, setCategory }) => {
    const { categoryDB, loading } =
        useGetCategoryFromFirestoreDB('indumentaria');

    const [itemCategory, setItemCategory] = useState([]);

    useEffect(() => setCategory('indumentaria'));

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
                            to={`/indumentaria/detalle/${item.id}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Indumentaria;
