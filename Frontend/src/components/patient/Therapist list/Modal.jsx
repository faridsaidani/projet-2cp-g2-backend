import React from 'react';
import '../../index.css'
import REquest from './REquest';
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ open, onClose }) => {
  const [openRequest, setOpenRequest] = useState(false);

  if (!open) return null;
  return (
    <div onClick={onClose} >
      <div



        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" flex flex-col justify-center items-center gap-6  w-[33%]  h-[590px] px-[30px] py-[25px] rounded-[20px] box-border  bg-[rgba(255,255,255,1)] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white shadow-lg "
      >
        
       
      <div className=" flex flex-col justify-start items-start gap-5 w-[100%] box-border">
        <div className=" flex flex-col justify-start items-start  gap-[18px] w-[100%] box-border">
         
<div className='flex w-[100%] justify-between'>


<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="21" fill="#298EA6" fillOpacity="0.2"/>
<path d="M29 14H15C13.8954 14 13 14.8954 13 16V30C13 31.1046 13.8954 32 15 32H29C30.1046 32 31 31.1046 31 30V16C31 14.8954 30.1046 14 29 14Z" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26 12V16" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 12V16" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 20H31" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


<svg className='hover:cursor-pointer' onClick={onClose} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.75 13.75H16.25C14.8693 13.75 13.75 14.8693 13.75 16.25V33.75C13.75 35.1307 14.8693 36.25 16.25 36.25H33.75C35.1307 36.25 36.25 35.1307 36.25 33.75V16.25C36.25 14.8693 35.1307 13.75 33.75 13.75Z" stroke="#298EA6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28.75 21.25L21.25 28.75" stroke="#298EA6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.25 21.25L28.75 28.75" stroke="#298EA6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>



          <p className="  border-[#063248ff] text-xl leading-5  font-urbanist  text-primary1 font-[700]">
            Make An Appointement{" "}
          </p>
        </div>
        <div className=" flex flex-col justify-start items-start gap-3 w-[undefinedundefined] box-border">
          <p className="  border-[#063248ff] text-base leading-4  font-urbanist  font-[600]">
            Topic
          </p>
       

          <input type="text" placeholder='What are you bothered you'  className='border-[#4c606e7f] flex flex-row justify-center items-center gap-2.5 w-[100%] pl-[9px] pr-[261px] py-[13px] border-[0.5px]  border-solid rounded-lg box-border text-xs leading-3  font-urbanist  font-[500]'/>
           
        
        </div>
        <div className=" flex flex-col justify-start items-start gap-3 w-[undefinedundefined] box-border">
          <p className="  border-[#063248ff] text-base leading-4  font-urbanist  font-[600]">
            Description
          </p>
          <input type="text"  placeholder='What are you bothered you'  className="  border-[#4c606e7f] text-xs leading-3  font-urbanist  font-[500] justify-center items-center  w-[100%] pl-[9px]  pt-[13px] pb-[69px] border-[0.5px] pr-[261px] border-solid rounded-lg box-border"/>
          
      
        </div>
        <div className=" flex flex-col justify-start items-start gap-3 w-[undefinedundefined] box-border">
          <div className=" flex flex-row justify-start items-start  gap-[22px] w-[100%] box-border">
            <div className=" flex flex-col justify-start items-start gap-3 h-[100%] box-border">
              <label className="  text-primary1 border-[#063248ff] text-base leading-4  font-urbanist  font-[600]">
                Time
              </label>
              <div className=" flex flex-row justify-center items-center  gap-[71px] w-[100%] p-[11px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg box-border">
                {/* <p className="  border-[#4c606eff] text-base leading-4  font-urbanist  font-[500]">
                  8 july, 2023
                </p> */}
            <input type="time" id="meetingTime" placeholder="HH:MM" className='text-primary1'/>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fxhz40b2zdn-64%3A26767?alt=media&token=226483ee-cb51-4809-84bc-ac3ba6872f90"
                  alt="Not Found"
                  className=" w-6 h-[100%]"
                />
              </div>
            </div>
            <div className=" flex flex-col justify-start items-start gap-3 h-[100%] box-border">
              <label className=" text-primary1 border-[#063248ff] text-base leading-4  font-urbanist  font-[600]">
                Date
              </label>
              <div className=" flex flex-row justify-center items-center  gap-[71px] w-[100%] p-[11px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg box-border">
                {/* <p className="  border-[#4c606eff] text-base leading-4  font-urbanist  font-[500]">
                  10:00 AM
                </p> */}
                <input type="date" id="meetingDate"/>
                
                

                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fxhz40b2zdn-64%3A26772?alt=media&token=d8628705-718f-47d0-9879-d45707d10c7c"
                  alt="Not Found"
                  className=" w-6 h-[100%]"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-row justify-center items-center gap-3 w-[undefinedundefined] box-border">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fxhz40b2zdn-64%3A26774?alt=media&token=4142e0e8-10c9-43b9-9cd5-de7ba4886ee9"
              alt="Not Found"
              className=" w-[42.31px] h-[100%]"
            />
            <p className="  border-[#4c606eff]  text-[13px]  leading-[13px]  font-urbanist  font-[600]">
              Reminder 30 minutes before the start of the session
            </p>
          </div>
        </div>
      </div>
      <div className="   border-[#298ea6ff]  text-[15px]  text-[#298ea6ff] leading-[15px]  font-urbanist  font-[600] flex flex-row justify-start items-start gap-3 w-[undefinedundefined] box-border">
        <button       className=" flex flex-row justify-center items-center gap-2.5 h-[100%] px-[66px] py-[13px] border-[0.5px]  border-[#298ea6ff] border-solid rounded-lg box-border">


      
          <p >
            Cancel
          </p>
    
        </button>
      
          
        <button       onClick={() => setOpenRequest(true)}
             className="   items-center gap-2.5 h-[100%] px-[31px] py-3.5 rounded-lg box-border  text-[white] bg-[rgba(41,142,166,1)] flex flex-col justify-center  border-[#ffffffff]  text-[15px]  leading-[15px]  font-urbanist  font-[600] text-center">
                  
            Book Appointement
        
    
        </button>
        {/* <REquest open={openRequest} onClose={() => setOpenRequest(false)} /> */}
      </div>
 


      </div>
    </div>
  );
};

export default Modal;
