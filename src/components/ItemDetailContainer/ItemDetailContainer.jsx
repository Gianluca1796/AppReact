import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/firebaseConfig";


export default function ItemDetailContainer(props) {
    const [product, setProduct] = useState([{}])

    const { itemId } = useParams();

    useEffect(() => {
        getItem(itemId)
        .then((res) => {
            setProduct(res);
        })
        .catch((error) => {
            console.log(error, "error");
        })
    }, [itemId])


    return (
        <>
            <div className="list-container">{props.greetings}</div>
            <ItemDetail item={product} />
        </>
    )
}






