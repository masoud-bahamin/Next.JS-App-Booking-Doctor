import React from "react";
import SpecialitiBox from "../../modules/SpecialitiBox/SpecialitiBox";
import SliderApp from "./slider";

const SpecialitiArrey = [
  { id: 1, img: "/img/icon3.png", title: "Cardiologist" },
  { id: 2, img: "/img/icon4.png", title: "Dentist" },
  { id: 3, img: "/img/icon10.png", title: "Labratory" },
  { id: 4, img: "/img/icon8.png", title: "MRI Scans" },
  { id: 5, img: "/img/icon2.png", title: "Neurology" },
  { id: 6, img: "/img/icon6-4.png", title: "Orthopedic" },
];

export default function Specialities() {
  return (
    <div className="py-12 container mx-auto px-4 md:px-0">
      <div className="flex justify-between mb-12">
        <h3 className="text-xl lg:text-3xl font-medium lg:font-bold">
          Specialities
        </h3>
      </div>
      <SliderApp />
      <div className="text-center mt-8">
        <button className="btn">See All Specialities</button>
      </div>
    </div>
  );
}
