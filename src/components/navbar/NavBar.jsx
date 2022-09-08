import './NavBar.css';
import logo from '../../assets/images/logo.jpg';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineLogin, AiOutlineUser } from 'react-icons/ai';
import { cartContextProvider } from '../../context/CartContextProvider';
import { useContext } from 'react';

const NavBar = () => {
    const { navigateTo, dataForm } = useContext(cartContextProvider);

    const activeStyle = {
        color: '#000',
        fontSize: '.95em',
    };

    const style = {
        fontSize: '22px',
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
                <ul className="navBar">
                    <NavLink to="/" className="link" style={handleStyle}>
                        Inicio
                    </NavLink>
                    <NavLink to="/belleza" className="link" style={handleStyle}>
                        Belleza
                    </NavLink>
                    <NavLink
                        to="/electrodomesticos"
                        className="link"
                        style={handleStyle}
                    >
                        Electrodomésticos
                    </NavLink>
                    <NavLink
                        to="/indumentaria"
                        className="link"
                        style={handleStyle}
                    >
                        Indumentaria
                    </NavLink>
                    <NavLink
                        to="/tecnologia"
                        className="link"
                        style={handleStyle}
                    >
                        Tecnología
                    </NavLink>
                    <NavLink to="/muebles" className="link" style={handleStyle}>
                        Muebles
                    </NavLink>
                </ul>
                <ul className="navBarIcons">
                    {navigateTo ? (
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
                    ) : (
                        <NavLink
                            to="/login"
                            className="link"
                            style={handleStyle}
                        >
                            <div>
                                <AiOutlineLogin style={style} />
                                <span>Iniciar sesión</span>
                            </div>
                        </NavLink>
                    )}
                    <NavLink to="/cart" className="link" style={handleStyle}>
                        <CartWidget />
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
