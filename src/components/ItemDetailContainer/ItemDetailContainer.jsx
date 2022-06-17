import React, { useState, useEffect } from "react";
import { productos } from "../../mock/products";
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer(props) {
    const [product, setProduct] = useState([{}])
    useEffect(() => {
        const recibirProducto = new Promise ((res, rej) => {
            setTimeout(() => {
                res(productos[0])
            }, 600);
        })
        recibirProducto
        .then((res)=>{
            setProduct(res)
        })
        .catch((error) => {
            console.log("error")
        });
    }, [])
    return (
        <>
        <div className="list-container">{props.greetings}</div>
        <ItemDetail item={product}/>
        </>
    )
}
