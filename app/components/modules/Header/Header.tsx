import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

export default function Header() {
    return (
        <div>
            <header className='flex items-center gap-12 container mx-auto py-6'>
                <div>
                    <Image width={200} height={200} src="/img/logo3.png" alt="" className='w-40'/>
                </div>
                <div>
                    <Navbar />
                </div>
                <div className='flex items-center gap-6 ml-auto'>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                        </svg>
                        <div className='text-sm'>
                            <p>contact</p>
                            <p className='font-semibold'>090 535 484 3540</p>
                        </div>
                    </div>
                    <button className='btn-b text-sm'>LOGIN / SIGNUP</button>
                </div>
            </header>
        </div>
    )
}
