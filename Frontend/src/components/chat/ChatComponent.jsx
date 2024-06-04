import React from "react";
import Conversation from "./Conversation";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className=" w-[98%] mt-6 ">
        
        
      <div className="flex w-[100%]  justify-between   h-[90vh]  ">
        <div className="w-[31%] h-screen rounded-[18px]  bg-[#E3F1F4] px-[18px] py-[21px]  hidden md:block">
          <div className="h-full overflow-y-auto">
            <div className=" text-[#063248]  mb-[32px] font-[600]  leading-[38.4px] text-[32px] font-urbanist ">
              Messages
            </div>

            <div className=" flex    dark:text-[gray ] items-center justify-between w-[48%] mb-[18px] ">
            
              <p className="text-[#4C606E] text-[20px] leading-[24px] font-medium font-urbanist">
                Recent Chats
              </p>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="21.2094"
                  y="0.275"
                  width="21.45"
                  height="21.0578"
                  rx="2.85"
                  transform="rotate(90 21.2094 0.275)"
                  stroke="#298EA6"
                  strokeWidth="0.3"
                />
                <path
                  d="M7.00156 9.125L10.6805 12.875L14.3594 9.125"
                  stroke="#298EA6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Conversation />
          </div>
        </div>
        <div className="flex-grow w-[48%] h-screen p-2 rounded-md">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Chat;
