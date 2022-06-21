import React, { useState, useEffect } from "react";
import { productos } from "../../mock/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import "./itemlistcontainer.css";

export default function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const recibirProductos = new Promise((res, rej) => {
            setTimeout(() => {
                if (categoryId === undefined) {
                    res(productos);
                } else {
                    const itemFounded = productos.filter((item) => {
                        return item.category === categoryId;
                    });
                    res(itemFounded);
                }
            }, 600);
        });
        recibirProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log("error");
            });
    }, [categoryId]);
    return (
        <>
            <div className="list-container">{props.greetings}</div>
            <ItemList items={products} />
        </>
    );
}
