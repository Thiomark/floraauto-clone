import { NextPage } from 'next';
import Layout from '../components/Layout';
import { carImages } from '../utils/constants';

const Contactus: NextPage = () => {
    const firstForm = ['Your name and last name', 'Your number', 'Your email', 'Subject', 'Text'];
    const secondForm = ['Your name and last name', 'Your number', 'Your email', 'Date', 'Time', 'Service', 'Your Message'];
    const formStyle = 'gap-6 gap-y-10 h-fit py-10 grid grid-cols-2';

    const inputStructure = (index: number, secondForm?: boolean) => {
        if(secondForm){
            if(index === 0 || index === 5 || index === 6) return 'col-span-2'
        }
        if(index === 0 || index === 3 || index === 4) return 'col-span-2'
    }
    return (
        <Layout backgroundImage={carImages[1]} imageHeight='h-[60vh]'>
            <div className='grid px-4 grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto'>
                <form className={formStyle}>
                    <h1 className='bg-red-600 text-white text-2xl p-4 font-bold col-span-2 text-center'>MESSAGE OR QUESTION</h1>
                    {firstForm.map((item, index) => {
                        return (
                            <input key={index} className={`p-4 border capitalize border-gray-200 bg-gray-50 ${inputStructure(index)}`} placeholder={item}/>
                        )
                    })}
                    <p className='text-gray-400 col-span-2'>Message Or Question</p>
                    <button className='text-white bg-red-600 py-4 px-6 rounded w-fit text-sm'>SUBMIT INQUIRY</button>
                </form>
                <form className={formStyle}>
                    <h1 className='bg-red-600 text-white text-2xl p-4 font-bold col-span-2 text-center'>BOOK AN APPOINTMENT</h1>
                    {secondForm.map((item, index) => {
                        return (
                            <input key={index} className={`p-4 border capitalize border-gray-200 bg-gray-50 ${inputStructure(index)}`} placeholder={item}/>
                        )
                    })}
                    <p className='text-gray-400 col-span-2'>Message Or Question</p>
                    <button className='text-white bg-red-600 py-4 px-6 rounded w-fit text-sm'>SUBMIT APPOINTMENT</button>
                </form>
            </div>
        </Layout>
    )
}

export default Contactus