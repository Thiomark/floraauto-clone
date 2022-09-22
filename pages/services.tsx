import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layout';
import { carImages } from '../utils/constants';

const FaqComponent: NextPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='shadow'>
            <div onClick={() => setIsOpen(prev => !prev)} className={`p-6 flex items-center justify-between ${isOpen && 'bg-brand text-white'}`}>
                <h1 className={`${isOpen ? 'text-white' : 'text-gray-500'}`}>Lorem ipsum dolor sit amet</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi h-5 w-5 ${!isOpen ? 'text-brand' : 'rotate-180 text-white'} bi-chevron-down`} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            {isOpen && (
                <div className='p-10'>
                    <p className='text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad asperiores non ipsa velit</p>
                </div>
            )}
        </div>
    )
}

const Services: NextPage = () => {

    const ourProcesses = ['MAKE AN APPOINTMENT', 'SELECT SERVICES', 'EXECUTION PROJECT'];
 
    return (
        <Layout backgroundImage={carImages[7]} imageHeight='h-[60vh]'>
            <section className='mx-auto container py-10'>
                <h1 className='text-brand font-bold text-lg uppercase text-center'>OUR SERVICES</h1>
                <p className='text-3xl font-bold text-center uppercase text-gray-900 py-3'>GREAT CAR SERVICES</p>
                <div className='grid gap-10 grid-cols-3 mt-10'>
                    {[...Array(6)].map((card, index) => {
                        return (
                            <div className={`${index % 2 !== 0 ? 'bg-brand text-white' : 'text-gray-900'} p-8 shadow-md text-center flex flex-col items-center justify-center`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi h-10 ${index % 2 === 0 && 'text-brand'} mb-6 w-10 bi-gear-wide-connected`} viewBox="0 0 16 16">
                                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                                </svg>
                                <h1 className={`uppercase py-2 font-bold`}>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nostrum iste. Ratione omnis sequi facere ut in quis, animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores quaerat veniam</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className='mx-auto container py-10'>
                <h1 className='text-brand font-bold text-lg uppercase text-center'>OUR PROCESS</h1>
                <p className='text-3xl font-bold text-center uppercase text-gray-900 py-3'>HOW WE WORK</p>
                <div className='flex items-center justify-evenly mt-10'>
                    {ourProcesses.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center'>
                                <div className='border border-brand w-[10em] flex items-center relative justify-center h-[10em]'>
                                    <div className='rounded-full h-14 w-14 flex items-center absolute -top-6 justify-center font-extrabold text-3xl bg-brand text-white'>{index + 1}</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi h-14 mt-10 text-brand mb-6 w-14 bi-gear-wide-connected`} viewBox="0 0 16 16">
                                        <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                                    </svg>
                                </div>
                                <p className='font-bold mt-4'>{item}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className='bg-fixed bg-no-repeat bg-cover' style={{boxShadow: 'inset 0 0 0 100vw rgba(0,0,0, .7)', backgroundImage: `url(${carImages[3]})`}}>
                <div className='container mx-auto py-20'>
                    <h1 className='text-brand font-bold text-2xl uppercase text-center'>TESTIMONIALS</h1>
                    <p className='text-4xl font-bold text-center uppercase text-gray-50 py-3'>WHAT CUSTOMER SAYS</p>
                    <div className='grid grid-cols-3 gap-10 mt-10'>
                        {[...Array(3)].map((item, index) => {
                            return (
                    <           div className="p-8 border bg-white">
                                    <p className="leading-loose text-gray-700">
                                        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                        tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                        aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                    </p>

                                    <div className="flex items-center mt-8 -mx-2">
                                        <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                        <div className="mx-2">
                                            <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='mx-auto container grid py-20 grid-cols-2 gap-10'>
                <div className=''>
                    <h1 className='text-brand font-bold text-lg uppercase'>FAQ</h1>
                    <p className='text-3xl font-bold uppercase text-gray-900 py-3'>GENERAL QUESTION</p>
                    <div className='grid gap-6'>
                        {[...Array(3)].map((card, index) => <FaqComponent key={index} />)}
                    </div>
                </div>
                <img src={carImages[3]} alt="" className='w-full' />
            </section>
        </Layout>
    )
}

export default Services