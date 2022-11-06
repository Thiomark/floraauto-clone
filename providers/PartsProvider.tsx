import { createContext, useState, useReducer, useEffect } from 'react';
import { baseUrl } from '../utils/constants';
import type { ReactNode } from 'react';
import qs from 'qs';
import { CarPartType, CartAction, CartState, CartType, PartsContextInterface, StrapiResponseType } from '../types/Parts';
import { toast } from 'react-toastify';
import { cart } from '../utils/data';

// const defaultCartState: CartState = cart

const defaultCartState: CartState = {amount: 0, count: 0, items: [], shippingPrice: [
    {name: 'Standard shipping', price: 120}
]}

export const PartsContext = createContext<PartsContextInterface>({
    carParts: [],
    cart: defaultCartState,
    partsCount: 0,
    isLoading: true
});

const CartReducer = (state: CartState, action: CartAction) => {
    switch (action.type) {
        case 'seed': 
            return action.payload
        case 'erase':
            return defaultCartState
        case 'add':
            toast("Item added to cart")
            return {
                shippingPrice: state.shippingPrice,
                count: state.count + 1, 
                amount: state.amount + action.payload.attributes.price,
                items: [...state.items.filter(el => el.id !== action.payload.id), {
                    ...action.payload, 
                    total: action.payload.total * action.payload.quantity,
                    quantity: action.payload.quantity + 1
                }]
            };
        case 'remove':
            toast("Item removed from cart")
            return {
                shippingPrice: state.shippingPrice,
                count: state.count - 1, 
                amount: state.amount - action.payload.attributes.price,
                items: state.items.filter(el => el.id !== action.payload.id)
            };
        default:
            return state;
    }
}

export const PartsProvider = ({children} : {children : ReactNode}) => {
    const [carParts, setCarParts] = useState<Array<CarPartType>>([]);
    const [cart, cartDispatch ] = useReducer(CartReducer, defaultCartState);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [partsCount, setPartsCount] = useState<Number>(0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const fetchCarParts = async (start = 0) => {
        try {
            setIsLoading(true);
            //orders?filters[isActive][$eq]=true
            const res = await fetch(`${baseUrl}/products?filters[isActive][$eq]=true&populate=*&sort[0]=createdAt:desc&pagination[start]=${start}&pagination[limit]=12`);
            const {data, meta}: StrapiResponseType = await res.json();
            setCarParts(data);
            setPartsCount(meta.pagination.total);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    const addItemToCart = (item: CartType) => {
        cartDispatch({payload: item, type: 'add'});
    }

    const removeItemFromCart = (item: CartType) => {
        cartDispatch({payload: item, type: 'remove'});
    }

    const clearCart = () => {
        cartDispatch({type: 'erase'});
    }

    const search = async (searchKeyword : string) => {
        if(searchKeyword){
            const searchQuery = qs.stringify({
                filters: {
                    $or: [
                        {
                            title: {
                                $containsi: searchKeyword,
                            }
                        },
                        {
                            description: {
                                $containsi: searchKeyword,
                            }
                        },
                        {
                            brand: {
                                $containsi: searchKeyword,
                            }
                        },
                        {
                            category: {
                                $containsi: searchKeyword,
                            }
                        }
                    ],
                },
            });  
            const res = await fetch(`${baseUrl}/products?populate=*&` + searchQuery);
            const {data, meta}: StrapiResponseType = await res.json();
            setCarParts(data);
            setPartsCount(meta.pagination.total);
        }
    }

    return (
        <PartsContext.Provider value={{fetchCarParts, cart, carParts, removeItemFromCart, clearCart, addItemToCart, search, isLoading, partsCount}}>
            {children}
        </PartsContext.Provider>
    )
}