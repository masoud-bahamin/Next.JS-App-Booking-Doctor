"use client"

import React, { useContext, useEffect, useState } from 'react'
import AppointmentCard from '../../modules/Card/AppointmentCard'
import { authContext } from '@/app/context/authContext'
import Swal from 'sweetalert2'

const DayArray = ["Mon", "Tue", "Wen", "The", "Fri", "Sun", "Sat"]

export default function Appointment({ id}: { id: string}) {
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [timeDay, setTimeDay] = useState<Appointment | null>(null);
    const [bookings , setBookings] = useState<AppointmentType[]>([])

    const { bookAppointment, userInfo } = useContext(authContext)

    const getBooking =  async () => {
            const res = await fetch(`/api/rezervation/${id}`)
            if(res.status === 200){
                const data = await res.json()
                setBookings(data.bookings)
            }      
        }

    useEffect(() => {
        const now = new Date()
        setDate(`2024-${now.getMonth() + 1}-${now.getDate()}`);
        getBooking()
       
    }, [])

    useEffect(() => {
        const timeHours = Array(7).fill(0).map((i, index) => {
            return { id: index, active: false, title: `${15 + index}:00` }
        })

        const time = new Date(date)

        const todayDate = time.getDate()
        const day = DayArray[time.getDay()]
        const month = time.getMonth()

        setTimeDay({
            id: 2, day, date: `${month + 1}-${todayDate}`, times: timeHours
        })
    }, [date])

    const saveAppointment = () => {
        if (userInfo === null) {
            Swal.fire({
                icon: "warning",
                text: "Please Sign In"
            })
            return
        }
        bookAppointment({
            userId: userInfo?._id,
            date: new Date(`${date} ${hour}.020Z`),
            doctorId: id
        })
    }

    return (
        <div id='appointment' className='border p-6 rounded-md'>
            <h3 className='mb-2'>Appointment</h3>
            <p className='mb-8 text-xs text-gray-400'>2/322 Lords UK</p>
            <div className='py-8'>
                <label className='block mb-1' htmlFor="">please select the day:</label>
                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="" id="" />
            </div>
            <div className='lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='p-4 border rounded-md'>
                    <div className='text-slate-800 mb-2 gap-2 font-medium'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <span className='text-xs'>{date}</span>
                    </div>
                    <div className='flex flex-wrap'>
                        <span
                            className={` w-20 h-8 flex items-center justify-center m-1 text-sm  hover:bg-prim hover:text-white rounded-md cursor-pointer`}>
                            {hour}
                        </span>
                    </div>
                </div>
                {timeDay ? (
                    <div className='p-4 border rounded-md flex flex-wrap '>
                        <div className='text-slate-800 mb-2 flex items-center gap-2 font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            <span className='text-xs'>{timeDay.day} {" "} {timeDay.date}</span>
                        </div>
                        <div className='flex flex-wrap'>
                            {timeDay.times.map(i => (
                                <AppointmentCard
                                    key={i.id}
                                    isActive={bookings.some(b => (b.date.toString().slice(11, 16) === i.title) && (b.date.toString().slice(5, 10) === timeDay.date))}
                                    setHour={setHour}
                                    {...i}
                                />
                            ))}
                        </div>
                    </div>
                ) : null}

            </div>
            <button disabled={hour ? false : true} onClick={saveAppointment}
                className={` ${hour ? "" : "opacity-40"} btn inline-block text-center w-full mb-3`}>save</button>
        </div>
    )
}
