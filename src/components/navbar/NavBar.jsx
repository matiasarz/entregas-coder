import './NavBar.css'
import logo from '../../assets/logo.png'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {
    return (
       <nav className='nav'>
            <div>
                <img src={logo} alt="Logo de sonrisa" />
            </div>
            <ul className='navBar'>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Galeria</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
       </nav>
    )
}

export default NavBar
