"use client"

import { authContext } from "@/app/context/authContext"
import { redirect } from "next/navigation"
import { useContext } from "react"

function IsAdmin() {
    const { userInfo, loading } = useContext(authContext)
    if (!loading && userInfo?.role !== "ADMIN") {
        return redirect("/")
    }
    return (
        <div className="p-3 border rounded-lg">
            <p>Admin</p>
            <p>{userInfo?.email}</p>
            </div>
    )
}

export default IsAdmin