import React from 'react'
import GoToTop from '../GoToTop/GoToTop'
import Image from 'next/image'
import Social from '../Social/Social'

export default function Footer() {
    return (
        <footer className='bg-third text-white mt-12'>
            <GoToTop />
            <div className='container mx-auto py-12 px-4 md:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6'>
                    <div>
                        <div>
                            <Image className='mb-6  h-auto w-auto'
                                width={200} height={100}
                                src={"/img/logo1.png"} alt=''
                            />
                        </div>
                        <p className='text-sm mb-3'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
                            eveniet aliquam quam corrupti blanditiis obcaecati, repellat laudantium
                            reprehenderit reiciendis perspiciatis nihil.
                        </p>
                        <Social />
                    </div>
                    <div className='text-sm'>
                        <h5 className='text-lg font-medium mb-6'>Specialities</h5>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093;  Neurology</p>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093;  Cardiologist</p>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093;  Dentist</p>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093;  Urology</p>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093;  Orthopedic</p>
                    </div>
                    <div className='text-sm'>
                        <h5 className='text-lg font-medium mb-6'>Services</h5>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093; Medical</p>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093;  Operation</p>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093;  Laboratory</p>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093;  ICU</p>
                        <p className='mb-2 cursor-pointer hover:animate-pulse'>&#10093;&#10093;  Test Room</p>
                    </div>
                    <div className='text-sm'>
                        <h5 className='text-lg font-medium mb-6'>Contact Us</h5>
                        <p className='flex gap-2 items-center mb-4 cursor-pointer hover:animate-pulse'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            3556 Beech Street, USA</p>
                        <p className='flex gap-2 items-center mb-4 cursor-pointer hover:animate-pulse'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                            </svg>
                            +90 535 484 3540</p>
                        <p className='flex gap-2 items-center mb-2 cursor-pointer hover:animate-pulse'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            Bahaminwp@gmail.com</p>
                    </div>
                </div>
                <p className='text-center pt-6 border-t border-t-prim'>© 2023 Bahamin. All rights reserved.</p>
            </div>
        </footer>
    )
}
