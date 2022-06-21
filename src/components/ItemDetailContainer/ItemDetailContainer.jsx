import React, { useState, useEffect } from "react";
import { productos } from "../../mock/products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


export default function ItemDetailContainer(props) {
    const [product, setProduct] = useState([{}])

    const { itemId } = useParams();

    useEffect(() => {
        const recibirProducto = new Promise((res, rej) => {
            setTimeout(() => {
                let idNumber = parseInt(itemId)
                const itemFounded = productos.find(item => {
                    return item.id === idNumber 
                })
                res(itemFounded)
            }, 600);
        })
        recibirProducto
            .then((res) => {
                setProduct(res)
            })
            .catch((error) => {
                console.log("error")
            });
    }, [itemId])
    return (
        <>
            <div className="list-container">{props.greetings}</div>
            <ItemDetail item={product} />
        </>
    )
}
