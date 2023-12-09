import React from 'react'
import SpecialitiBox from '../../modules/SpecialitiBox/SpecialitiBox'

const SpecialitiArrey = [
    {id : 1 , img:"/img/icon3.png" , title:"Cardiologist"},
    {id : 2 , img:"/img/icon4.png" , title:"Dentist"},
    {id : 3 , img:"/img/icon10.png" , title:"Labratory"},
    {id : 4 , img:"/img/icon8.png" , title:"MRI Scans"},
    {id : 5 , img:"/img/icon2.png" , title:"Neurology"},
    {id : 6 , img:"/img/icon6-4.png" , title:"Orthopedic"},
]

export default function Specialities() {
    return (
        <div className='py-12 container mx-auto px-4 md:px-0'>
            <div className='flex justify-between mb-12'>
                <h3 className='text-3xl font-bold'>Specialities</h3>
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
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12'>
                {SpecialitiArrey.map(i => (
                    <SpecialitiBox {...i} key={i.id} />
                ))}       
            </div>
            <div className='text-center'>
                <button className='btn'>See All Specialities</button>
            </div>
            
        </div>
    )
}
