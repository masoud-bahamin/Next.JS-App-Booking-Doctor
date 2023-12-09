import doctorModel from "@/models/doctor";
import BestDoctors from "./components/templates/Home/BestDoctors";
import Hero from "./components/templates/Home/Hero";
import Specialities from "./components/templates/Home/Specialities";
import connectToDb from "@/utils/db";
import BaseUrl from "@/utils/baseUrl";

export interface Doctor {
  username: string;
  email: string;
  password: string;
  _id: string,
  img: { filename: string }[]
}

const getData = async () => {
  try {
    const res = await fetch(`https://bahamin-booking.vercel.app/api/users/doctors`, {
      next: {
        revalidate: 3
      }
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }

}

export default async function Home() {
  // connectToDb()
  // const doctors : Doctor[] = await doctorModel.find({})
  let doctors: { users: Doctor[] } = await getData()

  return (
    <div>
      <Hero doctors={doctors.users} />
      <Specialities />
      {/* <BestDoctors doctors={JSON.parse(JSON.stringify(doctors)) }/> */}
      <BestDoctors doctors={doctors.users} />
    </div>
  )
}
