import React from "react";
import SliderApp from "./slider";

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
