"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import CheckUser from "./CheckUser";

export default function Header() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <header className="flex items-center gap-1 sm:gap-6 lg:gap-12 container mx-auto py-6 px-4 md:px-0">
        <div>
          <Image
            width={100}
            height={20}
            src="/img/logo3.png"
            alt=""
            className="w-28 md:w-40  min-w-[80px]"
          />
        </div>

        <div className="">
          <Navbar setIsShow={setIsShow} isShow={isShow} />
        </div>
        <div className="flex items-center gap-0 xl:gap-6 ml-auto">
          <div className="hidden xl:flex items-center gap-3">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                        </svg> */}
            <svg
              className="text-prim"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 16.933 16.933"
              id="hospital"
            >
              <g transform="translate(0 -280.067)">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth=".529"
                  d="M5.855718 280.59582c-1.1447391 0-2.0649578.91071-2.0649578 2.04356v13.83144h9.3518218v-13.83144c0-1.13285-.92022-2.04356-2.064977-2.04356zM2.8399138 285.41743H2.5941292c-1.1447431 0-2.06496273.91067-2.06496273 2.04352v9.00987H3.7907602"
                ></path>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth=".529"
                  d="M14.136491 285.41743h.202722c1.144743 0 2.064963.91067 2.064963 2.04352v9.00987h-3.261594M2.0212258 289.19905H3.79076M2.0212258 291.23698H3.79076M5.5857346 286.89629H7.3552688M5.5857346 288.53332H7.3552688M9.5780732 286.89629H11.347608M9.5780732 288.53332H11.347608M13.142582 289.19905h1.769534M13.142582 291.23698h1.769534M7.7964278 292.25609c-.5170363 0-.9332764.41624-.9332764.93327v3.28146h3.2070396v-3.28146c0-.51703-.4162403-.93327-.9332766-.93327zM5.5857346 290.4042H7.3552688M9.5780732 290.4042H11.347608"
                ></path>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth=".529"
                  d="m 8.2938067,281.99055 c -0.32104,0 -0.57929,0.25825 -0.57929,0.57929 v 0.47698 h -0.47697 c -0.32105,0 -0.5793,0.25824 -0.5793,0.57929 v 0.34571 c 0,0.32105 0.25825,0.5793 0.5793,0.5793 h 0.47697 v 0.47697 c 0,0.32105 0.25825,0.57929 0.57929,0.57929 h 0.34572 c 0.32104,0 0.57929,-0.25824 0.57929,-0.57929 v -0.47697 h 0.47697 c 0.3210503,0 0.5793003,-0.25825 0.5793003,-0.5793 v -0.34571 c 0,-0.32105 -0.25825,-0.57929 -0.5793003,-0.57929 h -0.47697 v -0.47698 c 0,-0.32104 -0.25825,-0.57929 -0.57929,-0.57929 z"
                ></path>
              </g>
            </svg>
            <div className="text-sm">
              <p>contact</p>
              <p className="font-semibold">090 535 484 3540</p>
            </div>
          </div>
          <CheckUser />
        </div>
        <button onClick={() => setIsShow(!isShow)} className="lg:hidden ">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>
    </div>
  );
}
