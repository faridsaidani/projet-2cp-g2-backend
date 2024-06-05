import React from 'react'
import TopSection from "../../components/TopSection";
import SideBarTherapist from "../../components/SideBarTherapist";
import ChatComponent from "../../components/chat/ChatComponent"

const Chat = () => {
  return (
    <div className="grid grid-cols-[20%_80%] ml-5 mt-3 h-screen ">
        <SideBarTherapist currentPage='messages'/>
        <div className=" flex flex-col my-10">
          <TopSection/>
          <ChatComponent/>
        </div>
    </div>
  )
}

export default Chat