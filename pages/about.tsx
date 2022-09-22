import { NextPage } from 'next';
import Layout from '../components/Layout';
import { carImages } from '../utils/constants';

const Services: NextPage = () => {

    const ourInfo = ['Experienced Technicians', 'Customer Satisfaction', 'Quality Services']
 
    return (
        <Layout backgroundImage={carImages[7]} imageHeight='h-[60vh]'>
            <section className='mx-auto container py-10'>
                <div className='grid grid-cols-[35%_1fr] gap-10'>
                    <div className='flex flex-col justify-center'>
                        <p className='text-4xl font-bold'>WELCOME TO FLORA AUTO CLINIC. BEST CAR REPAIRS</p>
                        <p className='text-lg mt-6 font-extrabold text-brand'>WE BELIEVE AT FLORA AUTO, TODAY’S CAR GUYS NEED TO EVOLVE INTO TOMORROW’S MOBILITY LEADERS.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-10'>
                        <img className='w-full h-[30em] bg-center bg-cover' src={carImages[7]} alt="" srcSet="" />
                        <img className='w-full h-[30em] bg-center bg-cover' src={carImages[3]} alt="" srcSet="" />
                    </div>
                </div>
            </section>
            <section className='bg-fixed bg-no-repeat bg-cover' style={{boxShadow: 'inset 0 0 0 100vw rgba(0,0,0, .7)', backgroundImage: `url(${carImages[3]})`}}>
                <div className='mx-auto container flex items-center justify-evenly py-20'>
                    {[...Array(3)].map((item, index) => {
                        return (
                            <div key={index} className='flex items-center justify-center flex-col'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi h-10 text-brand w-10 bi-gear-wide-connected`} viewBox="0 0 16 16">
                                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                                </svg>
                                <h1 className='uppercase text-3xl py-4 font-extrabold text-white'>0</h1>
                                <p className='text-white font-bold'>Lorem, ipsum dolor</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className='container mx-auto grid grid-cols-2 gap-10 px-10 py-20'>
                <div>
                    <h2 className='text-brand uppercase text-lg font-extrabold'>WHY CHOOSE US</h2>
                    <h1 className='uppercase font-bold text-4xl py-4'>WE ARE QUALIFIED <span className='block'>& PROFESSIONAL</span></h1>
                    <div className=' space-y-10'>
                        {ourInfo.map((item, index) => {
                            return (
                                <div key={index} className='flex'>
                                    <h1>0%</h1>
                                    <div className='flex-1 ml-2'>
                                        <h1 className='mb-1 font-bold'>{item}</h1>
                                        <div className='h-[15px] bg-gray-200 w-full' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <img src={carImages[4]} alt="" className='w-full' />
            </section>
        </Layout>
    )
}

export default Services