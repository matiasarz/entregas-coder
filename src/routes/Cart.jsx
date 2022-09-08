import CartContainer from '../components/cartContainer/CartContainer';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContextProvider } from '../context/CartContextProvider';
import '../css-routes/styles.css';

const Cart = () => {
    const { productAdd } = useContext(cartContextProvider);

    const titleStyle = {
        marginTop: '20px',
        marginBottom: '287px',
    };

    return (
        <section
            className="sectionCartContainer"
            style={productAdd.length === 1 ? { marginBottom: '150.5px' } : null}
        >
            {productAdd.length ? null : (
                <Link to="/" className="buttonBack">
                    Catálogo
                </Link>
            )}
            <h1
                className="sectionTitle"
                style={productAdd.length === 0 ? titleStyle : null}
            >
                {productAdd.length === 0
                    ? 'Carrito vacio'
                    : 'Productos agregados'}
            </h1>
            <CartContainer />
        </section>
    );
};

export default Cart;
