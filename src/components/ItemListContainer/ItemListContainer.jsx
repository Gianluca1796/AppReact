import React, { useState, useEffect } from "react";
import { productos } from "../../mock/products";
import ItemList from "../ItemList/ItemList";

import "./itemlistcontainer.css"

export default function ItemListContainer(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const recibirProductos = new Promise ((res, rej) => {
            setTimeout(() => {
                res(productos)
            }, 2000);
        })
        recibirProductos
        .then((res)=>{
            setProducts(res)
        })
        .catch((error) => {
            console.log("error")
        });
    }, [])
    return (
        <>
        <div className="list-container">{props.greetings}</div>
        <ItemList items={products}/>
        </>
    )
}
