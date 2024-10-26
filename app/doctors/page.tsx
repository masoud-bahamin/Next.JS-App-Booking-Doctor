import React from "react";
import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb";

import Image from "next/image";
import Link from "next/link";
import DoctorCard from "../components/templates/Doctors/DoctorCard";

const getDoctors = async () => {
  const res = await fetch(`http://localhost:3000/api/users/doctors`,{
    next : {
      revalidate : 60
    }
  })
  return res.json()
}


async function Doctors() {
  const doctors: UserType[] = await getDoctors().then(data => data.users);

  return (
    <div className="font-Work_Sans">
      <Breadcrumb title="DOCTORS" route="doctors" />
      <div className="container px-4 md:px-0 py-6 lg:py-12">
        <div className="flex justify-between items-center mb-8">
          <p className="text-base lg:text-xl font-semibold">
            {doctors.length} Doctors found
          </p>
          <div className="flex items-center gap-6">
            <select className="p-3 bg-transparent lg:text-xl">
              <option>Sort by</option>
              <option>Rating</option>
              <option>Popular</option>
            </select>
            <div className="p-3 border cursor-pointer hover:text-prim">
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
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
            </div>
            <div className="p-3 border cursor-pointer text-prim">
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
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {doctors.map((doctor) => (
            <DoctorCard {...doctor} key={doctor._id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
