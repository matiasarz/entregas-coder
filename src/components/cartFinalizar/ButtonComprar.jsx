import { Link } from "react-router-dom";
import './ButtonComprar.css';

const ButtonComprar = ({ productDetail }) => {

    const { count, stock } = productDetail;
    
    return (
        <>
            <p className="textoStock">
                Cantidad: <b>{count} { count > 1 ? 'Unidades' : 'Unidad'}</b>
                <span>(disponibles {stock})</span>
            </p>
            <Link to='/cart' className="buttonComprar"> 
                <div>
                    Comprar ahora
                </div>
            </Link>
        </>
    )
}

export default ButtonComprar
