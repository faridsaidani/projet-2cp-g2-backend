import React from 'react'
import TopSection from "../../components/TopSection";
import Sidebarr from "../../components/Sidebarr";
import ChatComponent from "../../components/chat/ChatComponent"
const Chat = () => {
  return (
    <div>
        <TopSection/>
        <Sidebarr/>
        <ChatComponent/>
    </div>
  )
}

export default Chat