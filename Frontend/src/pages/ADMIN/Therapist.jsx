import React from 'react'
import TopSection from "../../components/TopSection";
import SideBarAdmin from "../../components/SideBarAdmin";
import ChatWithTherapist from "../../components/admin/ChatWithTherapist";


const Therapist = () => {
  return (
    <div className="grid grid-cols-[20%_80%] ml-5 mt-3 h-screen ">
    <SideBarAdmin currentPage='therapists'/>
    <div className=" flex flex-col my-10 ">
      <TopSection />
      <ChatWithTherapist/>
    
  
    </div>
  </div>
  )
}

export default Therapist