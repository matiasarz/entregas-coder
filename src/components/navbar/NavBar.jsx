import './NavBar.css'
import logo from '../../assets/images/logo.jpg'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
       <header>
            <nav className='nav'>
                <div>
                    <img src={logo} alt="Logo de sonrisa" />
                </div>
                <ul className='navBar'>
                    <NavLink to='/' className='link'>Inicio</NavLink>
                    <NavLink to='/galeria' className='link'>Galeria</NavLink>
                    <NavLink to='/faq' className='link'>Faq</NavLink>
                    <NavLink to='/contacto' className='link'>Contacto</NavLink>
                    <NavLink to='/carrito' className='link'>
                        <CartWidget />
                    </NavLink>
                </ul>
            </nav>
       </header>
    )
}

export default NavBar
