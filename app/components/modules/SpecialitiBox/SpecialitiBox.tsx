import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

interface SpecialitiBoxProps {
    title: string;
    img : string;
    id : number
}

export default function SpecialitiBox({ title , img , id}: SpecialitiBoxProps) {
    return (
        <Link href={`/speciality/${id}`} className='inline-block text-center border rounded-lg p-8 group hover:border-prim'>
            <div className='bg-slate-200 group-hover:bg-gray-300 w-20 h-20 flex justify-center items-center mx-auto rounded-full mb-4'>
                <Image width={50} height={50} src={img} alt="" className=' fill-image'/>
            </div>
            <h3 className='font-medium group-hover:text-gray-500'>{title}</h3>
        </Link>
    )
}
