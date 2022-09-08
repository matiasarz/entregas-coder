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
    const [searchOrder, setSearchOrder] = useState([]);

    const { name } = dataForm;

    let newArr = data.filter((item) => item.buyer.name === name);

    if (!navigateTo) return <Navigate to="/login" replace={true} />;

    const style = {
        fontSize: '22px',
        cursor: 'pointer',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchOrder(data.find((item) => item.id === inputSearch));
    };

    const { items } = searchOrder;

    return (
        <section className="sectionDashboardContainer">
            <button className="logout" onClick={() => setNavigateTo(false)}>
                Cerrar sesión
            </button>
            <h1>!Hola {name}¡</h1>
            <article className="orderhistory">
                <h2>Historial de Compras</h2>
                {newArr.length === 0 ? (
                    <h3>El historial de compras esta vacío</h3>
                ) : (
                    <ul>
                        {newArr.map((item) => (
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
                {items
                    ? items.map((item) => (
                          <ItemRequested key={item.id} ItemRequested={item} />
                      ))
                    : 'Campo vacío'}
            </article>
        </section>
    );
};

export default DashBord;
