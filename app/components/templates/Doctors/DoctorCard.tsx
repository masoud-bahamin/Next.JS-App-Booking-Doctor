import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img1 from "@/public/img/user.png";


export default function DoctorCard({img ,_id , username , location , speciality}:UserType) {
    return (
        <div
            className="max-w-4xl mx-auto  border p-6 rounded-md"
        >
            <div className="flex gap-5 mb-4">
                <div>
                    {img[0] ? (
                        <div>
                            <img
                                width={500}
                                height={500}
                                src={img[img.length - 1].filename}
                                alt=""
                                className="w-64 "
                            />
                        </div>
                    ) : (
                        <Image
                            width={400}
                            height={400}
                            src={img1.src}
                            alt=""
                            className="w-48"
                        />
                    )}
                </div>
                <div className=" bg-white rounded-b-md">
                    <div className="flex justify-between mb-3">
                        <h3>
                            <Link href={`/doctor/${_id}`}>Dr. {username}</Link>
                        </h3>
                        <p className="text-white text-xs flex items-center gap-1 bg-yellow-500 p-1 rounded">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>
                            4.8 (25)
                        </p>
                    </div>
                    <p className="text-gray-500 text-xs mb-4">
                        MDS - Periodontology and Oral Implantology, BDS
                    </p>
                    <p className="text-gray-500 text-xs mb-4">{speciality || "Dentist"} </p>
                    <div className="flex gap-4 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                        <p className="text-sm">{location || "Australia"} </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <Link
                    href={`/doctor/${_id}`}
                    className="btn-b mb-3 text-xs"
                >
                    View Profile
                </Link>
                <Link
                    href={`/doctor/${_id}`}
                    className="btn inline-block text-center mb-3 text-xs"
                >
                    BOOK APPOINTMENT
                </Link>
            </div>
        </div>
    )
}
