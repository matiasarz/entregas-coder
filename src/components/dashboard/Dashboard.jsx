import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { cartContextProvider } from '../../context/CartContextProvider';
import { useGetDataFromFirestoreDB } from '../../services/firebase';
import { AiOutlineSearch } from 'react-icons/ai';
import './Dashboard.css';
import ItemRequested from './ItemRequested';

const DashBord = () => {
    const { dataForm, setNavigateTo, navigateTo } =
        useContext(cartContextProvider);

    const { data } = useGetDataFromFirestoreDB('orders');

    const [inputSearch, setInputSearch] = useState({
        id: '',
    });

    const [searchOrder, setSearchOrder] = useState({});

    let idBuyer = data.filter((item) => item.buyer.email === dataForm.email);

    if (!navigateTo) return <Navigate to="/login" replace={true} />;

    const style = {
        fontSize: '22px',
        cursor: 'pointer',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchOrder(data.find((item) => item.id === inputSearch));
    };

    return (
        <section className="sectionDashboardContainer">
            <button className="logout" onClick={() => setNavigateTo(false)}>
                Log out
            </button>
            <h1>!Hola {dataForm.name.toUpperCase()}¡</h1>
            <article className="orderhistory">
                <h2>Historial de Compras</h2>
                {idBuyer.length === 0 ? (
                    <h3>El historial de compras esta vacío</h3>
                ) : (
                    <ul>
                        {idBuyer.map((item) => (
                            <li key={item.id}> Código de compra - {item.id}</li>
                        ))}
                    </ul>
                )}
            </article>
            <article className="requestOrder">
                <h2>Consultar compra</h2>
                <form onSubmit={handleSubmit} className="searchBar">
                    <button type="submit">
                        <AiOutlineSearch style={style} />
                    </button>
                    <input
                        type="search"
                        name="id"
                        placeholder="código de compra"
                        onChange={(e) => setInputSearch(e.target.value)}
                    />
                </form>
            </article>
            <article className="showRequestedOrder">
                {searchOrder === undefined ? (
                    <h4>Ingresé un código válido</h4>
                ) : !Object.entries(searchOrder).length ? (
                    <h4>Consulte su compra</h4>
                ) : (
                    searchOrder.items.map((item) => (
                        <ItemRequested key={item.id} ItemRequested={item} />
                    ))
                )}
            </article>
        </section>
    );
};

export default DashBord;
