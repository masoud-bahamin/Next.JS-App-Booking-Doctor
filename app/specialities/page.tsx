import React from "react";
import Specialities from "../components/templates/Home/Specialities";
import SpecialitiBox from "../components/modules/SpecialitiBox/SpecialitiBox";
import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb";
import Image from "next/image";

export const SpecialitiArrey = [
  { id: 1, img: "/img/icon3.png", title: "Cardiologist" },
  { id: 2, img: "/img/icon4.png", title: "Dentist" },
  { id: 3, img: "/img/icon10.png", title: "Labratory" },
  { id: 4, img: "/img/icon8.png", title: "MRI Scans" },
  { id: 5, img: "/img/icon2.png", title: "Neurology" },
  { id: 6, img: "/img/icon6-4.png", title: "Orthopedic" },
  { id: 7, img: "/img/icon6-4.png", title: "Orthopedic" },
  { id: 8, img: "/img/icon6-4.png", title: "Orthopedic" },
];

export default function page() {
  return (
    <div>
      <Breadcrumb title="SPECIALITIES" route="Specialities" />

      <div className="px-4 container pb-20 flex gap-y-5 flex-wrap md:flex-nowrap items-center border-b">
        <div className="md:p-20 shadow-md md:-mr-20 z-10 bg-white h-fit">
          <h2 className="text-2xl lg:text-4xl mb-6 font-bold font-Barlow">
            The Ultimate List of Medical Specialties and Subspecialties
          </h2>
          <p className="text-sm mb-5 font-light">
            Categories: Medical Practice, Nature
          </p>
          <p className="mb-5">
            Begin your specialty exploration by reading the profiles of more
            than 160 specialties and subspecialties in the United States and the
            nearly 40 specialties in Canada.
          </p>
        </div>
        <div>
          <Image
            width={1400}
            height={2000}
            alt=""
            className=""
            src="/img/doctor-02.jpg"
          />
        </div>
      </div>
      <div className="container mx-4 sm:mx-auto flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-10">
        <div className="lg:w-1/3 border-r pr-10 pt-20">
          <div className="text-center mb-8">
            <Image
              width={100}
              height={100}
              className="mb-6 rounded-full mx-auto"
              src="/img/d1.jpg"
              alt=""
            />
            <p className="mb-5 font-semibold text-lg font-Barlow">
              I am a Doctor
            </p>
            <p className="mb-5">
              When it comes to creating is a website for your business, an
              attractive design will only get you far,...
            </p>
            <img
              className="mx-auto"
              src="https://htmlguru.net/genial/assets/img/sidebar/author-signature.png"
              alt=""
            />
          </div>
          <div>
            <p className="my-2 font-semibold text-lg font-Barlow">Categories</p>
            <hr className="w-8 h-1 bg-stone-700 rounded-md mb-6" />
            <div className="grid grid-cols-2 gap-5 mb-12">
              <div>
                <img
                  className="w-80"
                  src="https://htmlguru.net/genial/assets/img/instagram/06.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-80"
                  src="https://htmlguru.net/genial/assets/img/instagram/01.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-80"
                  src="https://htmlguru.net/genial/assets/img/instagram/07.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-80"
                  src="https://htmlguru.net/genial/assets/img/instagram/02.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mb-12">
            <p className="my-2 font-semibold text-lg font-Barlow">Subscribe</p>
            <hr className="w-8 h-1 bg-stone-700 rounded-md mb-6" />
            <div className="flex gap-2 flex-wrap">
              <span className="p-3 bg-slate-100 flex items-center gap-1 text-sm cursor-pointer group hover:text-white hover:bg-blue-950">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
                <span className="">Facebook</span>
              </span>
              <span className="p-3 bg-slate-100 flex items-center gap-1 text-sm cursor-pointer group hover:text-white hover:bg-blue-950">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                </svg>
                <span className="">Twitter</span>
              </span>
              <span className="p-3 bg-slate-100 flex items-center gap-1 text-sm cursor-pointer group hover:text-white hover:bg-blue-950">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                </svg>
                <span className="">Instagram</span>
              </span>
              <span className="p-3 bg-slate-100 flex items-center gap-1 text-sm cursor-pointer group hover:text-white hover:bg-blue-950">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                </svg>
                <span className="">YouTube</span>
              </span>
              <span className="p-3 bg-slate-100 flex items-center gap-1 text-sm cursor-pointer group hover:text-white hover:bg-blue-950">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M5.077 9.457c0-.778.136-1.513.404-2.199a5.63 5.63 0 011.121-1.802 7.614 7.614 0 011.644-1.329 7.513 7.513 0 012.002-.844 8.57 8.57 0 012.185-.281c1.139 0 2.199.241 3.182.721a6.021 6.021 0 012.391 2.094c.614.915.919 1.95.919 3.104 0 .692-.068 1.369-.207 2.031a8.28 8.28 0 01-.646 1.913 6.605 6.605 0 01-1.082 1.617 4.723 4.723 0 01-1.568 1.114 4.962 4.962 0 01-2.045.417c-.489 0-.977-.115-1.459-.346-.482-.23-.828-.546-1.036-.951-.073.281-.173.687-.306 1.218-.128.53-.214.872-.252 1.027-.04.154-.114.411-.222.767a5.183 5.183 0 01-.281.769l-.344.674a7.98 7.98 0 01-.498.838c-.181.262-.405.575-.672.935l-.149.053-.099-.108c-.107-1.133-.162-1.811-.162-2.035 0-.663.079-1.407.235-2.233.153-.825.395-1.862.72-3.109.325-1.246.511-1.979.561-2.196-.229-.467-.345-1.077-.345-1.827 0-.599.187-1.16.562-1.688.376-.526.851-.789 1.427-.789.441 0 .783.146 1.028.439.246.292.366.66.366 1.109 0 .476-.158 1.165-.476 2.066-.318.902-.476 1.575-.476 2.022 0 .453.162.832.486 1.129a1.68 1.68 0 001.179.449c.396 0 .763-.09 1.104-.271a2.46 2.46 0 00.849-.733 6.123 6.123 0 001.017-2.225c.096-.422.17-.823.216-1.2.049-.379.07-.737.07-1.077 0-1.247-.396-2.219-1.183-2.915-.791-.696-1.821-1.042-3.088-1.042-1.441 0-2.646.466-3.611 1.401-.966.932-1.452 2.117-1.452 3.554 0 .317.048.623.139.919.089.295.186.53.291.704.104.171.202.338.291.492.09.154.137.264.137.33 0 .202-.053.465-.16.79-.111.325-.242.487-.4.487-.015 0-.077-.011-.185-.034a2.21 2.21 0 01-.979-.605 3.17 3.17 0 01-.659-1.022 6.986 6.986 0 01-.352-1.169 4.884 4.884 0 01-.132-1.153z" />
                </svg>
                <span className="">Pinterest</span>
              </span>
            </div>
          </div>
          <div>
            <p className="my-2 font-semibold text-lg font-Barlow">
              Popular Articles
            </p>
            <hr className="w-8 h-1 bg-stone-700 rounded-md mb-6" />
            <div className="flex gap-4 mb-8">
              <img
                src="https://htmlguru.net/genial/assets/img/sidebar/articles/01.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">
                  Best Wordpress Theme of 2018
                </h3>
                <p className="text-sm font-light mt-auto">Audust 23, 2015</p>
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <img
                src="https://htmlguru.net/genial/assets/img/sidebar/articles/02.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">
                  Best Wordpress Theme of 2018
                </h3>
                <p className="text-sm font-light mt-auto">Audust 23, 2015</p>
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <img
                src="https://htmlguru.net/genial/assets/img/sidebar/articles/03.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">
                  Best Wordpress Theme of 2018
                </h3>
                <p className="text-sm font-light mt-auto">Audust 23, 2015</p>
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <img
                src="https://htmlguru.net/genial/assets/img/sidebar/articles/04.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">
                  Best Wordpress Theme of 2018
                </h3>
                <p className="text-sm font-light mt-auto">Audust 23, 2015</p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <img
              src="https://htmlguru.net/genial/assets/img/sidebar/ad.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-2/3  md:pt-20">
          <div className="grid sm:grid-cols-2 gap-10">
            {SpecialitiArrey.map((special) => (
              <div
                key={special.id}
                className=" hover:-translate-y-2 duration-500 cursor-pointer"
              >
                <div className="flex justify-center">
                  <SpecialitiBox {...special} />
                </div>
                <h2 className="text-xl md:text-2xl mb-6 font-semibold font-Barlow">
                  Nature Photography Best Focus
                </h2>
                <p className="text-sm mb-5 font-light">
                  18-04-21 / Design, Travel, photography, Nature
                </p>
                <p className="mb-5">
                  When it comes to creating is a website for your business, an
                  attractive design will only get you far. With people
                  increasingly using their tablets and smartphones and shop
                  online,...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
