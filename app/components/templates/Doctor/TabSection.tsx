"use client"

import React, { useState } from 'react'
import Overview from './Overview'
import Comment from '../../modules/Comment/Comment'
import Appointment from './Appointment'
import { User } from '@/app/account/page'

export type CommentType = {
    comments: [{
        message: string,
        username: string,
        rateNumber: number
    }]
}

type TabSectionProps = { user: User & CommentType }

export default function TabSection({ user }: TabSectionProps) {
    const [tab, setTab] = useState("appointment")
    return (
        <div>
            <div className='text-gray-800 border-b py-4'>
                <span onClick={() => setTab("appointment")}
                    className={`${tab === "appointment" ? "text-prim border-b-prim border-b-2" : ""} px-4 sm:px-8 md:px-12 py-4 font-semibold text-sm hover:text-prim hover:border-b-prim hover:border-b-2 cursor-pointer`}>Locations</span>
                <span onClick={() => setTab("overview")}
                    className={`${tab === "overview" ? "text-prim border-b-prim border-b-2" : ""} px-4 sm:px-8 md:px-12 py-4 font-semibold text-sm hover:text-prim hover:border-b-prim hover:border-b-2 cursor-pointer`}>Overview</span>
                <span onClick={() => setTab("review")}
                    className={`${tab === "review" ? "text-prim border-b-prim border-b-2" : ""} px-4 sm:px-8 md:px-12 py-4 font-semibold text-sm hover:text-prim hover:border-b-prim hover:border-b-2 cursor-pointer`}>Reviews</span>
            </div>
            <div className='py-6 lg:p-12'>
                {tab === "appointment" ? (<Appointment />) : tab === "overview" ? (<Overview username={user?.username} />) : (<Comment comments={user?.comments} />)}
            </div>
        </div>
    )
}
