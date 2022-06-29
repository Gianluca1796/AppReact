import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        console.log(cart)
    },[cart])

    const addToCart = (item, cant) => {
        if(isInCart(item.id)){
            let index = cart.findIndex(i => i.id === item.id);
            let product = cart[index];
            product.cant = product.cant + cant;

            const newCart = [...cart];
            newCart.splice(index,1, product)

            setCart([...newCart])
        }else{
            setCart([...cart, {...item,cant}]);
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    }

    const clearCart = () => {
        setCart([])
    }

    return (
    <CartContext.Provider value={{cart, addToCart, clearCart}}>
        {children}
    </CartContext.Provider>
    )
};

export default CartProvider;
