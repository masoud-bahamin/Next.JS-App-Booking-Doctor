"use client"

import BaseUrl from "@/utils/baseUrl";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UpdateUser } from "../account/page";

interface User {
    username: string,
    password: string,
    email: string,
}

interface LoginUser {
    password: string,
    email: string,
}

interface contextType {
    userInfo: UpdateUser | null,
    loading: boolean,
    register: (user: User & { role: "USER" | "DOCTOR" }) => void;
    login: (user: LoginUser) => void;
    logout: () => void;
    error: string;
}

export const authContext = createContext({} as contextType)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [userInfo, setUserInfo] = useState<null | UpdateUser>(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const login = async (user: LoginUser) => {
        setLoading(true)
        try {
            const res = await fetch(`${BaseUrl}users/login`, {
                method: "POST",
                body: JSON.stringify(user)
            })
            const data = await res.json()
            console.log(data);
            if (data.resulte) {
                Swal.fire({
                    icon: "success",
                    text: "your signing was successfully"
                })
                getUserInfo()
                router.push("/account")
            } else {
                Swal.fire({
                    icon: "error",
                    text: data.message
                })
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                text: "your signing was NOT successfully"
            })
            router.refresh()
        }

        setLoading(false)
    }

    const register = async (user: User & { role: "USER" | "DOCTOR" }) => {
        setLoading(true)
        try {
            const res = await fetch(`${BaseUrl}users/create`, {
                method: "POST",
                body: JSON.stringify(user)
            })
            const data = await res.json()

            if (data.resulte) {
                Swal.fire({
                    icon: "success",
                    text: "your signing was successfully"
                })
                router.push("/account")
                getUserInfo()
            } else {
                Swal.fire({
                    icon: "error",
                    text: data.message
                })
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                text: "your signing was NOT successfully"
            })
            router.refresh()
        }

        setLoading(false)
    }

    const logout = async () => {

        setLoading(true)

        try {
            const res = await fetch(`${BaseUrl}users/logout`, {
                method: "POST",
                
            })
            const data = await res.json()
            console.log(data);
            
            if (data.resulte) {
                Swal.fire({
                    icon: "success",
                    text: "your logout was successfully"
                })
                router.push("/")
                setUserInfo(null)
            } else {
                Swal.fire({
                    icon: "error",
                    text: data.message
                })
                setError(data.message)
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: "please try again"
            })
            setError("catch error")
        }

        setLoading(false)
    }

    const getUserInfo = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${BaseUrl}users/getUser/123`)
            const data = await res.json()
            if (data.resulte) {
                setUserInfo(data.user)
            } else {
                setError(data.message)
            }
        } catch (error) {
            setError("cath error in context")
        }

        setLoading(false);
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <authContext.Provider value={{ userInfo, loading, register, error, login, logout }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider