import React from 'react'
import DoctorCard from '../../modules/Card/DoctorCard'
import doctorModel from '@/models/doctor'
import { Doctor } from '@/app/page'



export default async function BestDoctors({ doctors }: { doctors: Doctor[] }) {
    return (
        <div className=' bg-slate-100'>
            <div className='py-12 container mx-auto px-4 md:px-0'>
                <div className='flex justify-between mb-12'>
                    <h3 className='text-3xl font-bold'>Best Doctors</h3>
                    <div className='flex gap-3'>
                        <button className='bg-white shadow-xl rounded-full w-10 h-10 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button className='bg-white shadow-xl  rounded-full w-10 h-10 flex justify-center items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
                    {doctors?.map(i => (
                        <DoctorCard {...i} key={i._id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
