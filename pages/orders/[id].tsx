import { format } from 'date-fns';
import { Router, useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout';
import ProfileHeaderComponent from '../../components/ProfileHeaderComponent';
import { AuthContext } from '../../providers/AuthProvider';
import { currencyFormatter } from '../../utils/helperFunctions';

const Order = () => {
    const {order, fetchOrder, user} = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        const {id} = router.query
        fetchOrder?.(id + '');
    }, [])
    

    return (
        <Layout imageHeight='' headerMinimal>
            <main className='mx-auto container px-10 py-10 space-y-4'>
                <ProfileHeaderComponent title='Order'/>
                <div className='bg-gray-100 p-4 rounded'>
                    {order && (
                        <div>
                            <h1 className='text-md font-bold'>Order #{order.id}</h1>
                            <div className='text-xs space-x-3 flex items-center'>
                                <h1 className='uppercase text-gray-500'>ordered: {format(new Date(order.attributes.createdAt || ''), 'PP')}</h1>
                                <h1 className='uppercase text-gray-500'>Paid: {format(new Date(order.attributes.createdAt || ''), 'PP')}</h1>
                            </div>
                            <div className='grid gap-4 divide-y grid-rows-[auto_auto_auto_auto]'>
                                {order.attributes.shippedAt ? <h1 className='font-bold text-md text-gray-800 mt-4 boder-b'>Delivered {format(new Date(order.attributes.shippedAt || ''), 'PP')}</h1> : <h1 className='font-bold text-md text-gray-800 mt-4 boder-b'>Not Delivered</h1>}
                                <div>
                                    <h1 className='text-gray-400 text-sm uppercase'>Shipping Address</h1>
                                    <p className='text-sm capitalize'>{order.attributes.name}</p>
                                    <p className='text-sm'>{order.attributes.streetAddress}</p>
                                    <p className='text-sm capitalize'>{order.attributes.suburb}</p>
                                    <p className='text-sm capitalize'>{order.attributes.city}</p>
                                    <p className='text-sm capitalize'>{order.attributes.postcode}</p>
                                </div>
                                <div>
                                    <h1 className='text-gray-400 text-sm uppercase'>ORDER SUMMARY</h1>
                                    <p className='text-sm'>{order.attributes.OrderedItems?.count} items</p>
                                    <p className='text-sm font-semibold'>Delivery {currencyFormatter.format(order.attributes.OrderedItems?.shippingPrice[0]?.price || 0)}</p>
                                    <p className='text-sm font-semibold'>Total Order {currencyFormatter.format(order.attributes.OrderedItems?.amount || 0)}</p>
                                </div>
                                <div>
                                    <h1 className='text-gray-400 text-sm uppercase'>PAYMENT METHOD</h1>
                                    <p className='text-sm'>{order.attributes.paymentMethod}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    )
}

export default Order
