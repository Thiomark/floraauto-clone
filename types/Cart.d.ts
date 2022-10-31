import { CarPartType } from "./Parts";

export interface CartContextInterface {
    
}

export interface CartType extends CarPartType {
    quantity: number
    total: number
}