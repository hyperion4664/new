import {  ShoppingCart, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const menu = () => {
    return (
        <div className='flex justify-end'>
            <nav className='flex gap-3 w-full'>
                <Link 
                    href='/signin' 
                    className='header-button group flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:bg-gray-100/10 hover:shadow-lg'
                >
                    <UserIcon className='h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary' />
                    <span className='font-bold transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-primary'>Giriş Yap</span>
                </Link>

                <Link 
                    href='/cart' 
                    className='header-button group flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:bg-gray-100/10 hover:shadow-lg'
                >
                    <ShoppingCart className='h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary' />
                    <span className='font-bold transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-primary'>Sepetim</span>
                </Link>
            </nav>

        </div>
    )
}

export default menu 