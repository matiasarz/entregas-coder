import CartContainer from "../components/cartContainer/CartContainer";
import { useContext } from 'react';
import { cartContextProvider } from "../context/CartContextProvider";
import '../css-routes/styles.css';

const Cart = () => {

    const { productAdd } = useContext(cartContextProvider);

    return (
        <section className="sectionContainer">
            <h1 className="titleSection">
                {
                    productAdd.length === 0 ? 'Cart Vacio' : 'Productos agregados'
                }
            </h1>
            <CartContainer />
        </section>
    )
}

export default Cart
