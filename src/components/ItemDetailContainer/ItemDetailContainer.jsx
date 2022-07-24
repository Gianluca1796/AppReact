import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/firebaseConfig";
import { BounceLoader } from "react-spinners";
import './itemdetail.css'


export default function ItemDetailContainer(props) {
    const [product, setProduct] = useState([{}])
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams();

    useEffect(() => {
        getItem(itemId)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error, "error");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId])


    if (loading) {
        return (
            <div className="loader">
                <BounceLoader></BounceLoader>
            </div>
        )
    }
    return (
        <>
            <div className="list-container">{props.greetings}</div>
            <ItemDetail item={product} />
        </>
    )
}






