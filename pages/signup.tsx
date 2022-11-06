import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useContext, useState } from 'react';
import Layout from '../components/Layout';
import { AuthContext } from '../providers/AuthProvider';
import { UserAuthType } from '../types/User';

const SignIn: NextPage = () => {
    const { loading, signUp } = useContext(AuthContext);
    const [credentials, setCrdentails] = useState<UserAuthType>({email: '', password: '', username: ''});

    return (
        <Layout headerMinimal imageHeight=''>
            <div className='container p-10 mx-auto py-40 '>
                <form action="POST" onSubmit={(e: any) => {
                    e.preventDefault();
                    signUp?.(credentials);
                }} className='border border-gray-100 space-y-4 py-20 w-full max-w-xl mx-auto p-10 rounded'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <Link href='/signin'><a className='underline text-blue-600 text-sm'>already have an account</a></Link>
                    </div>
                    <input value={credentials.username} onChange={(event: ChangeEvent<HTMLInputElement>) => setCrdentails(prev => ({
                            ...prev, username: event.target.value
                        }))} required className={`p-4 border rounded text-sm col-span-2 w-full border-gray-200 bg-transparent`} placeholder='Username'/>

                    <input value={credentials.email} onChange={(event: ChangeEvent<HTMLInputElement>) => setCrdentails(prev => ({
                            ...prev, email: event.target.value
                        }))} required className={`p-4 border rounded text-sm col-span-2 w-full border-gray-200 bg-transparent`} placeholder='Email'/>
                    <input type={'password'} value={credentials.password} onChange={(event: ChangeEvent<HTMLInputElement>) => setCrdentails(prev => ({
                            ...prev, password: event.target.value
                        }))} required className={`p-4 border rounded text-sm col-span-2 w-full border-gray-200 bg-transparent`} placeholder='Password'/>
                    <button disabled={loading} type='submit' className='w-full p-4 flex items-center justify-center bg-black rounded text-white text-sm'>
                        {loading ? <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg> :<span>Sign In</span> }
                    </button>
                    <button className='text-black w-full text-center text-sm'>Can&apos;t sign in?</button>
                    {/* <button onClick={() => signIn('google', {
                        callbackUrl: 'https://localhost:3000'
                    })} type='button' className='border rounded flex items-center justify-center w-full p-3 text-sm'>
                        <span className='mr-2'>Sign In with Google</span> <Image src={'/google.svg'} width={25} height={25} alt='Sign in with google'/>
                    </button> */}
                </form>
            </div>
        </Layout>
    )
}
 export default SignIn