import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import ProfileHeaderComponent from '../../components/ProfileHeaderComponent';
import { AuthContext } from '../../providers/AuthProvider'

const Orders = () => {
    const {orders, fetchOrders} = useContext(AuthContext);

    useEffect(() => {
        fetchOrders?.();
    }, []);
    
    return (
        <Layout imageHeight='' headerMinimal>
            <main className='mx-auto container px-4 lg:px-10 lg:py-10'>
                <ProfileHeaderComponent title='Orders' />
                <div className='space-y-2 py-6'>
                    {orders.map((order, index) => {
                        return <Link href={'/orders/' + order.id} key={index}>
                        <div className='bg-gray-50 p-6 text-sm cursor-pointer rounded'>
                            <h1 className='text-md font-bold'>Order #{order.id}</h1>
                            <div className='text-xs space-x-3 flex items-center'>
                                <h1 className='uppercase text-gray-500'>ordered: {order.attributes?.createdAt && format(new Date(order.attributes?.createdAt || ''), 'PP')}</h1>
                                <h1 className='uppercase text-gray-500'>Paid: {order.attributes?.createdAt && format(new Date(order.attributes?.createdAt || ''), 'PP')}</h1>
                                {order.attributes.shippedAt ? <h1 className='font-bold text-gray-800'>Delivered {format(new Date(order.attributes.shippedAt || ''), 'PP')}</h1> : <h1 className='font-bold text-gray-800'>Not Delivered</h1>}
                            </div>
                            <div className='flex cursor-pointer'>
                                {order.attributes.OrderedItems?.items.map((ele, index) => (
                                    <div key={index} className="w-10 h10 relative">
                                        {ele.attributes?.image?.data[0]?.attributes?.url && <Image alt='' layout='fill' objectFit='cover' src={ele.attributes?.image?.data[0]?.attributes?.url} className='absolute'/>}
                                    </div>
                                ))}
                            </div>
                        </div></Link>
                    })}
                </div>
            </main>
        </Layout>
    )
}

export default Orders