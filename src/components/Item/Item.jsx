import React from 'react'
import { memo } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
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
                    <button className="cta">
                        <span className="hover-underline-animation"> Ver Detalle </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default memo(Item);