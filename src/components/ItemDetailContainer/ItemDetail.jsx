import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './itemdetail.css'

const ItemDetail = ({ item }) => {

    const notify = () => {
        toast.success("Producto agregado correctamente!",{
            pauseOnHover:false,
            autoClose: 3000,
            hideProgressBar: true
        })
    };
    
    const { addToCart} = useContext(CartContext)

    const [cant, setCant] = useState(0)

    const onAdd = (cant) => {
        setCant(cant);
        addToCart(item, cant);
        notify()
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
                    cant === 0 ? 
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> 
                    :
                    <><ToastContainer/> <Link to={"/cart"}>Ir al carrito</Link></>
                }
            </div>
        </div>
    )
}

export default ItemDetail