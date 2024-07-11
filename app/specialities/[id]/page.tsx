import Breadcrumb from "@/app/components/modules/Breadcrumb/Breadcrumb";
import Image from "next/image";
import React from "react";
import img1 from "@/public/img/doctor-03.jpg";
import img2 from "@/public/img/about-img1.jpg";
import img3 from "@/public/img/about-img3.jpg";
import img4 from "@/public/img/doctor-04.jpg";

export default function page() {
  return (
    <div className="font-Work_Sans">
      <Breadcrumb title="Specialities" route="Specialities" />
      <div className="container px-4 md:px-0 py-6 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex gap-4 ">
            <div>
              <Image
                className="h-fit mb-4"
                src={img2.src}
                width={300}
                height={400}
                alt=""
                quality={100}
              />
              <Image
                className="h-fit"
                src={img1.src}
                width={300}
                height={200}
                alt=""
                quality={100}
              />
            </div>
            <div>
              <Image
                className="h-fit mb-4"
                src={img4.src}
                width={300}
                height={400}
                alt=""
                quality={100}
              />
              <Image
                className="h-fit"
                src={img3.src}
                width={300}
                height={400}
                alt=""
                quality={100}
              />
            </div>
          </div>
          <div>
            <p className="my-8 text-prim">cardiologist</p>
            <h2 className="text-2xl lg:text-4xl font-Barlow font-medium lg:font-semibold mb-6">
              What is a cardiologist?
            </h2>
            <p className="mb-8 text-paragraf text-sm lg:text-base">
              A cardiologist is a physician whos an expert in the care of your
              heart and blood vessels. They can treat or help you prevent a
              number of cardiovascular problems. They can also specialize in
              specific areas, such as abnormal heart rhythms, heart failure or
              heart problems youve had since birth.
            </p>
            <p className="mb-10 text-paragraf text-sm lg:text-base">
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque eaque ipsa quae architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex gap-4 items-center">
              <div className="rounded-full bg-prim p-3">
                <svg
                  width="24px"
                  height="24px"
                  stroke-width="1.1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#fff"
                >
                  <path
                    d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z"
                    stroke="#fff"
                    stroke-width="1.1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="mb-2 text-paragraf text-sm lg:text-base">
                  Need Emergency?
                </p>
                <p className="text-lg lg:text-xl">+1 450 785 7452</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
