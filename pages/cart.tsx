import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FC, useContext } from 'react';
import Layout from '../components/Layout';
import { CartType } from '../types/Parts';
import { PartsContext } from '../providers/PartsProvider';
import { carImages } from '../utils/constants';
import { currencyFormatter } from '../utils/helperFunctions';

interface Item {
    item: CartType
}

const CartItem: FC<Item> = ({item}) => {
    const {removeItemFromCart, addItemToCart} = useContext(PartsContext);
    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20 h-24 relative">
                    <Image alt='' layout='fill' objectFit='cover' src={item.attributes.image.data[0]?.attributes.url} className='absolute'/>
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.attributes.title}</span>
                    <span className="text-red-500 text-xs">{item.attributes.brand}</span>
                    <button onClick={() => removeItemFromCart?.(item)} className="font-semibold w-fit hover:text-red-500 text-gray-500 text-xs">Remove</button>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <input className="mx-2 w-20 py-2 border text-center" onChange={(event: ChangeEvent<HTMLInputElement>) => {}} type="number" defaultValue={item.quantity} />
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{currencyFormatter.format(item.attributes.price)}</span>
            <span className="text-center w-1/5 font-semibold text-sm">{currencyFormatter.format(item.total)}</span>
        </div>
    )
}

const Cart: NextPage = () => {
    const {cart} = useContext(PartsContext);

    if(cart.items.length === 0) {
        return (<Layout backgroundImage={carImages[1]} imageHeight='h-[40vh]'>
                <div className='min-h-[40vh] flex flex-col items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi h-20 w-20 bi-cart-x" viewBox="0 0 16 16">
                        <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <h1 className='my-10'>Cart Empty</h1>
                    <Link href='/parts'><a className='py-3 px-10 bg-brand text-white'>Shop Now</a></Link>
                </div>
            </Layout>)
    }

    return (
        <Layout backgroundImage={carImages[1]} imageHeight='h-[40vh]'>
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
                        {cart.items.map((itm, index) => <CartItem item={itm} key={index} />)}
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
                            <span>{currencyFormatter.format(cart.amount + 120)}</span>
                        </div>
                        <button className="bg-gray-500 font-semibold hover:bg-gray-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart





