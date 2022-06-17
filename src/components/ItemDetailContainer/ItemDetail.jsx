import React from 'react'
import './itemdetail.css'
import '../Item/Item.css'

const ItemDetail = ({ item }) => {
    return (
        <div className='item__card'>
            <img className='img__detail' src={item.img} alt="" />
            <div className='item__description'>
                <h5 className='name'>{item.name}</h5>
                <h2 className='name'>{item.category}</h2>
                <h2 className='description'>Descripción: {item.description}</h2>
                <h2 className='price'>${item.price}</h2>
                <h2 className='name'> Stock: {item.stock}</h2>
            </div>
        </div>
    )
}

export default ItemDetail