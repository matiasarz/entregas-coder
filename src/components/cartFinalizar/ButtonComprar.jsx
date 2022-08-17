import { Link } from "react-router-dom";
import './ButtonComprar.css';

const ButtonComprar = ({ stateAdd }) => {

    const { count, stock } = stateAdd;

    return (
        <>
            <p className="textoStock">
                Cantidad: <b>{count} { count > 1 ? 'Unidades' : 'Unidad'}</b>
                {/* <select className="selectButton">
                    <option value={count}>{count}</option>
                </select> */}
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
