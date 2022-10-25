import { NextPage } from 'next';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Layout from '../components/Layout';
import { carImages } from '../utils/constants';

const Parts: NextPage = () => {
    const [isSortByMenuOpen, setIsSortByMenuOpen] = useState(false);
    const categoies = ['AIR FILTER', 'TENSIONERS', 'WATER PUMPS', 'CV PARTS', 'AIR FLOW METERS', 'BODY PARTS AND MIRRORS' ,'ELECTRICAL PARTS'];
    const ref = useRef();

    return (
        <Layout backgroundImage={carImages[1]} imageHeight='lg:h-[60vh] h-[40vh]'>
            <main className='container mx-auto px-4 py-6 grid md:gap-6 md:grid-cols-[230px_1fr] lg:grid-cols-[300px_1fr]'>
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
                            <input type="text" className='px-4 w-full py-2 border' placeholder='Search for parts...' />
                            <button className='bg-gray-300 px-4 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi w-5 h-5 bi-search-heart" viewBox="0 0 16 16">
                                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                                    <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 xl:grid-cols-3 gap-4'>
                        {[...Array(12)].map((item, index) => (<div className='border w-full' key={index}>
                            <div className='w-full h-60 relative'>
                                <Image alt='' layout='fill' objectFit='cover' src='https://africaboyzonline.com/gallery/00/02/01/00020102_00043354.jpg' className='absolute'/>
                            </div>
                            <div className='text-center'>
                                <h1>lorem</h1>
                                <p>Lorem ipsum dolor sit</p>
                                <h1 className='text-brand'>R 2000</h1>
                            </div>
                        </div>))}
                    </div>
                    <div className="flex justify-center">
                        <a href="#" className="flex items-center border px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed">
                            previous
                        </a>

                        <a href="#" className="items-center hidden border px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-brand hover:text-white">
                            1
                        </a>

                        <a href="#" className="items-center hidden border px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-brand hover:text-white">
                            2
                        </a>

                        <a href="#" className="items-center hidden border px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-brand hover:text-white">
                            3
                        </a>

                        <a href="#" className="flex items-center px-4 border py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-brand hover:text-white">
                            Next
                        </a>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Parts;




