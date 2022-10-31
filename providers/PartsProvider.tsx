import { createContext, useState } from 'react';
import { baseUrl } from '../utils/constants';
import type { ReactNode } from 'react';
import qs from 'qs';

export type StrapiResponseType = {
    data: Array<CarPartType>
    meta: {
        pagination: {
            start: number,
            limit: number,
            total: number
        }
    }
}

export type CarPartType = {
    id: number,
    attributes: {
        title: string,
        description: string,
        brand?: string,
        price: number,
        time: string,
        image: {
            data: Array<{
                id: number,
                attributes : {
                    name: string,
                    url: string,
                    formats: {
                        small : {
                            url: string
                        },
                        medium : {
                            url: string
                        },
                        thumbnail : {
                            url: string
                        }
                    }
                }
            }>
        },
        category?: string
    }
}

interface PartsContextInterface {
    carParts: Array<CarPartType>
    partsCount: Number
    isLoading: boolean
    search?: (searchKeyword : string) => void
    fetchCarParts?: (start?: number, query?: string | undefined) => void
}

export const PartsContext = createContext<PartsContextInterface>({
    carParts: [],
    partsCount: 0,
    isLoading: true
});

export const PartsProvider = ({children} : {children : ReactNode}) => {
    const [carParts, setCarParts] = useState<Array<CarPartType>>([]);
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
        <PartsContext.Provider value={{fetchCarParts, carParts, search, isLoading, partsCount}}>
            {children}
        </PartsContext.Provider>
    )
}