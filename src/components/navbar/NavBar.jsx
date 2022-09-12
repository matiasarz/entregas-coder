import './NavBar.css';
import logo from '../../assets/images/logo.jpg';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import {
    AiOutlineLogin,
    AiOutlineUser,
    AiOutlineBars,
    AiOutlineClose,
} from 'react-icons/ai';
import { cartContextProvider } from '../../context/CartContextProvider';
import { useContext, useState } from 'react';

const NavBar = () => {
    const { navigateTo, dataForm } = useContext(cartContextProvider);

    const [bar, setBar] = useState(false);

    const activeStyle = {
        color: '#000',
        fontSize: '.95em',
    };

    const style = {
        fontSize: '22px',
    };

    const barStyle = {
        fontSize: '25px',
        cursor: 'pointer',
    };

    const handleStyle = ({ isActive }) => (isActive ? activeStyle : undefined);

    return (
        <header className="navContainer">
            <nav className="nav">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Logo de sonrisa" />
                    </Link>
                </div>
                <div className="barsContainer">
                    {bar ? (
                        <button onClick={() => setBar(false)}>
                            <AiOutlineClose style={barStyle} />
                        </button>
                    ) : (
                        <button onClick={() => setBar(true)}>
                            <AiOutlineBars style={barStyle} />
                        </button>
                    )}
                </div>
                <ul className={`navBar ${bar ? 'showMenu' : 'hideMenu'}`}>
                    <li>
                        <NavLink to="/" className="link" style={handleStyle}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/belleza"
                            className="link"
                            style={handleStyle}
                        >
                            Belleza
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/electrodomesticos"
                            className="link"
                            style={handleStyle}
                        >
                            Electrodomésticos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/indumentaria"
                            className="link"
                            style={handleStyle}
                        >
                            Indumentaria
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tecnologia"
                            className="link"
                            style={handleStyle}
                        >
                            Tecnología
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/muebles"
                            className="link"
                            style={handleStyle}
                        >
                            Muebles
                        </NavLink>
                    </li>
                </ul>
                <ul className="navBarIcons">
                    {navigateTo ? (
                        <li>
                            <NavLink
                                to="/dashboard"
                                className="link"
                                style={handleStyle}
                            >
                                <div>
                                    <AiOutlineUser style={style} />
                                    <span>{dataForm.name}</span>
                                </div>
                            </NavLink>
                        </li>
                    ) : (
                        <li>
                            <NavLink
                                to="/login"
                                className="link"
                                style={handleStyle}
                            >
                                <div>
                                    <AiOutlineLogin style={style} />
                                    <span>Log in</span>
                                </div>
                            </NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink
                            to="/cart"
                            className="link"
                            style={handleStyle}
                        >
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
