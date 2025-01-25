import {  ShoppingCart, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const menu = () => {
    return (
        <div className='flex justify-end'>
            <nav className='flex gap-3 w-full'>
                <Link href='/signin' className='header-button flex flex-col items-center'>
                    <UserIcon className='h-8 w-8' />
                    <span className='font-bold'>Giriş Yap</span>
                </Link>

                <Link href='/cart' className='header-button flex flex-col items-center'>
                    <ShoppingCart className='h-8 w-8' />
                    <span className='font-bold'>Sepetim</span>
                </Link>
            </nav>

        </div>
    )
}

export default menu 