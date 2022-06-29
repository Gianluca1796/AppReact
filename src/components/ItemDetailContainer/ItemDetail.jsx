import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './itemdetail.css'

const ItemDetail = ({ item }) => {
    const { addToCart, deleteItem, isInCart} = useContext(CartContext)

    const [cant, setCant] = useState(0)

    const onAdd = (cant) => {
        setCant(cant);
        addToCart(item, cant);
    };


    return (
        <div className='detail__content'>
            <div className='item__card'>
                <img className='img__detail' src={item.img} alt="" />
            </div>
            <div className='detail__description'>
                <h2 className='detail-name'>{item.name}</h2>
                <h2 className='detail-name'>Categoría: {item.category}</h2>
                <h2 className='detail-description'>Descripción: {item.description}</h2>
                <h2 className='detail-price'>Precio: ${item.price}</h2>
                <h2 className='detail-name'> Stock: {item.stock}</h2>
                {
                    cant === 0 ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> : <Link to={"/cart"}>Ir al carrito</Link>
                }
                {isInCart(item.id) && <button onClick={()=>deleteItem(item.id)}>
                    Remover del carrito
                </button>}
            </div>
        </div>
    )
}

export default ItemDetail