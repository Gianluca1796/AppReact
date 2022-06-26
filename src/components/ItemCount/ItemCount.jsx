import { useState } from "react";
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const suma = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const resta = () => {   
        if(count>0){
            setCount(count - 1)
        }
    }
    return (
        <div className="count">
            <button className="count__button" onClick={resta}>-</button>
            <span className="count__content">{count}</span>
            <button className="count__button" onClick={suma}>+</button>
            <button onClick={ ()=>onAdd(count) }>Agregar al carrito</button>
        </div>
    );
}


export default ItemCount;
