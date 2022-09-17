import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ButtonComprar from '../cartFinalizar/ButtonComprar';
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css';
import 'react-medium-image-zoom/dist/styles.css';
import Componente from '../componenteImg/Componente';
import { cartContextProvider } from '../../context/CartContextProvider';

const ItemDetail = ({ data = {}, to }) => {
    const { duplicados } = useContext(cartContextProvider);

    const { imgUrl, price, name, stock, id } = data;

    const [statePass, setStatePass] = useState(true);
    const [productDetail, setProductDetail] = useState({});

    const onAdd = (count, product) => {
        duplicados(product, id, count);

        setProductDetail({
            ...product,
            count,
        });
        setStatePass(false);
    };
    const buttonStyle = {
        fontSize: '2em',
        color: '#38f',
    };

    return (
        <section className="detailContainer">
            <Link to={to} className="buttonBack">
                Volver
            </Link>
            <div className="itemDetail">
                <div className="itemDetailImg">
                    <Componente src={imgUrl} alt={name} />
                </div>
                <div className="itemDetailInfo">
                    <h1>{name}</h1>
                    <h2>${price}</h2>
                    <p>Descripción: </p>
                    <p>
                        Stock: <b>{stock}</b>
                    </p>
                    {statePass ? (
                        <ItemCount
                            data={data}
                            onAdd={onAdd}
                            styleContainer="buttonContainer"
                            buttonStyle={buttonStyle}
                            statePass={statePass}
                        />
                    ) : (
                        <>
                            <ButtonComprar productDetail={productDetail} />
                            <Link to="/" className="buttonComprar">
                                <div>Seguir comprando</div>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;
