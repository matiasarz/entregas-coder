import './NavBar.css';
import logo from '../../assets/images/logo.jpg';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { cartContextProvider } from '../../context/CartContextProvider';
import { useContext, useState } from 'react';
import LinkLogIn from './LinkLogIn';

const NavBar = () => {
    const { navigateTo, dataForm } = useContext(cartContextProvider);

    const [menu, setMenu] = useState(false);

    const activeStyle = {
        // color: '#000',
        fontSize: '.95em',
    };

    const menuStyle = {
        fontSize: '2.5em',
        cursor: 'pointer',
        color: '#fff',
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
                <div className="menuContainer">
                    {menu ? (
                        <button onClick={() => setMenu(false)}>
                            <AiOutlineClose style={menuStyle} />
                        </button>
                    ) : (
                        <button onClick={() => setMenu(true)}>
                            <AiOutlineMenu style={menuStyle} />
                        </button>
                    )}
                </div>
                <ul className={`navBar ${menu ? 'showMenu' : 'hideMenu'}`}>
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
                    <LinkLogIn
                        navigateTo={navigateTo}
                        name={dataForm.name}
                        handleStyle={handleStyle}
                        className="iconLogInResponsive"
                    />
                </ul>
                <ul className="navBarIcons">
                    <LinkLogIn
                        navigateTo={navigateTo}
                        name={dataForm.name}
                        handleStyle={handleStyle}
                        className="iconLogIn"
                    />
                    <li>
                        <NavLink
                            to="/cart"
                            className="link linkCart"
                            style={handleStyle}
                        >
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
                {navigateTo && (
                    <div className="menuResponsiveLogIn">
                        <h4>Bienvenido {dataForm.name.toUpperCase()}</h4>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default NavBar;
