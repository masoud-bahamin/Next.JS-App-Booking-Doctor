"use client"

import React, { useEffect, useState } from 'react'

export default function GoToTop() {

    const [isShow, setIsShow] = useState(false)

    const handler = () => {
        document.documentElement.scrollTo(0, 0)
    }

    useEffect(() => {

        const getY = () => {
            const Y = window.screen.availHeight
            const top = document.documentElement.scrollTop
            if ((Y / 2) < top) {
                setIsShow(true)
            } else {
                setIsShow(false)
            }

        }
        window.addEventListener("scroll", getY)

        return () => {
            window.removeEventListener("scroll", getY)
        }

    }, [])

    return (
        <>
            {isShow ? (
                <div
                    className='hidden md:flex bg-prim cursor-pointer text-white fixed bottom-5 right-5 w-12 h-12 items-center justify-center rounded-full'
                    onClick={handler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6 fill-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>
                </div>
            ) : null}
        </>
    )
}
