import React from 'react'
import TopSection from "../../components/TopSection";
import SideBar from "../../components/SideBar";
import ChatComponent from "../../components/chat/ChatComponent"
const Chat = () => {
  return (
  
    <div className="grid grid-cols-[20%_80%] ml-5 mt-3 h-screen ">
      <SideBar currentPage='messages' />
      <div className=" flex flex-col my-10">
        <TopSection />
        <ChatComponent/>
    
      </div>
    </div>
     
      
   
  )
}

export default Chat