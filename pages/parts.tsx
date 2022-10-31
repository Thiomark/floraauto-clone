import { NextPage } from 'next';
import Image from 'next/image';
import { FC, FormEvent, InputHTMLAttributes, useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PaginationComponent from '../components/PaginationComponent';
import { PartsContext } from '../providers/PartsProvider';
import { carImages } from '../utils/constants';


const PartSkeleton: FC = () => {
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

const Parts: NextPage = () => {
    const {fetchCarParts, carParts, isLoading, search} = useContext(PartsContext);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const categoies = ['AIR FILTER', 'TENSIONERS', 'WATER PUMPS', 'CV PARTS', 'AIR FLOW METERS', 'BODY PARTS AND MIRRORS' ,'ELECTRICAL PARTS'];
    
    useEffect(() => {
        if(carParts?.length === 0){
            fetchCarParts?.();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout backgroundImage={carImages[1]} imageHeight='lg:h-[60vh] h-[40vh]'>
            <main className='container mx-auto min-h-[90vh] px-4 py-6 grid md:gap-6 md:grid-cols-[230px_1fr] lg:grid-cols-[300px_1fr]'>
                <div className='hidden md:block'>
                    <div className='bg-brand p-4 text-center text-gray-100'>
                        <h1>Categores</h1>
                    </div>
                    <ul className='text-sm border'>
                        {categoies.map(item => (<li className='p-4 hover:bg-gray-100 text-center' key={item}>{item}</li>))}
                    </ul>
                </div>
                <div className='lg:space-y-6 space-y-4'>
                    <div>
                        <div className='flex md:max-w-lg'>
                            <div className='w-full flex items-center relative'>
                                <input onChange={(event: any) => setSearchKeyword(event.target.value)} type="text" className='px-4 w-full py-2 border' placeholder='Search for parts...' />
                                {searchKeyword && <span onClick={() => {
                                    fetchCarParts?.();
                                    setSearchKeyword('');
                                }} className='absolute right-2 text-gray-900 cursor-pointer'>&#10005;</span>}
                            </div>
                            <button onClick={() => search?.(searchKeyword)} className='bg-gray-300 px-4 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi w-5 h-5 bi-search-heart" viewBox="0 0 16 16">
                                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                                    <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 xl:grid-cols-3 gap-4'>
                        {isLoading ? 
                            [...Array(9)].map((item, index) => <PartSkeleton key={index}/>) :
                            carParts?.map((item, index) => (<div className='border w-full' key={index}>
                                <div className='w-full h-60 relative'>
                                    <Image alt='' layout='fill' objectFit='cover' src={item.attributes.image.data[0]?.attributes.url} className='absolute'/>
                                </div>
                                <div className='text-center p-4'>
                                    <h1 className='text-sm'>{item.attributes.title}</h1>
                                    <h1 className='text-brand font-bold text-sm'>R {item.attributes.price.toString()}</h1>
                                </div>
                            </div>))
                        }
                    </div>
                    <PaginationComponent />
                </div>
            </main>
        </Layout>
    )
}

export default Parts;




