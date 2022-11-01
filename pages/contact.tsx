import { NextPage } from 'next';
import { ChangeEvent, FormEvent, useState } from 'react';
import Layout from '../components/Layout';
import { baseUrl, carImages } from '../utils/constants';
import { toast } from 'react-toastify';
import axios from 'axios';

type Form = {
    name: string
    phone: string
    email: string
    message: string
}

interface MessageForm extends Form {
    subject: string
}

interface AppointmentForm extends Form {
    date: string
    time: string
    service: string
}

enum submitFormOptions {
    message,
    appointment
}
interface SubmitForm {
    event: FormEvent<HTMLFormElement>
    option?: string
}



const Contactus: NextPage = () => {

    const [messageForm, setMessageForm] = useState<MessageForm>({email: '', name: '', phone: '', subject: '', message: ''});
    const [appointmentForm, setAppointmentForm] = useState<AppointmentForm>({email: '', name: '', phone: '', date: '', message: '', time: '', service: ''});

    const submitForm = async ({event, option} : SubmitForm) => {
        event.preventDefault();
        if (option === 'message') {
            return axios.post(`${baseUrl}/messages`, {data: messageForm})
                .then(function (response) {
                    toast("Message sent!");
                })
                .catch(function (error) {
                    toast("Message not sent!");
                });
        }
        axios.post(`${baseUrl}/appointments`, {data: appointmentForm})
            .then(function (response) {
                toast("Appointment sent!");
            })
            .catch(function (error) {
                console.log(error.response.data.error)
                toast("Appointment not sent!");
            });
    }

    return (
        <Layout backgroundImage={carImages[1]} imageHeight='lg:h-[60vh] h-[40vh]'>
            <div className='grid px-4 grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto'>
                <form onSubmit={(event: FormEvent<HTMLFormElement>) => submitForm({event, option: 'message'})} className='apt-form'>
                    <h1 className='bg-red-600 text-white text-2xl p-4 font-bold col-span-2 text-center'>MESSAGE OR QUESTION</h1>
                    <input value={messageForm.name} onChange={(event: ChangeEvent<HTMLInputElement>) => setMessageForm(prev => ({
                        ...prev, name: event.target.value
                    }))} required className={`p-4 border col-span-2 capitalize border-gray-200 bg-gray-50`} placeholder='Your Name And Last Name'/>
                    <input value={messageForm.phone}  onChange={(event: ChangeEvent<HTMLInputElement>) => setMessageForm(prev => ({
                        ...prev, phone: event.target.value
                    }))} required className={`p-4 border capitalize border-gray-200 bg-gray-50`} placeholder='Your Number'/>
                    <input value={messageForm.subject} onChange={(event: ChangeEvent<HTMLInputElement>) => setMessageForm(prev => ({
                        ...prev, subject: event.target.value
                    }))} required className={`p-4 border capitalize border-gray-200 bg-gray-50`} placeholder='Subject'/>
                    <input value={messageForm.email} onChange={(event: ChangeEvent<HTMLInputElement>) => setMessageForm(prev => ({
                        ...prev, email: event.target.value
                    }))} required type='email' className={`p-4 border col-span-2 capitalize border-gray-200 bg-gray-50`} placeholder='Your Email'/>
                    <textarea value={messageForm.message}  onChange={( event: ChangeEvent<HTMLTextAreaElement>) => setMessageForm(prev => ({
                        ...prev, message: event.target.value
                    }))} required rows={5} placeholder='Message' className={`p-4 border col-span-2  capitalize border-gray-200 bg-gray-50`}></textarea>
                    <button type='submit' className='text-white bg-red-600 py-4 px-6 rounded w-fit text-sm'>SUBMIT INQUIRY</button>
                </form>
                <form onSubmit={(event: FormEvent<HTMLFormElement>) => submitForm({event})}className='apt-form'>
                    <h1 className='bg-red-600 text-white text-2xl p-4 font-bold col-span-2 text-center'>BOOK AN APPOINTMENT</h1>
                    <input onChange={(event: ChangeEvent<HTMLInputElement>) => setAppointmentForm(prev => ({
                        ...prev, name: event.target.value
                    }))} required className={`p-4 border col-span-2 capitalize border-gray-200 bg-gray-50`} placeholder='Your Name And Last Name'/>
                    <input onChange={(event: ChangeEvent<HTMLInputElement>) => setAppointmentForm(prev => ({
                        ...prev, phone: event.target.value
                    }))} required className={`p-4 border capitalize border-gray-200 bg-gray-50`} placeholder='Your Number'/>
                    <input onChange={(event: ChangeEvent<HTMLInputElement>) => setAppointmentForm(prev => ({
                        ...prev, service: event.target.value
                    }))} required className={`p-4 border capitalize border-gray-200 bg-gray-50`} placeholder='Service'/>
                    <input onChange={(event: ChangeEvent<HTMLInputElement>) => setAppointmentForm(prev => ({
                        ...prev, email: event.target.value
                    }))} required type='email' className={`p-4 border col-span-2 capitalize border-gray-200 bg-gray-50`} placeholder='Your Email'/>
                    <input type='date' onChange={(event: ChangeEvent<HTMLInputElement>) => setAppointmentForm(prev => ({
                        ...prev, date: event.target.value
                    }))} required className={`p-4 border capitalize border-gray-200 bg-gray-50`} placeholder='Date'/>
                    <input type='' onChange={(event: ChangeEvent<HTMLInputElement>) => setAppointmentForm(prev => ({
                        ...prev, time: event.target.value
                    }))} required className={`p-4 border capitalize border-gray-200 bg-gray-50`} placeholder='Time'/>
                    <textarea onChange={( event: ChangeEvent<HTMLTextAreaElement>) => setAppointmentForm(prev => ({
                        ...prev, message: event.target.value
                    }))} required rows={5} placeholder='Message' className={`p-4 border col-span-2  capitalize border-gray-200 bg-gray-50`}></textarea>
                    <button className='text-white bg-red-600 py-4 px-6 rounded w-fit text-sm'>SUBMIT APPOINTMENT</button>
                </form>
            </div>
        </Layout>
    )
}

export default Contactus