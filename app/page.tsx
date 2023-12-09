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

// const getData = async () => {
//   try {
//     const res = await fetch(`${BaseUrl}users`, {
//       next: {
//         revalidate: 3
//       }
//     })
//     return res.json()
//   } catch (error) {
//     console.log(error);
//   }

// }

export default async function Home() {
  // connectToDb()
  // const doctors : Doctor[] = await doctorModel.find({})
  // let doctors: { users: Doctor[] } = await getData()

  let doctors : { users: Doctor[] } = {users : [
    {
      username: "masoudddd",
      email: "masemail",
      password: "123456",
      _id: "vbghjkmnb",
      img: [{ filename: "1701971662908u1.jpg" }]
    },
    {
      username: "masoudddd1122",
      email: "masemail22",
      password: "12345622",
      _id: "vbghjkmnb22",
      img: [{ filename: "1701971662908u1.jpg" }]
    },
  ]}

  return (
    <div>
      <Hero doctors={doctors.users}/>
      <Specialities />
      {/* <BestDoctors doctors={JSON.parse(JSON.stringify(doctors)) }/> */}
      <BestDoctors doctors={doctors.users} />
    </div>
  )
}
