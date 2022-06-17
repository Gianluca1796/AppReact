

export default function NavLink({title,handleClick}) {
    return (
        <li className="list__item centerSides" onClick={handleClick}>
            {title}
        </li>
    )
}
