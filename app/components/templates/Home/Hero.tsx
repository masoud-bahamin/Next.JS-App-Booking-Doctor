import React from 'react'
import SearchBox from '../../modules/SearchBox/SearchBox'
import Image from 'next/image'
import { Doctor } from '@/app/page'

export default function Hero({ doctors }: { doctors: Doctor[] }) {
    return (
        <div className='bg-slate-100'>
            <div className='container mx-auto flex py-8'>
                <div className='lg:w-1/2 flex flex-col justify-center gap-8'>
                    <h2 className='text-4xl font-bold'>Hello Masoud
                        Consult <span className='text-prim'>Best Doctors</span> Your <br />
                        Nearby Location.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    <div className='flex gap-6'>
                        <button className='btn'>Start a Consult</button>
                        <Image width={100} height={100} src="/img/down-arrow-img.png" alt="" />
                    </div>
                    <SearchBox />
                </div>
                <div className='relative'>
                    <div>
                        <Image width={500} height={500} src="/img/banner.png" alt="" className=' mx-auto' />
                    </div>
                    <span className='absolute left-0 top-[40%] hero-text-animate3'>
                        <span className='bg-white rounded-lg p-2 flex items-center text-gray-600 font-semibold gap-3 w-fit text-xs'>
                            <div className='bg-prim p-3 rounded-md w-5 h-5 text-white flex justify-center items-center'>&#10003;</div>
                            <p>Regular Checkup</p>
                        </span>
                    </span>
                    <span className='absolute right-0 top-[50%] hero-text-animate'>
                        <span className='bg-white rounded-lg p-3 flex flex-col items-center text-gray-600 font-semibold gap-3 w-fit text-xs'>
                            <div className='rounded-full w-12 h-12'>
                                <Image width={50} height={50} src="/img/d1.jpg" alt="" className='rounded-full' />
                            </div>
                            <p>Alis Doe</p>
                            <p className='text-xs text-gray-400 font-medium'>MBBS. Cardiologist</p>
                            <button className='py-2 px-4 text-xs bg-slate-100 text-prim rounded-md hover:bg-slate-200'>Book Now</button>
                        </span>
                    </span>
                    <span className='absolute right-0 bottom-5 animate-bounce'>
                        <div className='bg-white rounded-lg p-3 text-gray-600 font-semibold text-xs cursor-pointer'>
                            <p className='mb-3'>Meet Our Doctors</p>
                            <div className='flex'>
                                {doctors.map(i => (
                                    < div className='-ml-2 w-8 h-8' key={Math.random() * 9999}>
                                        <Image width={40} height={40} src={`/uploads/${i.img.reverse()[0].filename}`} alt="" className='rounded-full border border-prim' />
                                    </div>
                                ))}
                                < div className='-ml-2 w-8 h-8' key={Math.random() * 9999}>
                                    <Image width={40} height={40} src={`/img/d1.jpg`} alt="" className='rounded-full border border-prim' />
                                </div>
                                < div className='-ml-2 w-8 h-8' key={Math.random() * 9999}>
                                 <Image width={40} height={40} src={`/img/d2.jpg`} alt="" className='rounded-full border border-prim'/>
                               </div>
                                < div className='-ml-2 w-8 h-8' key={Math.random() * 9999}>
                                 <div className='rounded-full w-9 h-9 border text-white bg-prim flex justify-center items-center text-xs font-thin' >20k+</div>
                               </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}
