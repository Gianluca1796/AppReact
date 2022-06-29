import React from 'react'
import { memo } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    const urlDetalle = `/item/${item.id}`
    return (
        <div className='item__card'>
            <div>
                <img src={item.img} alt="" />
            </div>
            <div className='item__description'>
                <h5 className='name'>{item.name}</h5>
                <h2 className='price'>${item.price}</h2>
                <Link to={urlDetalle}>
                <button>Ver detalle</button>
                </Link>
            </div>
        </div>

    )
}

export default memo(Item);