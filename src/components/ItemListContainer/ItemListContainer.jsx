import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getItems, getItemsForCategory } from "../../services/firebaseConfig";

import "./itemlistcontainer.css";

export default function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        if (categoryId) {
            getItemsForCategory(categoryId)
                .then((res) => {
                    setProducts(res);
                })
                .catch((error) => {
                    console.log(error, "error");
                });
        } else {
            getItems()
                .then((res) => {
                    setProducts(res);
                })
                .catch((error) => {
                    console.log(error, "error");
                });
        }
    }, [categoryId]);
    
    return (
        <>
            <div className="list-container">{props.greetings}</div>
            <ItemList items={products} />
        </>
    );
}
