import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <ul className='flex gap-6 text-sm font-mediom'>
            <li className='hover:text-prim transition-all duration-500'><Link href={"/"}>Home</Link></li>
            <li className='hover:text-prim transition-all duration-500'><Link href={"/"}>About Us</Link></li>
            <li className='hover:text-prim transition-all duration-500'><Link href={"/"}>Specialities</Link></li>
            <li className='hover:text-prim transition-all duration-500'><Link href={"/"}>Doctors</Link></li>
            <li className='hover:text-prim transition-all duration-500'><Link href={"/"}>Blog</Link></li>
            <li className='hover:text-prim transition-all duration-500'><Link href={"/"}>Contact Us</Link></li>         
        </ul>
    )
}
