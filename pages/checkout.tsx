import { NextPage } from 'next'
import Router from 'next/router';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { AuthContext } from '../providers/AuthProvider';
import { PartsContext } from '../providers/PartsProvider';
import { CreateOrderType } from '../types/User';
// import { createOrder } from '../utils/data';
import { currencyFormatter } from '../utils/helperFunctions';

const billingFromStructure = [
    {name: 'name', lable: 'Name', length: 'col-span-1', value: ''},
    {name: 'streetAddress', lable: 'House Number And Street Name', length: 'col-span-1', value: ''},
    {name: 'suburb', lable: 'Suburb', length: 'col-span-1', value: ''},
    {name: 'city', lable: 'Town/City', length: 'col-span-1', value: ''},
    {name: 'province', lable: 'Province', length: 'col-span-1', value: ''},
    {name: 'postcode', lable: 'Post Code', length: 'col-span-1', value: ''},
    {name: 'phone', lable: 'Phone', length: 'col-span-1', value: ''},
    {name: 'email', lable: 'Email Address', length: 'col-span-1', value: ''},
    {name: 'message', lable: 'Message', length: 'col-span-2', type: 'text-area', value: ''}
]

const Checkout: NextPage = () => {
    const { user, placeOrder } = useContext(AuthContext);
    const { cart, clearCart } = useContext(PartsContext);
    const [order, setOrder] = useState<CreateOrderType>(() => ({
        city: '', email: '', message: '', postcode: '', name: '', paymentMethod: '', phone: '', province: '', streetAddress: '', user_id: ''
    }));

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        placeOrder?.({...order, 
            OrderedItems: cart, 
            totalAmount: cart.amount + cart.shippingPrice[0]?.price, 
            shippingAmount: cart.shippingPrice[0]?.price}, () => {
                clearCart?.();
            })
    }
    
    useEffect(() => {
        if (!user) {
            Router.push('/signin?redirect=checkout');
        } else {
            setOrder((prev: any) => ({
                ...prev, name: user?.user.username, phone: user.user.phone, email: user.user.email
            }));
        }
    }, [user]);
    
    return (
        <Layout imageHeight='' headerMinimal>
            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => submit(event)} className='lg:px-10 px-4 container mx-auto mb-4 lg:mb-20'>
                <div className='lg:apt-form max-w-5xl mx-auto space-y-4 lg:space-y-0'> {/*  */}
                    <h1 className='font-bold text-xl col-span-2'>Billing Details</h1>
                    {billingFromStructure.map(ele => {
                        if(ele.type === 'text-area'){
                            return <textarea onChange={(e : ChangeEvent<HTMLTextAreaElement>) => setOrder((prev: any) => ({
                                ...prev, [ele.name]: e.target.value 
                                //@ts-ignore
                            }))} value={order[ele.name]} key={ele.name} rows={8} placeholder={ele.lable} className={ele.length + ' form-input w-full'}></textarea>
                        }else {
                            return (
                                //@ts-ignore
                                <input value={order[ele.name]} onChange={(e : ChangeEvent<HTMLInputElement>) => setOrder((prev: any) => ({
                                    ...prev, [ele.name]: e.target.value 
                                }))} required key={ele.name} placeholder={ele.lable} className={ele.length + ' form-input w-full'} />
                            )
                        }
                    })}
                </div>
                <div className='max-w-5xl mx-auto p-6 bg-gray-100 mt-4 lg:mt-0 rounded'>
                    <h1 className='font-bold text-lg border-b my-4 py-2'>Your Order</h1>
                    <h1 className='font-bold'>Items</h1>
                    <div className='space-y-2 py-6'>
                        {cart.items.map((item, index) => {
                            return (
                                <div key={index} className='text-xs'>
                                    <p className='font-bold'>{item.attributes.title}</p>
                                    <p className='text-gray-600'>{currencyFormatter.format(item.attributes.price)}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='divide-y'>
                        <div className='flex text-sm py-4 items-center justify-between'>
                            <h1 className='font-bold text-md'>Subtotal</h1>
                            <p className='text-gray-600'>{currencyFormatter.format(cart.amount)}</p>
                        </div>
                        <div className='flex text-sm py-4 items-center justify-between'>
                            <h1 className='font-bold text-md'>Shipping</h1>
                            <p className='text-gray-600'>{currencyFormatter.format(cart.amount)}</p>
                        </div>
                        <div className='flex py-4 items-center justify-between'>
                            <h1 className='font-bold text-xl'>Total</h1>
                            <p className='text-gray-600 text-lg font-bold'>{currencyFormatter.format(cart.amount)}</p>
                        </div>
                    </div>
                    <div className='text-sm w-fit grid'>
                        <div className='flex items-center space-x-3'>
                            <input required onChange={(e : ChangeEvent<HTMLInputElement>) => setOrder((prev: any) => ({
                                    ...prev, paymentMethod: e.target.value
                                }))} type="radio" value="CreditOrDebit" name="paymentMethod" /> 
                            <span>Credit Card or Debit Card</span>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <input required onChange={(e : ChangeEvent<HTMLInputElement>) => setOrder((prev: any) => ({
                                    ...prev, paymentMethod: e.target.value
                                }))} type="radio" value="Paypal" name="paymentMethod" /> 
                            <span>Pay Pal</span>
                        </div>
                    </div>
                    <button className='bg-black py-3 mt-4 text-white text-sm w-full max-w-xs'>Place Order</button>
                </div>
            </form>
        </Layout>
    )
}

export default Checkout;