import "../../app.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function CartWidget() {
    const {cart, qntyInCart} = useContext(CartContext)

    if(cart.length===0){
        return <></>
    }
    return (
        <div>
        <ion-icon name="bag-outline"></ion-icon>
        <p>{qntyInCart()}</p>
        </div>
    )
}
