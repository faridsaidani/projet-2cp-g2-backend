// eslint-disable-next-line no-unused-vars
import React from 'react'
import './index.css'
import { useState } from "react"

const Admintherapistlist = () => {
  

    const Sidebarlist = [
      { id: 1,email:"janick_parisian@yahoo.com",  title: "Therapist",name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5"},
      { id: 2, email:"janick_parisian@yahoo.com", title: "Therapist ",name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5"},
      { id: 3,email:"janick_parisian@yahoo.com",  title: "Therapist",name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5"},
      { id: 4,email:"janick_parisian@yahoo.com",  title: "Therapist", name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5" },
      { id: 5,email:"janick_parisian@yahoo.com",  title: "Therapist", name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5" },
      { id: 6,email:"janick_parisian@yahoo.com",  title: "Therapist", name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5" },
      { id: 7,email:"janick_parisian@yahoo.com",  title: "Therapist", name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5" },
      { id: 8,email:"janick_parisian@yahoo.com",  title: "Therapist", name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5" },
      { id: 9,email:"janick_parisian@yahoo.com",  title: "Therapist", name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5" },
      { id: 10,email:"janick_parisian@yahoo.com",  title: "Therapist", name:"Jason Price", src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b7ct4o7yp7-127%3A1180?alt=media&token=b580fd5a-c5ca-437f-b9ea-024796297bd5" },
  
  ];
  
  
  
  // Sidebarlist--
  
  const MySidebarlist = Sidebarlist.map((side) => {
    
    return (
      // eslint-disable-next-line react/jsx-key
     
      // eslint-disable-next-line react/jsx-key
      <div className="
      shadow-custom     gap-2.5   border-[#b9b9b9ff] border-solid rounded-[18px] box-border  bg-[rgba(255,255,255,1)]
            bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/5dbbb5472b81ee571c419f13444a53394bd4c379134d684febf175dbcb4fbc16')] bg-cover bg-center bg-no-repeat
            px-12 py-8 
          
       
         "> 
  
  
      <div className="   flex flex-col justify-start items-center gap-9  h-[undefinedundefined] box-border">
      <img
        src={side.src}
        alt="Not Found"
        className=" w-[120px] h-[120px]"
      />
      <div className=" flex flex-col justify-start items-center gap-3 w-[100%] box-border">
        <div className=" flex flex-col justify-start items-center gap-2 w-[undefinedundefined] box-border">
          <p className=" flex flex-col justify-center text-[#063248] border-[#063248ff] text-base leading-4  font-urbanist  font-[700] text-center  tracking-[-0.1px]">
          { side.name}
          </p>
          <p className=" flex flex-col justify-center text-[#4C606E] border-[#4c606eff] text-sm  leading-[14px]  font-urbanist  font-[600] text-center  tracking-[0px]">
            {side.title}
          </p>
        </div>
        <p className=" flex flex-col justify-center  text-[#4C606E]  border-[#4c606eff] text-sm  leading-[14px]  font-urbanist  font-[400] text-center  tracking-[0px] mix-blend-normal">
          {side.email}
        </p>
      </div>
    </div>
     
      </div>
    );
  });
  

  return (
    <div className=' w-[98%] mt-6'>
      <p className=' mb-[32px]  text-[#063248] text-[32px] leading-8  font-urbanist  font-[700]  tracking-[-0.1px]'>My Therapists</p>

     <ul className='grid grid-cols-4 gap-4 w-full'>
    {MySidebarlist}
   </ul>
   
      </div>
  )
}

export default Admintherapistlist
