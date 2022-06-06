

export default function NavLink({title,handleClick}) {
    return (
        <li className="list__item" onClick={handleClick}>
            {title}
        </li>
    )
}
