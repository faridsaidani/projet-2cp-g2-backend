import React from "react";
import Accordion from "./Accordion";
import './index.css'

const FAQ = () => {
  return (
   
    
    <div className="mx-auto w-[86%]  mt-[86px]">
    <ul className="faq-heading  mb-[64px]">
            <li>Common Questions</li>
            <li>Find the answers to frequently asked questions</li>
        </ul>
   
    <div className="p-4 flex w-[100%] mx-auto justify-between bg-[#E3F1F4] rounded-lg ">
      <div className="flex-row w-[49%] ">
        <Accordion
          title="When did Webflow was founded?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
        <Accordion
          title="Why is Webflow the best nocode tool?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />

        <Accordion
          title="When did Webflow was founded?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
      </div>
      <div className="flex-row w-[49%]">
        {" "}
        <Accordion
          title="When did Webflow was founded?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
        <Accordion
          title="Why is Webflow the best nocode tool?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
        <Accordion
          title="When did Webflow was founded?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
      </div>
    </div>
    </div>
    
  );
};

export default FAQ;
