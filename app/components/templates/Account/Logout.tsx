"use client"

import { authContext } from "@/app/context/authContext"
import { useContext } from "react"

function Logout() {

    const { logout} = useContext(authContext) as { logout: () => void}


    return (
        <li onClick={() => logout()}
            className='p-3 border-b text-gray-500 cursor-pointer text-sm flex gap-3 items-center hover:text-prim transition-all duration-200'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            <span>Logout</span>
        </li>
    )
}

export default Logout