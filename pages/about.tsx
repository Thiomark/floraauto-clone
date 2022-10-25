import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import { carImages } from '../utils/constants';

const Services: NextPage = () => {

    const ourInfo = ['Experienced Technicians', 'Customer Satisfaction', 'Quality Services']
 
    return (
        <Layout backgroundImage={carImages[7]} imageHeight='h-[60vh]'>
            <section className='mx-auto container py-10'>
                <div className='grid lg:grid-cols-3 gap-10 px-10'>
                    <div className='flex flex-col justify-center'>
                        <p className='text-4xl font-bold'>WELCOME TO SUBESH AUTO SERVICES. BEST CAR REPAIRS</p>
                        <p className='text-lg mt-6 font-extrabold text-brand'>WE BELIEVE AT SUBESH AUTO, TODAY’S CAR GUYS NEED TO EVOLVE INTO TOMORROW’S MOBILITY LEADERS.</p>
                    </div>
                    <div className='relative col-span-2 h-[30em] hidden lg:block'>
                        <Image src={'/images/fixing.jpg'} alt="" layout='fill' objectFit='contain' />
                    </div>
                </div>
            </section>
            <section className='container mx-auto grid lg:grid-cols-2 gap-10 px-10 lg:py-20 mb-10'>
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
                <div className='relative hidden lg:block'>
                    <Image src={carImages[4]} alt="" layout='fill' className='absolute' objectFit='contain' />
                </div>
            </section>
        </Layout>
    )
}

export default Services