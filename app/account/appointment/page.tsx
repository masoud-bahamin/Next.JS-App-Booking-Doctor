"use client"

import { authContext } from "@/app/context/authContext"
import { useContext } from "react"

function Appointment() {

    const { userInfo } = useContext(authContext)

    if (!userInfo) return <div></div>

    return (
        <div>Appointment:
            {userInfo.appointments ? (
                <div>
                    {userInfo?.appointments.map((i, index) => (
                        <div className="py-3" key={index}>
                            <span className="mr-10 font-medium">{i.date.toString().slice(0, 10)}</span>
                          Hour:  <span>{i.date.toString().slice(11, 16)}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No Reservation</div>
            )}

        </div>
    )
}

export default Appointment