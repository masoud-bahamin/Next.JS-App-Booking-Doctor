import doctorModel from "@/models/doctor";
import BestDoctors from "./components/templates/Home/BestDoctors";
import Hero from "./components/templates/Home/Hero";
import Specialities from "./components/templates/Home/Specialities";
import connectToDb from "@/utils/db";

export interface Doctor{
  username : string;
  email : string ;
  password : string;
  _id : string ,
  img : {filename : string}[]
}

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/doctors" , {
    next : {
      revalidate : 3
    }
  })
  return res.json()
}

export default async function Home() {
  // connectToDb()
  // const doctors : Doctor[] = await doctorModel.find({})
  const doctors :{users :Doctor[]}  = await getData()
 
  
  return (
    <div>
      <Hero />
      <Specialities />
      {/* <BestDoctors doctors={JSON.parse(JSON.stringify(doctors)) }/> */}
      <BestDoctors doctors={doctors.users}/>
    </div>
  )
}
