
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartView.css'
import FormModal from '../Modal/Modal'


const CartView = () => {

    const { cart, deleteItem, totalInCart, clearCart } = useContext(CartContext)

    const clearAll = () => {
        clearCart()
    }

    if (cart.length === 0) {
        return <h1>No hay articulos en el carrito!</h1>
    }

    return (
        <>
            <div className='cart-container'>
                {
                    cart.map(item => (
                        <div key={item.id}>
                            <div className='item__card card-in-cart'>
                                <div className='item__description card-in-cart-description '>
                                    <h5 className='name'>{item.name}</h5>
                                    <h2 className='price'>${item.price}</h2>
                                    <ion-icon name="trash-outline" onClick={() => deleteItem(item.id)}></ion-icon>
                                    <p>Subtotal : {item.price * item.cant}</p>
                                    <p>Cantidad: {item.cant}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='cart-footer'>
                <div>
                    <p>Total: ${totalInCart()}</p>
                    <button onClick={clearAll} className='btn btn-danger'>Vaciar carrito</button>
                </div>
            </div>
            <div className="confirm-button">
                <FormModal />
            </div>
        </>
    )
}






export default CartView