import { CartState } from "./Parts"

export interface UserAuthType {
    name?: string
    username?: string
    email?: string
    identifier?: string
    password: string
}

export interface User {
    jwt: string
    user: {
        id: number
        username: string
        email: string
        phone?: string
        createdAt: string
    }
}

export interface Address {
    streetAddres: string
    surburd?: string
    city: string
    province: string
    postcode: string
}

export interface CreateOrderResponseType {
    id: number
    attributes: CreateOrderType
}

export interface UpdateUserType {
    username?: string
    email?: string
    phone?: string
    password?: string
    oldPassword?: string
}

export interface CreateOrderType {
    city: string
    email: string
    message: string
    name: string
    paymentMethod: string
    phone: string
    postcode: string
    suburb?: string
    province: string
    streetAddress: string
    createdAt?: string
    shippedAt?: string
    user_id: string
    OrderedItems?: CartState
}

export interface OrderType {
    user: User
    address: Address
    order: CartState
}