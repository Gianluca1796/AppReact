import React, { useState, useContext } from "react";
import { createBuyOrder } from "../../services/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import "./CartView.css";

const CartForm = () => {
    const { cart, clearCart, totalInCart } = useContext(CartContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
            [field]: value,
        });
    };

    const handleBuyOrder = (e) => {
        const dataOrder = {
            buyer,
            items: cart,
            total: totalInCart(),
        };
        createBuyOrder(dataOrder).then((orderDataCreated) => {
            clearCart();
            Swal.fire({
                icon: 'success',
                title: 'Gracias por tu compra! Revisa tu casilla de correos para continuar.',
                text: 'ID de su compra: ' + orderDataCreated.id,
            });
        });
    };
    return (
        <form onSubmit={handleSubmit(handleBuyOrder)}>
            <label htmlFor="name">Nombre</label>
            <input
                {...register("name", { required: true })}
                onChange={handleOnChange}
                aria-required
                type="text"
                id="name"
                name="name"
            />
            {errors.name?.type === "required" && (
                <span>Se requiere un nombre de contacto</span>
            )}

            <label htmlFor="phone">Teléfono</label>
            <input
                {...register("phone", { required: true })}
                type="number"
                onChange={handleOnChange}
                aria-required
                id="phone"
                name="phone"
            />
            {errors.phone?.type === "required" && (
                <span>
                    Se requiere un numero de contacto
                </span>
            )}

            <label htmlFor="email">E-mail</label>
            <input
                {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                onChange={handleOnChange}
                type="email"
                id="email"
                name="email"
            />

            {errors.email?.type === "required" && (
                <span>Se requiere un Email</span>
            )}
            {errors.email?.type === "pattern" && (
                <span>Email inválido</span>
            )}
            <button className="  btn btn-success" type="submit">Finalizar compra</button>

        </form>
    );
};
export default CartForm;

