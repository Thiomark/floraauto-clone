import { createContext, useState } from 'react';
import { baseUrl } from '../utils/constants';
import type { ReactNode } from 'react';

type Parts = {
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
    carParts: Array<Parts>,
    fetchCarParts?: () => void;
}

export const PartsContext = createContext<PartsContextInterface>({
    carParts: []
});

export const PartsProvider = ({children} : {children : ReactNode}) => {
    const [carParts, setCarParts] = useState<Array<Parts>>([]);

    const fetchCarParts = () => {
        fetch(`${baseUrl}/products?populate=*&pagination[limit]=12`)
            .then((response) => response.json())
            .then(({data}) => {
                setCarParts(data);
            });
    };

    return (
        <PartsContext.Provider value={{fetchCarParts, carParts}}>
            {children}
        </PartsContext.Provider>
    )
}