import React from 'react'
import AppointmentCard from '../../modules/Card/AppointmentCard'

export default function Appointment() {
    return (
        <div className='border p-6 rounded-md'>
            <h3 className='mb-2'>Appointment</h3>
            <p className='mb-8 text-xs text-gray-400'>2/322 Lords UK</p>
            <div className='lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <AppointmentCard day="Monday"/>
                <AppointmentCard day="Tuesday"/>
                <AppointmentCard day="Wednesday"/>
                <AppointmentCard day="Thursday"/>
                <AppointmentCard day="Friday"/>
                <AppointmentCard day="Saturday"/>
                <AppointmentCard day="Sunday"/>
            </div>
        </div>
    )
}
