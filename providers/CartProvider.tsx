import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import { CartContextInterface, CartType } from '../types/Cart';

export const CartContext = createContext<CartContextInterface>({});

export const CartProvider = ({children} : {children : ReactNode}) => {
    const [cart, setCart] = useState<Array<CartType>>([]);

    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}