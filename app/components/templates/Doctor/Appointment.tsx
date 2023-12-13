import React from 'react'
import AppointmentCard from '../../modules/Card/AppointmentCard'

const appArrey = [
    {
        id: "1", times: [{ id: "1", active: false, time: "11:00 am", title: "11:00 am" },
        { id: "2", active: false, time: "11:00 am", title: "12:00 pm" },
        { id: "3", active: false, time: "11:00 am", title: "1:00 pm" },
        { id: "4", active: false, time: "11:00 am", title: "2:00 pm" },
        { id: "5", active: false, time: "11:00 am", title: "3:00 pm" },], day: "Monday", date: "21/10"
    },
    {
        id: "2", times: [{ id: "1", active: false, time: "11:00 am", title: "11:00 am" },
        { id: "2", active: false, time: "11:00 am", title: "12:00 pm" },
        { id: "3", active: false, time: "11:00 am", title: "1:00 pm" },
        { id: "4", active: false, time: "11:00 am", title: "2:00 pm" },
        { id: "5", active: false, time: "11:00 am", title: "3:00 pm" }], day: "Tuesday", date: "22/10"
    },
    {
        id: "3", times: [{ id: "1", active: false, time: "11:00 am", title: "11:00 am" },
        { id: "2", active: false, time: "11:00 am", title: "12:00 pm" },
        { id: "3", active: false, time: "11:00 am", title: "1:00 pm" },
        { id: "4", active: false, time: "11:00 am", title: "2:00 pm" },
        { id: "5", active: false, time: "11:00 am", title: "3:00 pm" }], day: "Wednesday", date: "23/10"
    },
    {
        id: "4", times: [{ id: "1", active: false, time: "11:00 am", title: "11:00 am" },
        { id: "2", active: false, time: "11:00 am", title: "12:00 pm" },
        { id: "3", active: false, time: "11:00 am", title: "1:00 pm" },
        { id: "4", active: false, time: "11:00 am", title: "2:00 pm" },
        { id: "5", active: false, time: "11:00 am", title: "3:00 pm" }], day: "Thursday", date: "24/10"
    },
    {
        id: "5", times: [{ id: "1", active: false, time: "11:00 am", title: "11:00 am" },
        { id: "2", active: false, time: "11:00 am", title: "12:00 pm" },
        { id: "3", active: false, time: "11:00 am", title: "1:00 pm" },
        { id: "4", active: false, time: "11:00 am", title: "2:00 pm" },
        { id: "5", active: false, time: "11:00 am", title: "3:00 pm" }], day: "Friday", date: "25/10"
    },
]

export default function Appointment() {
    return (
        <div id='appointment' className='border p-6 rounded-md'>
            <h3 className='mb-2'>Appointment</h3>
            <p className='mb-8 text-xs text-gray-400'>2/322 Lords UK</p>
            <div className='lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {appArrey.map(i => (
                    <AppointmentCard key={i.id} day={i.day} times={i.times} />
                ))}
            </div>
        </div>
    )
}
