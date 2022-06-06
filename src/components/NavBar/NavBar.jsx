
import logoGeek from '../../img/Logo.png'
import NavLink from '../NavLink/NavLink';
import "./navbar.css"
import "../NavLink/navlink.css"

export default function NavBar() {
    const handleClick = () => {
        console.log('click')
    }
    return (
        <nav className="navbar">
            <img className="logo" src={logoGeek} alt="" />
            <ul className="navbar__list">
                <NavLink handleClick={handleClick} title= "Figuras">
                    {/* <ul className='sublist'>
                        <NavLink title="Pokémon"/>
                        <NavLink title="DBZ"/>
                        <NavLink title="Otros"/>
                    </ul> */}
                </NavLink>
                <NavLink handleClick={handleClick} title= "Videojuegos"/>
                <NavLink handleClick={handleClick} title= "Cartas Coleccionables">
                    {/* <ul className='sublist'>
                        <NavLink title= "Pokémon"/>
                        <NavLink title= "Yu-Gi-Oh"/>
                    </ul> */}
                </NavLink>
            </ul>
        </nav>
    );
}
