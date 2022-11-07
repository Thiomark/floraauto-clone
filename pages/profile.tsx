import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ProfileHeaderComponent from '../components/ProfileHeaderComponent';
import { AuthContext } from '../providers/AuthProvider'
import { UpdateUserType } from '../types/User';

const Profile = () => {
    const {user, signOut, updateUser: updateUserInfo} = useContext(AuthContext);
    const [updateUser, setUpdateUser] = useState<UpdateUserType>({
        email: '', phone: '', username: ''
    })
    const userFromStructure = [
        {name: 'username', lable: 'Username', length: 'col-span-1', value: ''},
        {name: 'email', lable: 'Email', length: 'col-span-1', value: ''},
        {name: 'phone', lable: 'Phone', length: 'col-span-1', value: ''}
    ];
    const userFromPasswordStructure = [
        {name: 'oldPassword', lable: 'Old Password', length: 'col-span-1', value: ''},
        {name: 'newPassword', lable: 'New Password', length: 'col-span-1', value: ''}
    ];

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateUserInfo?.(updateUser)
    }

    useEffect(() => {
        if(user){
            setUpdateUser(user.user);
        }
    }, [])
    

    return (
        <Layout imageHeight='' headerMinimal>
            {user && <main className='container mx-auto px-4 py-2 lg:px-10 lg:py-10'>
                <h1 className='font-bold lg:hidden mb-4 lg:mb-10 text-lg text-gray-600'>Profile</h1>
                <ProfileHeaderComponent title='Account Settings'>
                    <button onClick={() => signOut?.()} className='my-btn'>Sign Out</button>
                </ProfileHeaderComponent>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => submit(event)} className='space-y-4 lg:space-y-0 lg:apt-form lg:gap-8'>
                    {userFromStructure.map(ele => {       
                        return <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUpdateUser((prev: UpdateUserType) => ({...prev, [ele.name]: event.target.value}))
                            //@ts-ignore
                        }} value={updateUser[ele.name]} key={ele.name} placeholder={'Enter ' + ele.lable} className={ele.length + ' form-input w-full'}></input>
                    })}
                    <div className='col-span-2 my-btn'>
                        <button className=''>Update Information</button>
                    </div>
                </form>
                <h1 className="font-bold text-2xl text-gray-700 hidden">Update Password</h1>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => submit(event)} className='apt-form hidden gap-8'>
                    {userFromPasswordStructure.map(ele => {
                        //@ts-ignore
                        return <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUpdateUser((prev: UpdateUserType) => ({...prev, [ele.name]: event.target.value}))
                            //@ts-ignore
                        }} value={user?.user[ele.name]} required key={ele.name} placeholder={'Enter ' + ele.lable} className={ele.length + ' form-input w-full'}></input>
                    })}
                    <div className='col-span-2 my-btn'>
                        <button className=''>Update Password</button>
                    </div>
                </form>
            </main>}
        </Layout>
    )
}

export default Profile