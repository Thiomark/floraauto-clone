import axios from 'axios';
import React, { createContext, FC, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { baseUrl } from '../utils/constants';

const defaultState = {
    user: null,
    loading: false
}

export interface UserAuthType {
    name?: string
    username?: string
    email?: string
    identifier?: string
    password: string
}

export interface User {
    id: number
    username: string
    email: string,
    createdAt: string
}

type AuthContextType = {
    user: User | null
    signIn?: (user: UserAuthType) => void;
    loading: boolean
    signUp?: (user: UserAuthType) => void
}

interface Props {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType>(defaultState);

export const AuthProvider: FC<Props> = ({children} : Props) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const signIn = (user: UserAuthType) => {
        setLoading(true);
        axios.post(`${baseUrl}/auth/local`, user)
            .then(function (response) {
                setUser(response.data.user)
                Router.push('/')
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
    }

    const signUp = (user: UserAuthType) => {
        setLoading(true);
        axios.post(`${baseUrl}/auth/local/register`, user)
            .then(function (response) {
                setUser(response.data.user)
                Router.push('/')
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
    }

    return (
        <AuthContext.Provider value={{user, loading, signIn, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}