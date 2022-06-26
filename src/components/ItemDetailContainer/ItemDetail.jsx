import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './itemdetail.css'

const ItemDetail = ({ item }) => {
    const [cant,setCant] = useState(0)
    const onAdd = (cant) =>{
        setCant(cant)
        console.log(cant)
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
                cant === 0 ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> : <Link to={"/cart"}>Ir al carrito</Link>
            }   
        </div>
        </div>
    )
}

export default ItemDetail