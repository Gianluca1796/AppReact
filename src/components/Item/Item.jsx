import React from 'react'
import './Item.css'
const Item = ({item}) => {
    return (
        <div className='item__card'>
            <div>
                <img src={item.img} alt="" />
            </div>
            <div className='item__description'>
                <h5 className='name'>{item.name}</h5>
                <h2 className='price'>${item.price}</h2>
            </div>
        </div>

    )
}

export default Item