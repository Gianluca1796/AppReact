import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const { clearCart } = useContext(CartContext)

    const clearAll = () => {
        clearCart()
    }
    return (
        <div>
            <button onClick={clearAll} >Vaciar carrito</button>
        </div>
    )
}

export default Cart