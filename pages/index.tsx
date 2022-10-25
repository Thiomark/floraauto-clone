import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { carImages, storeInfo } from '../utils/constants';
import { ourServices } from '../utils/data';

const HeroSection: NextPage = () => {
    return (
        <div className='flex-1 px-10 container mx-auto flex text-white space-y-8 flex-col font-bold justify-center uppercase'>
            <h1>BEST <span className='text-red-500 text-lg lg:text-xl'>Car</span> REPAIR SERVICES <br/> DONE AT SUBESH AUTO SERVICES</h1>
            <p className='text-4xl lg:text-5xl'>We are qualified & <span className='text-red-500 block'>Professional</span></p>
            <button className='px-8 w-fit py-4 bg-red-600 text-white'>Get started</button>
        </div>
    )
}

const Home: NextPage = () => {
    const whoWeAre = [
        {
            title: 'BEST TECHNICIANS',
            icon: 'TechnicianIcon.png'
        },
        {
            title: 'QUALITY SERVICES',
            icon: 'ServicesIcon.png'
        },
        {
            title: 'AFFORDABLE PRICES',
            icon: 'BestPricesIcon.png'
        }
    ];

    return (
        <Layout backgroundImage={carImages[0]} title={storeInfo.name} imageText={<HeroSection />} imageHeight='h-[80vh]'>
            <main>
                <section className='container mx-auto py-10 px-10 lg:px-4 lg:py-24'>
                    <h1 className='uppercase text-red-600 text-2xl font-bold'>Who we are</h1>
                    <p className='lg:py-6 py-2'>At SUBESH AUTO SERVICE, our main goal is to establish trust with our Customers. It is important in the automotive industry because of the complexity of car care. Our goal is to not only assist our Customers, but also educate them by answering their questions. At Subesh Auto Service, we provide fast and efficient as well as reliable services and repairs to the Customers vehicle.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 lg:gap-10'>
                        {whoWeAre.map((item, index) => (<div key={index} className={`flex flex-col ${index === 2 && 'md:col-span-2 lg:col-span-1 mt-4 lg:mt-0'} items-center justify-center p-10 ${index % 2 === 0 && 'border-2 border-brand text-brand'} ${index % 2 !== 0 && 'bg-red-600 text-white'}`}>
                            <Image src={`/images/${item.icon}`} color="white " alt='Icon' className={index !== 1 ? 'icon-red' : ''} height={50} width={50}/>
                            <h1 className='uppercase font-bold'>{item.title}</h1>
                        </div>))}
                    </div>
                </section>
                <section className='text-white relative py-10 px-4 bg-no-repeat bg-cover' style={{boxShadow: 'inset 0 0 0 100vw rgba(0,0,0, .8)', backgroundImage: `url(${carImages[1]})`}}>
                    <div className='container mx-auto'>
                        <div className='py-10 space-y-6'>
                            <h1 className='text-center font-bold uppercase text-red-600 -mt-12 text-2xl z-30 w-full'>Our Services</h1>
                            <h1 className='text-center font-bold uppercase text-4xl z-30 w-full bottom-0'>GREAT CAR SERVICES BY SUBESH AUTO SERVICES</h1>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-4 lg:grid-cols-3 gap-16'>
                            {ourServices.map((item, index) => (
                                <div key={index} className='grid grid-cols-[auto_auto] z-20'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi h-10 mr-6 w-10 bi-gear-wide-connected" viewBox="0 0 16 16">
                                        <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                                    </svg>
                                    <div>
                                        <h1 className='font-bold text-lg uppercase'>{item.title}</h1>
                                        <p className='w-full mt-6'>{item.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mx-auto py-20'>
                        <div className='flex-1 px-10 lg:40'>
                            <h1 className='text-red-600 uppercase font-bold'>Why Choose Us?</h1>
                            <p className='text-3xl uppercase font-bold mt-4 mb-4'>AT SUBESH AUTO SERVICE We are qualified & <span className='block'>Professional</span></p>
                            <p>At SUBESH AUTO SERVICE we are committed to providing quality car service and auto repairs. Our car repair workshop in Hamberg Roodepoort carries out maintenance, major car service and car repairs.</p>
                        </div>
                    </div>
                </section>
                <section className='text-white relative py-28 bg-fixed bg-no-repeat bg-cover' style={{boxShadow: 'inset 0 0 0 100vw rgba(0,0,0, .7)', backgroundImage: `url(${carImages[3]})`}}>
                    <div className='text-center space-y-10 container px-10 lg:40 mx-auto'>
                        <h1 style={{zIndex: 999}} className='font-bold text-5xl'>PREMIUM CAR SERVICE MATCHED WITH <br />GREAT WORKMANSHIP</h1>
                        <p className='text-lg'>We offer a warranty on our administered workmanship on all vehicles so that our clients can be at ease, trusting that we deliver our best, so that they can be their best!</p>
                        <div>
                            <Link href='/contact'><a className='px-8 py-4 bg-red-600 text-white'>Get started</a></Link>
                        </div>
                    </div>
                </section>
                <section className='pt-10 lg:py-20'>
                    <h1 className='text-center text-red-600 font-bold text-2xl'>OUR PROJECTS</h1>
                    <p className='text-center text-4xl font-bold mb-6 lg:mb-14 mt-2 lg:mt-6'>FEATURED PROJECTS</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-rows-[20em_20em]'>
                        {[...Array(6)].map((item, index) => (<div key={index} style={{backgroundImage: `url(${carImages[index]})`}} className='w-full bg-cover bg-no-repeat h-full'/>))}
                    </div>
                </section>
                <section className='text-white relative py-28 bg-fixed bg-no-repeat bg-cover' style={{boxShadow: 'inset 0 0 0 100vw rgba(0,0,0, .8)', backgroundImage: `url(${carImages[1]})`}}>
                    <div className='space-y-6 container px-10 lg:px-40 mx-auto z-10'>
                        <h1 className='font-bold text-5xl'>Make appointment with <span className='block'>us now!</span></h1>
                        <div>
                            <p className='text-lg'>{storeInfo.fullLocation}</p>
                            <p className='text-lg'>{storeInfo.phone}</p>
                        </div>
                        <h1 className='font-bold text-5xl'>Office</h1>
                        <Link href='/contact'><a className='px-8 ml-20 block mt-10 w-fit py-4 bg-red-600 text-white font-bold uppercase'>Click Here</a></Link>
                    </div>
                </section>
                <br />
            </main>
        </Layout>
    )
}

export default Home
