import axios from 'axios';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { baseUrl } from '../utils/constants';
import { CreateOrderResponseType, User } from '../types/User';
import { toast } from 'react-toastify';

type StrapiError = {
    response: {
        data?: string
        error: {
            status: number
            name: string
            message: string
            details: any
        }
    }
}

type UserAuthType = {
    name?: string
    username?: string
    email?: string
    identifier?: string
    password: string
}

const defaultState = {
    user: null,
    orders: [],
    loading: false
}

type AuthContextType = {
    user: User | null
    loading: boolean
    orders: Array<CreateOrderResponseType>
    order?: CreateOrderResponseType | null
    signIn?: (user: UserAuthType) => void;
    placeOrder?: (order: any, callBack: () => void) => void;
    fetchOrders?: () => void
    fetchOrder?: (url: string) => void
    updateUser?: (user: any) => void
    signOut?: () => void
    signUp?: (user: UserAuthType) => void
}

interface Props {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType>(defaultState);

export const AuthProvider: FC<Props> = ({children} : Props) => {
    const [user, setUser] = useState<User | any>();
    const [orders, setOrders] = useState<Array<CreateOrderResponseType>>([]);
    const [order, setOrder] = useState<CreateOrderResponseType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const placeOrder = (order: any, callBack: any) => {
        setLoading(true);
        axios.post(`${baseUrl}/orders`, {data: {...order, user_id: user.user.id}}, {
            headers: {
                Authorization: `Bearer ${user.jwt}`
            }
        })
            .then(function (response) {
                setOrders(prev => [...prev, response.data]);
                callBack();
                Router.push(`/orders/${response.data.data.id}`);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error.response.data)
                setLoading(false);
            });
    }

    const updateUser = (updateUser: any) => {
        setLoading(true);
        axios.put(`${baseUrl}/users/${user.user.id}`, {phone: updateUser.phone, email: updateUser.email, username: updateUser.username}, {
            headers: {
                Authorization: `Bearer ${user.jwt}`
            }
        })
            .then(function (response) {
                setUser({jwt: user.jwt, user: response.data})
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error.response.data)
                setLoading(false);
            });
    }

    const fetchOrders = () => {
        if(user?.jwt){
            axios.get(`${baseUrl}/orders?filters[user_id][$eq]=${user.user.id}`, {
                headers: {
                    Authorization: `Bearer ${user.jwt}`
                }
            }).then(res => {
                setOrders(res.data.data);
            }).catch(err => {
    
            });
        };
    }
    
    const fetchOrder = (url: string) => {
        if(!user?.jwt) return;
        axios.get(`${baseUrl}/orders/${url}`, {
            headers: {
                Authorization: `Bearer ${user.jwt}`
            }
        }).then(res => {
            setOrder(res.data.data);
        }).catch(err => {
            console.log(err)
        });
    }

    const signIn = (user: UserAuthType) => {
        if( loading ) return;
        setLoading(true);
        axios.post(`${baseUrl}/auth/local`, user)
            .then(function (response) {
                setUser(response.data);
                if(router.query.redirect) return Router.push(`/${router.query.redirect}`);
                Router.push('/');
                setLoading(false);
            })
            .catch(function (error) {
                toast.error('invalid credentials');
                setLoading(false);
            });
    }

    const signOut = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    const signUp = (user: UserAuthType) => {
        setLoading(true);
        axios.post(`${baseUrl}/auth/local/register`, user)
            .then(function (response) {
                setUser(response.data)
                Router.push('/')
                setLoading(false);
            })
            .catch(function (error) {
                if (error?.response?.data?.error?.message) {
                    toast.error(error?.response?.data?.error?.message);
                } else {
                    toast.error('Something wrong happpned');
                }
                setLoading(false);
            });
    }

    const authUser = (jwt: string) => {
        axios.get(`${baseUrl}/users/me`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }).then(res => {
            setUser({jwt: jwt, user: res.data})
        }).catch(err => {
            signOut();
            if (isRouteProtected()) {
                Router.push(`/signin?redirect=${router.pathname.replace('/', '')}`);
            }
        })
    }

    const isRouteProtected = () => {
        const protectedRoutes = ['/profile', "/checkout"]
        if (protectedRoutes.includes(router.pathname)) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        if(user){
            localStorage.setItem('user', JSON.stringify(user));
            if(router.pathname === '/signin' || router.pathname === '/signup') {
                if (router.query.redirect)  Router.push(`/${router.query.redirect}`);
                else Router.push(`/`);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        if(!user){
            const savedUserString = localStorage.getItem('user');
            //@ts-ignore
            const savedUser = JSON.parse(savedUserString)
            if(savedUser){
                if(savedUser){
                    authUser(savedUser.jwt);
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        if(isRouteProtected() && !user){
            Router.push(`/signin?redirect=${router.pathname.replace('/', '')}`);
        }else {
            if(user) {
                if(router.pathname === '/signin' || router.pathname === '/signup') {
                    if (router.query.redirect)  Router.push(`/${router.query.redirect}`);
                    else Router.push(`/`);
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.pathname, router.query.redirect, user]);

    return (
        <AuthContext.Provider value={{user, loading, placeOrder, updateUser, order, orders, fetchOrders, fetchOrder, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}