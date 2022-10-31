import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext } from 'react';
import Layout from '../components/Layout';
import { CarPartType } from '../types/Parts';
import { PartsContext } from '../providers/PartsProvider';
import { carImages } from '../utils/constants';
import { currencyFormatter } from '../utils/helperFunctions';

const CartItem: FC<CarPartType> = ({attributes}) => {
    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20 h-24 relative">
                    <Image alt='' layout='fill' objectFit='cover' src={attributes.image.data[0]?.attributes.url} className='absolute'/>
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{attributes.title}</span>
                    <span className="text-red-500 text-xs">{attributes.brand}</span>
                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input className="mx-2 border text-center w-8" type="text" value="1" />

                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{currencyFormatter.format(attributes.price)}</span>
            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        </div>
    )
}

const Cart: NextPage = () => {
    const {cart} = useContext(PartsContext);

    return (
        <Layout backgroundImage={carImages[1]} imageHeight='lg:h-[60vh] h-[40vh]'>
            <div className="container mx-auto mt-10 flex my-10">
                <div className="w-3/4 px-10 py-10 flex flex-col">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{cart.count} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="cart-table-header">Quantity</h3>
                        <h3 className="cart-table-header">Price</h3>
                        <h3 className="cart-table-header">Total</h3>
                    </div>
                    <div className='flex-1'>
                        {cart.items.map((itm, index) => <CartItem attributes={itm.attributes} id={itm.id} key={index} />)}
                    </div>
                    <Link href={'/parts'}>
                        <a className="flex font-semibold text-brand text-sm mt-10">
                            <svg className="fill-current mr-2 text-brand w-4" viewBox="0 0 448 512">
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </a>
                    </Link>
                </div>

                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {cart.count}</span>
                        <span className="font-semibold text-sm">{currencyFormatter.format(cart.amount)}</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full border text-sm">
                            {cart.shippingPrice.map((option, index) => <option key={index}>{option.name} - {currencyFormatter.format(option.price)}</option>)}
                        </select>
                    </div>
                    <div className="py-4">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 border text-sm w-full" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>{currencyFormatter.format(cart.amount)}</span>
                        </div>
                        <button className="bg-gray-500 font-semibold hover:bg-gray-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart





