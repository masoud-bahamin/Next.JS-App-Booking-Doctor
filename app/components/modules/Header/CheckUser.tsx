"use client"

import {authContext} from '@/app/context/authContext'
import Link from 'next/link'
import React, { useContext } from 'react'

export default function CheckUser() {

    const {userInfo , loading} = useContext(authContext)

    return (
        <div className=' min-w-[160px]'>
            {loading ? (
                <button className='btn-b text-sm flex gap-2'>Loading...<span className='w-5 h-5 border border-prim rounded-full animate-spin'>..</span></button>
            ) : (
                <>
                    {userInfo ? (
                        <Link href={"/account"} className='btn-b text-sm'>{userInfo.username}</Link>
                    ) : (
                        <Link href={"/login"} className='btn-b text-sm'>LOGIN <span className='hidden sm:inline-block'>/ SIGNUP</span></Link>
                    )}
                </>)}
        </div>
    )
}
