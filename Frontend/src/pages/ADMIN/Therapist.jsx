import React from 'react'
import TopSection from "../../components/TopSection";
import Sidebarr from "../../components/Sidebarr";
import ChatWithTherapist from "../../components/admin/ChatWithTherapist";

const Therapist = () => {
  return (
    <div className="grid grid-cols-[20%_80%] ml-5 mt-3 h-screen ">
    <Sidebarr/>
    <div className=" flex flex-col ">
      <TopSection />
      <ChatWithTherapist/>
    
  
    </div>
  </div>
  )
}

export default Therapist