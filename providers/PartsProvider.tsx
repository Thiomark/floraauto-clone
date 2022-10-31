import { createContext, useState, useReducer } from 'react';
import { baseUrl } from '../utils/constants';
import type { ReactNode } from 'react';
import qs from 'qs';
import { CarPartType, CartAction, CartState, PartsContextInterface, StrapiResponseType } from '../types/Parts';

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
        case 'add':
            return {
                shippingPrice: state.shippingPrice,
                count: state.items.length, 
                amount: state.amount + action.payload.attributes.price,
                items: [...state.items.filter(el => el.id !== action.payload.id), action.payload]
            };
        case 'remove':
            return {
                shippingPrice: state.shippingPrice,
                count: state.items.length, 
                amount: state.amount - action.payload.attributes.price,
                items: state.items.filter(el => el.id !== action.payload.id)
            };
        default:
            throw state;
    }
}

export const PartsProvider = ({children} : {children : ReactNode}) => {
    const [carParts, setCarParts] = useState<Array<CarPartType>>([]);
    const [cart, cartDispatch ] = useReducer(CartReducer, defaultCartState);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [partsCount, setPartsCount] = useState<Number>(0);

    const fetchCarParts = async (start = 0) => {
        try {
            setIsLoading(true);
            const res = await fetch(`${baseUrl}/products?populate=*&sort[0]=createdAt:desc&pagination[start]=${start}&pagination[limit]=12`);
            const {data, meta}: StrapiResponseType = await res.json();
            setCarParts(data);
            setPartsCount(meta.pagination.total);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    const addItemToCart = (item: CarPartType) => {
        cartDispatch({payload: item, type: 'add'});
    }

    const removeItemToCart = (item: CarPartType) => {
        cartDispatch({payload: item, type: 'remove'});
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
        <PartsContext.Provider value={{fetchCarParts, cart, carParts, removeItemToCart, addItemToCart, search, isLoading, partsCount}}>
            {children}
        </PartsContext.Provider>
    )
}