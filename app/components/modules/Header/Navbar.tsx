

import Link from 'next/link'
import React from 'react'

interface NavbarProps {
    setIsShow: (a: boolean) => void;
    isShow: boolean
}

export default function Navbar({ setIsShow, isShow }: NavbarProps) {
    return (
        <>
            <ul className={`${isShow ? "top-0 shadow-2xl border-b-4 border-b-prim" : "-top-[100%]"} transition-all duration-500 flex flex-col w-screen left-0  p-4 absolute bg-white z-30 lg:flex lg:flex-row lg:w-full lg:relative lg:p-0 gap-6 text-sm font-mediom`}>
                <li className='hover:text-prim transition-all duration-500'><Link href={"/"}>Home</Link></li>
                <li className='hover:text-prim transition-all duration-500'><Link href={"/about"}>About</Link></li>
                <li className='hover:text-prim transition-all duration-500'><Link href={"/"}>Specialities</Link></li>
                <li className='hover:text-prim transition-all duration-500'><Link href={"/doctors"}>Doctors</Link></li>
                <li className='hover:text-prim transition-all duration-500'><Link href={"/blog"}>Blog</Link></li>
                <li className='hover:text-prim transition-all duration-500'><Link href={"/contact"}>Contact Us</Link></li>
            </ul>
            <button onClick={() => { setIsShow(false) }}
                className={`${isShow ? "top-3" : "-top-96"} transition-all duration-1000 absolute right-3 z-40 lg:hidden`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </>
    )
}
