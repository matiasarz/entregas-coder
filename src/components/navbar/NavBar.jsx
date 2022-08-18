import './NavBar.css'
import logo from '../../assets/images/logo.jpg'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const activeStyle = {
        color: "#000",
        fontSize: '.95em',
    }

    const handleStyle = ({ isActive }) => isActive ? activeStyle : undefined;

    return (
       <header>
            <nav className='nav'>
                <div>
                    <img src={logo} alt="Logo de sonrisa" />
                </div>
                <ul className='navBar'>
                    <NavLink to='/' className='link'style={handleStyle}>Inicio</NavLink>
                    <NavLink to='/belleza' className='link' style={handleStyle}>Belleza</NavLink>
                    <NavLink to='/electrodomesticos' className='link' style={handleStyle}>Electrodomésticos</NavLink>
                    <NavLink to='/indumentaria' className='link' style={handleStyle}>Indumentaria</NavLink>
                    <NavLink to='/tecnologia' className='link' style={handleStyle}>Tecnología</NavLink>
                    <NavLink to='/muebles' className='link' style={handleStyle}>Muebles</NavLink>
                    <NavLink to='/cart' className='link'>
                        <CartWidget />
                    </NavLink>
                </ul>
            </nav>
       </header>
    )
}

export default NavBar
