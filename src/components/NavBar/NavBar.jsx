
import logoGeek from '../../img/Logo.png'
import "./navbar.css"
import "../NavLink/navlink.css"
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar">
            <img className="logo" src={logoGeek} alt="" />
            <ul className="navbar__list">
                <li>
                    <NavLink className='list__item centerSides' to="/">Start</NavLink>
                </li>
                <li>
                    <NavLink className='list__item centerSides' to="/category/Figuras">Figuras</NavLink>
                </li>
                <li>
                    <NavLink className='list__item centerSides' to="/category/Videojuegos">Videojuegos</NavLink>
                </li>
                <li>
                    <NavLink className='list__item centerSides' to="/category/Cartas Coleccionables">Cartas Coleccionables</NavLink>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}
