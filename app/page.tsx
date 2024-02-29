import doctorModel from "@/models/doctor";
import BestDoctors from "./components/templates/Home/BestDoctors";
import Hero from "./components/templates/Home/Hero";
import Specialities from "./components/templates/Home/Specialities";
import connectToDb from "@/utils/db";
import BaseUrl from "@/utils/baseUrl";
import { NextRequest } from "next/server";

export interface Doctor {
  username: string;
  email: string;
  password: string;
  _id: string;
  img: { filename: string }[];
}

const getData = async () => {
  try {
    const res = await fetch(`${BaseUrl}users/doctors`, {
      next: {
        revalidate: 1,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  let doctors: { users: Doctor[] } = await getData();

  return (
    <div className=" font-Work_Sans">
      <Hero doctors={doctors.users} />
      <Specialities />
      {/* <BestDoctors doctors={JSON.parse(JSON.stringify(doctors)) }/> */}
      <BestDoctors doctors={doctors.users} />
    </div>
  );
}
