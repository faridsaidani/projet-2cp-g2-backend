import  { useState } from "react";
import React from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    
    <div className="py-[30px] px-[32px] w-[90%] my-[27px] mx-[12px]  bg-[#fff] rounded-[16px] " >
       <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full  bg-[white] cursor-pointer items-center mx-auto my-auto h-[20%] "
      >
        <span className="text-[#063248] font-['Urbanist'] font-[500] bg-none leading-[28px] my-auto text-center text-[22px]" >{title}</span>
         {accordionOpen ? <span >



<svg 
   width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="41.5" height="41.5" rx="8" fill="#298EA6"/>
<path d="M13.5 20.35C12.8649 20.35 12.35 20.8649 12.35 21.5C12.35 22.1351 12.8649 22.65 13.5 22.65H29.5C30.1351 22.65 30.65 22.1351 30.65 21.5C30.65 20.8649 30.1351 20.35 29.5 20.35H13.5Z" fill="white" stroke="white" stroke-width="0.3" stroke-linecap="round"/>
</svg>

</span> : <span><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="41.5" height="41.5" rx="8" fill="#E3F1F4"/>
<path d="M21.4844 11.85C20.8492 11.85 20.3344 12.3649 20.3344 13V29C20.3344 29.6351 20.8492 30.15 21.4844 30.15C22.1195 30.15 22.6344 29.6351 22.6344 29V13C22.6344 12.3649 22.1195 11.85 21.4844 11.85Z" fill="#4C606E" stroke="#4C606E" stroke-width="0.3" stroke-linecap="round"/>
<path d="M13.4844 19.85C12.8492 19.85 12.3344 20.3649 12.3344 21C12.3344 21.6351 12.8492 22.15 13.4844 22.15H29.4844C30.1195 22.15 30.6344 21.6351 30.6344 21C30.6344 20.3649 30.1195 19.85 29.4844 19.85H13.4844Z" fill="#4C606E" stroke="#4C606E" stroke-width="0.3" stroke-linecap="round"/>
</svg></span>} 
       
      </div> 
       <div
        className={`grid overflow-hidden mt-[10px] transition-all duration-300 ease-in-out text-[#6F6C90] text-[18px] leading-[30px] border border-[black] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-[#4C606E] ">{answer}</div>
      </div> 
    </div>
  );
};

export default Accordion;
