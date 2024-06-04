import React from 'react'
import TopSection from "../../components/TopSection";
import SideBar from "../../components/SideBar";
import Therapistliste3 from "../../components/patient/Therapist list/TherProfile"

const Therapist = () => {
  return (
    
    <div className="grid grid-cols-[20%_80%] ml-5 mt-3 h-screen ">
    <SideBar />
    <div className=" flex flex-col my-10">
      <TopSection />
      <Therapistliste3/>
  
    </div>
  </div>


  
  )
}

export default Therapist