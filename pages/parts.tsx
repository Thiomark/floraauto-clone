import { NextPage } from 'next';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import CarPartComponent, { CarPartSkeleton } from '../components/CarPartComponent';
import Layout from '../components/Layout';
import PaginationComponent from '../components/PaginationComponent';
import { PartsContext } from '../providers/PartsProvider';
import { carImages } from '../utils/constants';

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
        <Layout backgroundImage={carImages[1]} imageHeight='h-[40vh]'>
            <main className='container mx-auto min-h-[90vh] px-4 py-6 grid md:gap-6 md:grid-cols-[1fr_300px]'>
                <div className='lg:space-y-6 space-y-4'>
                    <div>
                        <div className='flex md:max-w-lg'>
                            <div className='w-full flex items-center relative'>
                                <input onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchKeyword(event.target.value)} type="text" className='px-4 w-full py-2 border' placeholder='Search for parts...' />
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
                            [...Array(9)].map((item, index) => <CarPartSkeleton key={index}/>) :
                            carParts?.map((item, index) => <CarPartComponent key={index} attributes={item.attributes} id={item.id} quantity={0} total={0} />)
                        }
                    </div>
                    <PaginationComponent />
                </div>
                <div className='hidden md:block'>
                    <div className='bg-brand p-4 text-center text-gray-100'>
                        <h1>Categores</h1>
                    </div>
                    <ul className='text-sm border'>
                        {categoies.map(item => (<li className='p-4 hover:bg-gray-100 text-center' key={item}>{item}</li>))}
                    </ul>
                </div>
            </main>
        </Layout>
    )
}

export default Parts;




