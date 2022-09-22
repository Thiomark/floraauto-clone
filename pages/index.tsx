import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { background_image, carImages } from '../utils/constants';

const Home: NextPage = () => {
    return (
        <Layout backgroundImage={carImages[0]} imageHeight='h-[80vh]'>
            <main>
                <section className=' container mx-auto py-24'>
                    <h1 className=' uppercase text-red-600 text-2xl font-bold'>Who we are</h1>
                    <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae nisi, libero, dolorem iusto eligendi debitis ad perferendis reprehenderit eveniet cum omnis quasi pariatur, nihil doloremque quidem aspernatur labore deserunt veniam optio facilis adipisci ipsa eius laborum. Porro, aut temporibus? ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae nisi, libero, dolorem iusto eligendi debitis ad perferendis reprehenderit eveniet cum omnis quasi pariatur, nihil doloremque quidem aspernatur labore deserunt veniam optio facilis adipisci ipsa eius laborum. Porro, aut temporibus?</p>
                    <div className='grid grid-cols-3 mt-10 gap-10'>
                        {[...Array(3)].map((item, index) => (<div key={index} className={`flex flex-col items-center justify-center p-10 shadow-lg ${index % 2 !== 0 && 'bg-red-600 text-white'}`}>
                            <h1>icon</h1>
                            <h1 className='uppercase font-bold'>Lorem ipsum</h1>
                        </div>))}
                    </div>
                </section>
                <section style={{backgroundImage: `url(${carImages[1]})`}} className='text-white after:z-10 relative bg-fixed after:bg-opacity-80 after:bg-black after:absolute after:w-full after:top-0 after:bottom-0 py-28'>
                    <div className='container mx-auto'>
                        <div className='relative h-20 mb-20'>
                            <h1 className='text-center font-bold uppercase text-red-600 text-2xl absolute z-30 w-full'>Our Services</h1>
                            <h1 className='text-center font-bold uppercase text-4xl absolute z-30 w-full bottom-0'>Greate Car Service</h1>
                        </div>
                        <div className='grid grid-cols-3 gap-16'>
                            {[...Array(6)].map((item, index) => (
                                <div key={index} className='grid grid-cols-[auto_auto] z-20'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi h-10 mr-6 w-10 bi-gear-wide-connected" viewBox="0 0 16 16">
                                        <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                                    </svg>
                                    <div>
                                        <h1 className='font-bold text-lg uppercase'>Lorem ipsum</h1>
                                        <p className='w-full mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate unde, eos vel pariatur architecto iusto beatae accusamus ipsam quo incidunt?</p>
                                        <h1 className='text-red-500 mt-5 font-bold uppercase'>And More</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mx-auto py-20'>
                        <div className='flex items-center justify-evenly py-4'>
                            {[...Array(3)].map((item, index) => (<div key={index} className='text-xl font-bold uppercase flex flex-col items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi h-10 w-10 bi-gear-wide-connected" viewBox="0 0 16 16">
                                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                                </svg>
                                <h1 className='py-2'>1</h1>
                                <p>Lorem ipsum</p>
                            </div>))}
                        </div>
                        <div className='flex mt-20 px-40 space-x-20'>
                            <div className='flex-1'>
                                <h1 className='text-red-600 uppercase font-bold'>Why Choose Us</h1>
                                <p className='text-3xl uppercase font-bold mt-4 mb-8'>We are qualified & <span className='block'>Professional</span></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum quasi corporis. Rem optio illo inventore atque nisi, ex velit autem ut aperiam, neque perferendis quaerat, tenetur fugit perspiciatis accusamus.</p>
                                <div className='flex space-x-2'>
                                    <h1 className='bg-blue-500 text-white px-4 py-20 flex-1'>Image</h1>
                                    <h1 className='bg-yellow-500 text-black px-4 py-20 flex-1'>Image</h1>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div className='bg-red-400 flex items-center justify-center h-60'>
                                    <h1>Youtube Video</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='text-white relative py-28 bg-fixed bg-no-repeat bg-cover' style={{boxShadow: 'inset 0 0 0 100vw rgba(0,0,0, .7)', backgroundImage: `url(${carImages[3]})`}}>
                    <div className='text-center space-y-10 container px-40 mx-auto'>
                        <h1 style={{zIndex: 999}} className='font-bold text-5xl'>Lorem ipsum dolor sit amet consectetur</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis inventore quae unde explicabo nostrum dignissimos ipsum dolor sit amet, consectetur adipisicing elit. Nobis inventore quae unde explicabo nostrum dignissimos</p>
                        <button className='px-8 w-fit py-4 bg-red-600 text-white'>Get started</button>
                    </div>
                </section>
                <section className='py-28'>
                    <h1 className='text-center text-red-600 font-bold text-2xl'>OUR PROJECTS</h1>
                    <p className='text-center text-4xl font-bold mb-14 mt-6'>FEATURED PROJECTS</p>
                    <div className='grid grid-cols-3 gap-8 grid-rows-[20em_20em]'>
                        {[...Array(6)].map((item, index) => (<div key={index} style={{backgroundImage: `url(${carImages[index]})`}} className='w-full bg-cover bg-no-repeat h-full'/>))}
                    </div>
                </section>
                <section className='text-white relative py-28 bg-fixed bg-no-repeat bg-cover' style={{boxShadow: 'inset 0 0 0 100vw rgba(0,0,0, .8)', backgroundImage: `url(${carImages[1]})`}}>
                    <div className='space-y-6 container px-40 mx-auto z-10'>
                        <h1 className='font-bold text-5xl'>Make appointment with <span className='block'>us now!</span></h1>
                        <div>
                            <p className='text-lg'>Lorem ipsum dolor sit.</p>
                            <p className='text-lg'>071 123 1234</p>
                            <p className='text-lg'>example@example.com</p>
                        </div>
                        <h1 className='font-bold text-5xl'>Office</h1>
                        <button className='px-8 ml-20 w-fit py-4 bg-red-600 text-white font-bold uppercase'>Click Here</button>
                    </div>
                </section>
                <br />
            </main>
        </Layout>
    )
}

export default Home
