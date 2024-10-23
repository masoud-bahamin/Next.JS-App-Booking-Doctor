import React from "react";
import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb";
import img1 from "@/public/img/user.png";
import Image from "next/image";
import Link from "next/link";

const getDoctors = async () => {
  const res = await fetch(`http://localhost:3000/api/users/doctors`)
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
            <div
              key={doctor._id}
              className="max-w-4xl mx-auto  border p-6 rounded-md"
            >
              <div className="flex gap-5 mb-4">
                <div>
                  {doctor.img[0] ? (
                    <div>
                      <img
                        width={500}
                        height={500}
                        src={doctor.img[doctor.img.length - 1].filename}
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
                      <Link href={`/doctor/${doctor._id}`}>Dr. {doctor.username}</Link>
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
                  <p className="text-gray-500 text-xs mb-4">Dentist</p>
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
                    <p className="text-sm">Australia</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Link
                  href={`/doctor/${doctor._id}`}
                  className="btn-b mb-3 text-xs"
                >
                  View Profile
                </Link>
                <Link
                  href={`/doctor/${doctor._id}`}
                  className="btn inline-block text-center mb-3 text-xs"
                >
                  BOOK APPOINTMENT
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
