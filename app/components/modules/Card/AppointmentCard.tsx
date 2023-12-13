"use client"

import React, { useState } from 'react'

type Appointment = {
    id: string,
    active: boolean,
    time: string,
    title: string
}



interface AppointmentCardProps {
    times: Appointment[],
    day : string
}

export default function AppointmentCard({ times , day }: AppointmentCardProps) {

    const [appointmentArrey, setAppointmentArrey] = useState(times)

    const selectAppointment = (id: string) => {
        setAppointmentArrey(prev => {
            const array = prev.map(i => {
                if (i.id === id) {
                    i.active = true
                }
                return i
            })
            return array
        })

    }

    return (
        <div className='p-4 border rounded-md flex flex-wrap '>
            <div className='text-slate-800 mb-2 flex items-center gap-2 font-medium'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <span className='text-xs'>{day}</span>
            </div>
            <div className='flex flex-wrap'>
                {appointmentArrey.map(i => (
                    <span
                        onClick={() => selectAppointment(i.id)}
                        key={i.id}
                        className={`${i.active ? "text-prim bg-blue-50" : ""} py-1 text-sm px-6 hover:bg-prim hover:text-white rounded-md cursor-pointer`}>
                        {i.title}
                    </span>
                ))}
            </div>
        </div>
    )
}
