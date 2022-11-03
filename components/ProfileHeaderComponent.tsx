import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

interface Props {
    children?: ReactNode
    title: string
}

const ProfileHeaderComponent: FC<Props> = ({children, title}) => {
    const links = [
        {name: 'Profile', url: '/profile'},
        {name: 'Orders', url: '/orders'}
    ]
    return (
        <>
            <div className='divide-x divide-gray-300 mb-4 pb-2 border-b'>
                {links.map((link, index) => <Link key={link.url} href={link.url}><a className='px-4 text-gray-700 text-sm cursor-pointer'>{link.name}</a></Link>)}
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-2xl text-gray-700'>{title}</h1>
                {children}
            </div>
        </>
    )
}

export default ProfileHeaderComponent