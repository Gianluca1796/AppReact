import React from 'react'
import './itemdetail.css'

const ItemDetail = ({ item }) => {
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
        </div>
        </div>
    )
}

export default ItemDetail