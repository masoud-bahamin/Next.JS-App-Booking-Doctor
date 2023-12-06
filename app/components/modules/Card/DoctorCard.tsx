import { Doctor } from '@/app/page'
import Image from 'next/image'
import React from 'react'

export default function DoctorCard({ username, email, img }: Doctor) {
    return (
        <div>
            <div>
                {img && <Image
                    width={200}
                    height={200}
                    src={`/uploads/${img[img.length - 1]?.filename}`}
                    alt="" className='w-64' />}

            </div>
            <div className='p-5'>
                <div>
                    <h3>{username}</h3>
                    <p>(25)</p>
                </div>
                <p>Dentist {email}</p>
                <div className='flex gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <p>Australia</p>
                </div>
            </div>
        </div>
    )
}
