
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartForm from './CartForm'


const CartView = () => {

    const { cart, clearCart, deleteItem, totalInCart } = useContext(CartContext)

        const clearAll = () => {
            clearCart()
        }
        
        if (cart.length === 0) {
            return <h1>No hay articulos en el carrito!</h1>
        }

        return (
            <div>
                {
                    cart.map(item => (
                        <div key={item.id}>
                            <div className='item__card'>
                                <div className='item__description'>
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
                <div>
                    <div>
                        <p>Total: ${totalInCart()}</p>
                    </div>
                    <button onClick={clearAll} >Vaciar carrito</button>
                    <CartForm/>
                </div>
            </div>
        )
    }






export default CartView