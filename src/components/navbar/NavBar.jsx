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

    let userName;

    if (Object.entries(dataForm).length) {
        userName = dataForm.name[0]
            .toUpperCase()
            .concat(dataForm.name.slice(1, dataForm.name.length));
    }

    const [menu, setMenu] = useState(false);

    const activeStyle = {
        color: '#000',
        fontSize: '.95em',
    };

    const menuStyle = {
        fontSize: '2.5em',
        cursor: 'pointer',
        color: '#fff',
    };

    const handleStyle = ({ isActive }) => (isActive ? activeStyle : undefined);

    const navBarLinks = [
        {
            linkName: 'Inicio',
            link: '/',
        },
        {
            linkName: 'Belleza',
            link: '/belleza',
        },
        {
            linkName: 'Electrodomésticos',
            link: '/electrodomesticos',
        },
        {
            linkName: 'Indumentaria',
            link: '/indumentaria',
        },
        {
            linkName: 'Tecnología',
            link: '/tecnologia',
        },
        {
            linkName: 'Muebles',
            link: '/muebles',
        },
    ];

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
                    {navBarLinks.map((item) => (
                        <li key={item.link}>
                            <NavLink
                                to={item.link}
                                className="link"
                                onClick={() => setMenu(false)}
                                style={handleStyle}
                            >
                                {item.linkName}
                            </NavLink>
                        </li>
                    ))}
                    <LinkLogIn
                        navigateTo={navigateTo}
                        name={userName}
                        handleStyle={handleStyle}
                        onClick={() => setMenu(false)}
                        className="iconLogInResponsive"
                    />
                </ul>
                <ul className="navBarIcons">
                    <LinkLogIn
                        navigateTo={navigateTo}
                        name={userName}
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
                        <h4>Bienvenido {userName}</h4>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default NavBar;
