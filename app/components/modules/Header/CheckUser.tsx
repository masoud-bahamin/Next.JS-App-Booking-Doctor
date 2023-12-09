"use client"

import { User } from '@/app/account/page'
import BaseUrl from '@/utils/baseUrl'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function CheckUser() {

    const [userInfo, setUserInfo] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)

    const getUserInfo = async (id: string) => {
        setLoading(true)
        try {
            const res = await fetch(`${BaseUrl}users/getUser/${id}`)
            const data = await res.json()

            if (data.resulte) {
                setUserInfo(data.user)

            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false)

    }

    const getToken = (name: string) => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) return parts.pop()?.split(";").shift()
    }

    useEffect(() => {
        const token = getToken("bookingToken")
        if (token) {
            getUserInfo(token)
        }

    }, [])

    return (
        <div>
            {loading ? (
                <button className='btn-b text-sm flex gap-2'>Loading...<span className='w-5 h-5 border border-prim rounded-full animate-spin'>..</span></button>
            ) : (
                <>
                    {userInfo ? (
                        <Link href={"/account"} className='btn-b text-sm'>Account</Link>
                    ) : (
                        <Link href={"/login"} className='btn-b text-sm'>LOGIN / SIGNUP</Link>
                    )}
                </>)}
        </div>
    )
}
