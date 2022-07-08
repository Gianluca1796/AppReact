import React, { useState, useContext } from "react";
import { createBuyOrder } from "../../services/firebaseConfig";
import { CartContext } from "../../context/CartContext";

const CartForm = () => {
const { cart, clearCart, totalInCart } = useContext(CartContext);
const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
});

const handleOnChange = (e) => {

    const field = e.target.name;
    const value = e.target.value;

    setBuyer({
        ...buyer,
        [field] : value
    })
}

const handleBuyOrder = (e) => {
    e.preventDefault();
    const dataOrder = {
    buyer,
    items: cart,
    total: totalInCart(),
    };
    createBuyOrder(dataOrder).then((orderDataCreated) => {
    clearCart();
    });
}

return (
    <form>
    <label htmlFor="name">Nombre</label>
    <input onChange={handleOnChange} id="name" name="name"></input>

    <label htmlFor="phone">Teléfono</label>
    <input onChange={handleOnChange} id="phone" name="phone"></input>

    <label htmlFor="email">E-mail</label>
    <input onChange={handleOnChange} id="email" name="email"></input>

    <button onClick={handleBuyOrder}>Finalizar compra</button>
    </form>
);
};

export default CartForm
