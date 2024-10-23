"use client"

type AppointmentCardProp =  { setHour: (s: string) => void, title : string , isActive: boolean}

import React, { useState } from 'react'

export default function AppointmentCard({ title, setHour, isActive }: AppointmentCardProp) {

    return (
        <button
        disabled={isActive}
            onClick={() => {
                setHour(title)
            }}
            className={`${isActive ? "text-prim bg-blue-50 opacity-50" : "hover:bg-prim hover:text-white"} focus:bg-blue-700 focus:text-white focus:scale-110 w-20 h-8 flex items-center justify-center m-1 text-sm rounded-md`}>
            {title}
        </button>

    )
}
