import React from "react";
import Accordion from "./Accordion";
import './index.css'

const FAQ = () => {
  return (
   
    
    <div className="mx-auto w-[86%]  my-[86px]">
        <ul className="faq-heading  mb-[64px]">
            <li>Common Questions</li>
            <li>Find the answers to frequently asked questions</li>
        </ul>
   
    <div className="p-4 flex w-[100%] mx-auto justify-between bg-[#E3F1F4] rounded-lg ">
      <div className="flex-row w-[49%] ">
      <Accordion
          title="How easy is it to find a therapist on the platform?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
        <Accordion
          title="How responsive is the support team?"
          answer="Very responsive. They're quick to address any questions or concerns you may have.
          don’t hesitate to ask Us"
        />
    

        <Accordion
          title="Are virtual sessions convenient?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
      </div>
      <div className="flex-row w-[49%]">
        {" "}
        <Accordion
          title="Can I book appointments easily?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
        <Accordion
          title="Are the therapists qualified?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
        <Accordion
          title="Is messaging my therapist between sessions possible?"
          answer="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
        />
      </div>
    </div>
    </div>
    
  );
};

export default FAQ;
