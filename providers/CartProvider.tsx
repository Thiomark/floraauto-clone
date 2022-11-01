import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import { CartContextInterface, CartType, ShippingType } from '../types/Cart';

const defaultShippingPrices: Array<ShippingType> = [{name: 'Standard shipping', price: 120}];

const defaultSate: CartContextInterface = {
    amount: 0, 
    total: 0,
    count: 0, 
    items: [],
    shippingPrice: defaultShippingPrices
};

export const CartContext = createContext<CartContextInterface>(defaultSate);

export const CartProvider = ({children} : {children : ReactNode}) => {
    const [amount, setAmount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [shippingPrice, setShippingPrice] = useState<Array<ShippingType>>(defaultShippingPrices);
    const [items, setItems] = useState<Array<CartType>>([]);

    const addCartPartToCart = (carPart: CartType) => {
        setAmount(amount + carPart.attributes.price);
        setTotal(shippingPrice[0].price + amount);
        setCount(items.length);
    };

    return (
        <CartContext.Provider value={{addCartPartToCart, amount, total, count, shippingPrice, items}}>
            {children}
        </CartContext.Provider>
    );
};