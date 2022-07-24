import "../../app.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom';

export default function CartWidget() {
    const { cart, qntyInCart } = useContext(CartContext)

    if (cart.length === 0) {
        return <></>
    }
    return (
        <div>
            <Link to={"/cart"}>
            <ion-icon name="bag-outline"></ion-icon>
            </Link>
            <p>{qntyInCart()}</p>
        </div>
    )
}
