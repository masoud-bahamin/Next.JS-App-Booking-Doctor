
import BestDoctors from "./components/templates/Home/BestDoctors";
import Hero from "./components/templates/Home/Hero";
import Specialities from "./components/templates/Home/Specialities";
import userModel from "@/models/user";
import connectToDb from "@/utils/db";

export interface Doctor {
  username: string;
  email: string;
  password: string;
  _id: string;
  img: { filename: string }[];
}

export default async function Home() {
  connectToDb();
  let doctors: { users: Doctor[] } = await userModel
    .find({ role: "DOCTOR" })
    .populate("img")
    .lean();

  return (
    <div className=" font-Work_Sans">
      <Hero doctors={JSON.parse(JSON.stringify(doctors))} />
      <Specialities />
      <BestDoctors doctors={JSON.parse(JSON.stringify(doctors))} />
    </div>
  );
}
