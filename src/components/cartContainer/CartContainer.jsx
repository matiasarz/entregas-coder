import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { cartContextProvider } from '../../context/CartContextProvider';
import { uploadOrderToFirestoreDB } from '../../services/firebase';
import CartItem from '../cartItem/CartItem';
import './CartContainer.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

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

        MySwal.fire({
            title: <strong>Gracias por la compra</strong>,
            html: <i>Ticket de compra en el perfil</i>,
            icon: 'success',
        });

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
