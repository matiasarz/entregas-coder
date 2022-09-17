import { useEffect, useState } from 'react';
import Item from '../components/item/Item';
import { useGetCategoryFromFirestoreDB } from '../services/firebase';
import '../css-routes/styles.css';
import Loading from '../components/loading/Loading';
import MenuAside from '../components/menuAside/MenuAside';

const Tecnologia = ({ title }) => {
    const { categoryDB, loading } = useGetCategoryFromFirestoreDB('tecnologia');

    const [itemCategory, setItemCategory] = useState([]);

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
                    {!itemCategory.length ? (
                        <h2>No hay resultados para el filtro</h2>
                    ) : (
                        itemCategory.map((item) => (
                            <Item
                                key={item.id}
                                data={item}
                                to={`/tecnologia/detalle/${item.id}`}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Tecnologia;
