import CartContainer from "../components/cartContainer/CartContainer";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContextProvider } from "../context/CartContextProvider";
import '../css-routes/styles.css';

const Cart = () => {

    const { productAdd } = useContext(cartContextProvider);

    return (
        <section className="sectionContainer">
            {
                productAdd.length ? null : <Link to='/' className='buttonBack'>Catálogo</Link>
            }
            <h1 className="titleSection">
                {
                    productAdd.length === 0 ? 'Cart vacio' : 'Productos agregados'
                }
            </h1>
            <CartContainer />
        </section>
    )
}

export default Cart
