import { CarPartType } from "./Parts";

export interface ShippingType {
    name: string,
    price: number
}

export interface CartContextInterface {
    amount: number, 
    total: number,
    count: number, 
    items: Array<CartType>, 
    addCartPartToCart?: (carPart: CartType) => void
    shippingPrice: Array<ShippingPrice>
}

export interface CartType extends CarPartType {
    quantity: number
    total: number
}