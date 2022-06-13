import { useState } from "react";
import './ItemCount.css'

function ItemCount({ stock, initial }) {
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
        </div>
    );
}


export default ItemCount;
