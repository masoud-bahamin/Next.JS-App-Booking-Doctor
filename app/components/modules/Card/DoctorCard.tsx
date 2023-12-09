import { Doctor } from '@/app/page'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DoctorCard({ username, email, img , _id}: Doctor) {
    return (
        <div className='w-64 mx-auto'>
            <div>
                {img && <Image
                    width={200}
                    height={200}
                    src={`/uploads/${img[img.length - 1]?.filename}`}
                    alt="" className='w-64 h-64' />}

            </div>
            <div className='p-3 bg-white rounded-b-md'>
                <div className='flex justify-between mb-2'>
                    <h3><Link href={`/doctor/${_id}`}>{username}</Link></h3>
                    <p className='text-white text-xs flex items-center gap-1 bg-yellow-500 p-1 rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        4.8 (25)
                    </p>
                </div>
                <p className='text-gray-500 text-xs mb-4'>Dentist {email}</p>
                <div className='flex gap-4 text-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className='text-sm'>Australia</p>
                </div>
            </div>
        </div>
    )
}
