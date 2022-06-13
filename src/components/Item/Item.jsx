import React from 'react'
import './Item.css'
const Item = ({item}) => {
    return (
        <div>
            <div>
                <img src={item.img} alt="" />
            </div>
            <div>
                <h2 className='name'>{item.name}</h2>
                <h2 className='price'>${item.price}</h2>
            </div>
        </div>

    )
}

export default Item