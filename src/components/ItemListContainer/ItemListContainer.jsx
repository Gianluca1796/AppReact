import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getItems, getItemsForCategory } from "../../services/firebaseConfig";
import { BounceLoader } from "react-spinners";

import "./itemlistcontainer.css";


export default function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            getItemsForCategory(categoryId)
                .then((res) => {
                    setProducts(res);
                })
                .catch((error) => {
                    console.log(error, "error");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            getItems()
                .then((res) => {
                    setProducts(res);
                })
                .catch((error) => {
                    console.log(error, "error");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [categoryId]);

    
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
            <ItemList items={products} />
        </>
    );
}
