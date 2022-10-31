import Image from 'next/image';
import { FC, useContext } from 'react';
import { CarPartType } from '../types/Parts';
import { PartsContext } from '../providers/PartsProvider';
import { currencyFormatter } from '../utils/helperFunctions';

export const CarPartSkeleton: FC = () => {
    return (
        <div role="status" className="p-4 max-w-sm border border-gray-200 animate-pulse md:p-6">
            <div className="flex justify-center items-center mb-2 h-60 bg-gray-300 rounded-sm">
                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg>
            </div>
            <div className="h-4 bg-gray-200 w-full mb-1 rounded-sm"></div>
            <div className="h-3.5 bg-gray-200 mb-2.5 rounded-sm"></div>
        </div>
    )
}

const CarPartComponent: FC<CarPartType> = (item: CarPartType) => {
    const { addItemToCart } = useContext(PartsContext);
    
    return (
        <div className='border w-full relative'>
            <div className='w-full h-60 relative'>
                <Image alt='' layout='fill' objectFit='cover' src={item.attributes.image.data[0]?.attributes.url} className='absolute'/>
            </div>
            <div className='text-center p-4 bg-white z-10'>
                <h1 className='text-sm'>{item.attributes.title}</h1>
                <h1 className='text-brand font-bold text-sm'>{currencyFormatter.format(item.attributes.price)}</h1>
                <button onClick={() => addItemToCart?.(item)} className='bg-brand text-gray-100 font-semibold mt-2 w-full text-sm p-3 rounded'>Add To Card</button>
            </div>
        </div>
    )
}

export default CarPartComponent