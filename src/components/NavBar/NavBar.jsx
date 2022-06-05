
import logoGeek from '../../img/Logo.png'
import "./navbar.css"

export default function NavBar() {
    return (
        <nav className="navbar">
            <img className="logo"src={logoGeek} alt="" />
            <ul className="navbar__list">
                <li className='list__item'><a href="">Figuras</a>
                    <ul className='sublist'>
                        <li><a href="">Pokémon</a></li>
                        <li><a href="">DBZ</a></li>
                        <li><a href="">Otros</a></li>
                    </ul>
                </li>
                <li><a href="">Videojuegos</a></li>
                <li className='list__item'><a href="">Cartas coleccionables</a>
                    <ul className='sublist'>
                        <li><a href="">Pokémon</a></li>
                        <li><a href="">Yu-Gi-Oh</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
