"use client";

import React from "react";
// eslint-disable-next-line
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
} from "swiper/modules";
// eslint-disable-next-line
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SpecialitiBox from "../../modules/SpecialitiBox/SpecialitiBox";

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

const SliderApp = () => {
  return (
    <main className="container relative py-24 h-[350px]">
      <Swiper
        className="h-[200px]"
        modules={[Pagination, Mousewheel, Navigation, Scrollbar]}
        // slidesPerView={6}
        threshold={2}
        // spaceBetween={20}
        navigation={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.1,
          releaseOnEdges: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1184: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {SpecialitiArrey.map((i) => (
          <SwiperSlide key={i.id} className="rounded-lg text-center border">
            <SpecialitiBox {...i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default SliderApp;
