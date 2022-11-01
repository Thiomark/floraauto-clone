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

export interface CartType extends CarPartType {
    quantity: number
    total: number
}

export enum CartActionKind {
    add = 'add',
    remove = 'remove',
}

// An interface for our actions
export type CartAction = 
    | { type: 'add', payload: CartType}
    | { type: 'remove', payload: CartType}

export type CartState = {
    amount: number
    count: number
    items: Array<CartType>
    shippingPrice: Array<{
        name: string,
        price: number
    }>
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

export interface PartsContextInterface {
    carParts: Array<CarPartType>
    partsCount: Number
    isLoading: boolean
    cart: CartState
    removeItemFromCart?: (item: CartType) => void
    addItemToCart?: (item: CartType) => void
    search?: (searchKeyword : string) => void
    fetchCarParts?: (start?: number, query?: string | undefined) => void
}