import { NextPage } from 'next';
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layout';
import { carImages } from '../utils/constants';
import {ourServices, QnA, questionAndAnswer} from '../utils/data';

const FaqComponent: React.FC<{card: QnA}> = ({card: {answer, question}}) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='shadow'>
            <div onClick={() => setIsOpen(prev => !prev)} className={`p-6 flex items-center justify-between ${isOpen && 'bg-brand text-white'}`}>
                <h1 className={`${isOpen ? 'text-white' : 'text-gray-500'}`}>{question}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi h-5 w-5 ${!isOpen ? 'text-brand' : 'rotate-180 text-white'} bi-chevron-down`} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            {isOpen && (
                <div className='p-10'>
                    <p className='text-center text-gray-500'>{answer}</p>
                </div>
            )}
        </div>
    )
}

const Services: NextPage = () => {

    const ourProcesses = ['MAKE AN APPOINTMENT', 'SELECT SERVICES', 'EXECUTION PROJECT'];
    const ourProcessesImages = ['MakeAnAppointment.png', 'SelectServices.png', 'ExecutionProject.png'];
 
    return (
        <Layout backgroundImage={carImages[7]} imageHeight='h-[60vh]'>
            <section className='mx-auto container py-10'>
                <h1 className='text-brand font-bold text-lg uppercase text-center'>OUR SERVICES</h1>
                <p className='text-3xl font-bold text-center uppercase text-gray-900 py-3'>GREAT CAR SERVICES</p>
                {/* <div className='grid gap-10 grid-cols-3 mt-10'> */}
                <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-0 px-4'>
                    {ourServices.map((card, index) => {
                        return (
                            <div key={index} className={`${index % 2 !== 0 ? 'bg-brand text-white' : 'text-gray-900'} p-8 shadow-md text-center flex flex-col items-center justify-center`}>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi h-10 ${index % 2 === 0 && 'text-brand'} mb-6 w-10 bi-gear-wide-connected`} viewBox="0 0 16 16">
                                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                                </svg> */}
                                <Image src={`/images/${card.image}`} className={`${index % 2 === 0 && 'icon-red'}`} color="white" alt='Icon' height={50} width={50}/>
                                <h1 className={`uppercase py-2 font-bold`}>{card.title}</h1>
                                <p>{card.message}</p>
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
                                    <Image alt='Icon' className='icon-red' src={`/images/${ourProcessesImages[index]}`} height={50} width={50}/>
                                </div>
                                <p className='font-bold mt-4'>{item}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className='mx-auto container grid py-20 lg:grid-cols-2 px-10 lg:px-4 gap-10'>
                <div className=''>
                    <h1 className='text-brand font-bold text-lg uppercase'>FAQ</h1>
                    <p className='text-3xl font-bold uppercase text-gray-900 py-3'>GENERAL QUESTION</p>
                    <div className='grid gap-6'>
                        {questionAndAnswer.map((card, index) => <FaqComponent key={index} card={card}/>)}
                    </div>
                </div>
                <div className='w-full relative hidden lg:block'>
                    <Image src={carImages[3]} alt="" className='absolute' layout='fill' objectFit='contain'/>
                </div>
            </section>
        </Layout>
    )
}

export default Services