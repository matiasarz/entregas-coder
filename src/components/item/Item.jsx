import './item.css';
import Title from './Title';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ data, to }) => {
    const { imgUrl, price, name } = data;

    const [pass, setPass] = useState(false);

    const handleMouseEnter = () => setPass(true);

    const handleMouseLeave = () => setPass(false);

    const toggleOff = {
        visibility: 'hidden',
    };
    const toggleOn = {
        visibility: 'visible',
    };

    return (
        <>
            <div
                className="card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="cardImg">
                    <img src={imgUrl} alt={name} className="miImg" />
                    <Link
                        to={to}
                        className="buttonDetail"
                        style={pass ? toggleOn : toggleOff}
                    >
                        <button>Ver detalle</button>
                    </Link>
                </div>
                <div className="cardInfo">
                    <h2>${price}</h2>
                </div>
                <Title data={data} toggle={pass ? toggleOn : toggleOff} />
            </div>
        </>
    );
};

export default Item;
