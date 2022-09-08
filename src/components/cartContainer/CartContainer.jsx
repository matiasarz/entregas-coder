import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { cartContextProvider } from '../../context/CartContextProvider';
import { uploadOrderToFirestoreDB } from '../../services/firebase';
import CartItem from '../cartItem/CartItem';
import './CartContainer.css';

const CartContainer = () => {
    const {
        productAdd,
        filtrados,
        total,
        dataForm,
        navigateTo,
        setProductAdd,
    } = useContext(cartContextProvider);

    const order = {
        buyer: { ...dataForm },
        items: [...productAdd],
        total: total,
        date: new Date(),
    };

    const handleClick = () => {
        uploadOrderToFirestoreDB(order);
        setProductAdd([]);
    };

    if (!navigateTo) return <Navigate to="/login" repalce={true} />;

    return (
        <div className="cartContainer">
            {productAdd.map((item) => (
                <CartItem key={item.id} data={item} filter={filtrados} />
            ))}
            {total === null
                ? ''
                : parseInt(total) && (
                      <div className="cartTotal">
                          <p>Total: ${total.toLocaleString('es')}</p>
                          <button
                              className="buttonConfirmarCompra"
                              onClick={handleClick}
                          >
                              Confirmar compra
                          </button>
                      </div>
                  )}
        </div>
    );
};

export default CartContainer;
