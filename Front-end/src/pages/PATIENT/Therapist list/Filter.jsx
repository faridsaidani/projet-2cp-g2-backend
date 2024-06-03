// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../../index.css'
import { Checkbox } from '@mui/material'
const Filter = () => {
  return (
    <div className="flex flex-col tex-[#063248] py-5 px-4 h-[83vh]  gap-[15px] w-[30%]  text-base font-semibold rounded-2xl bg-[#E3F1F4] ">

      <p className="text-3xl text-[#063248] ">Filter</p>
      <input
          type="search"
          className="w-[100%] py-3 bg-[#FFF] flex rounded-[7px] focus:outline-none text-[#063248] border border-solid border-[#9ea3a780]  self-stretch px-[21px]  text-base font-medium   "
          id="default-search"
          placeholder="Search "
          required
        />
      <div className="flex gap-5 text-xl whitespace-nowrap ">
        <p className="flex-1 text-primary1 leading-[24px] font-semibold text-[20px]">Specialistation</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15" stroke="#063248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </div>
      <div className=' gap-4'>
      <div className="flex p-0 mb-1 text-[#063248] items-center  ">
      <Checkbox className='fill-black text-black w-1 h-0' /> 
    
        <p className='text-primary1 text-[16px] font-normal leading-[19.2px]'>All Therapists</p>
      </div>
    
      <div className="flex p-0 mb-1 text-[#063248] items-center  ">
        <Checkbox className='fill-black text-black w-1 h-0' /> 
    
        <p className='text-primary1 text-[16px] font-normal leading-[19.2px]'>Clinical Psychologist</p>
      </div>
      <div className="flex p-0 mb-1 text-[#063248] items-center  ">
      <Checkbox className='fill-black text-black w-1 h-0' /> 
    
        <p className='text-primary1 text-[16px] font-normal leading-[19.2px]'>Consultant Psychologist</p>
      </div>
      <div className="flex p-0 mb-1 text-[#063248] items-center  ">
      <Checkbox className='fill-black text-black w-1 h-0' /> 
    
        <p className='text-primary1 text-[16px] font-normal leading-[19.2px]'>Familly Psychologist</p>
      </div>
      <div className=" text-primary1 text-[16px] font-semibold leading-[19.2px] mt-2">View all (16)</div>

      </div>
    
    
      <hr className=' border-[#a5a8aa]' />
      <div className="flex gap-5 text-xl whitespace-nowrap ">
        <p className="flex-1 text-primary1 leading-[24px] font-semibold text-[20px]">Topics</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15" stroke="#063248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </div>
  
    
      <div className=''>
      <div className="flex p-0 mb-1 text-[#063248] items-center  ">
      <Checkbox className='fill-black text-black w-1 h-0' /> 
    
        <p className='text-primary1 text-[16px] font-normal leading-[19.2px]'>All Therapists</p>
      </div>
    
      <div className="flex p-0 mb-1  text-[#063248] items-center  ">
        <Checkbox className='fill-black text-black w-1 h-0' /> 
    
        <p className='text-primary1 text-[16px] font-normal leading-[19.2px]'>Clinical Psychologist</p>
      </div>
      <div className="flex p-0 mb-1  text-[#063248] items-center  ">
      <Checkbox className='fill-black text-black w-1 h-0' /> 
    
        <p className='text-primary1 text-[16px] font-normal leading-[19.2px]'>Consultant Psychologist</p>
      </div>
      <div className="flex p-0 mb-1  text-[#063248] items-center  ">
      <Checkbox className='fill-black text-black w-1 h-0' /> 
    
        <p className='text-primary1 text-[16px] font-normal leading-[19.2px]'>Familly Psychologist</p>
      </div>
      <div className=" text-primary1 text-[16px] font-semibold leading-[19.2px] mt-2">View all (16)</div>

      </div>
      <hr className=' border-[#a5a8aa]' />
      <div className="flex gap-5 text-xl whitespace-nowrap ">
        <p className="flex-1 text-primary1 leading-[24px] font-semibold text-[20px]">Language</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15" stroke="#063248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </div>
    
   
      <hr className=' border-[#a5a8aa]' />
      <div className="flex gap-5 text-xl whitespace-nowrap ">
        <p className="flex-1 text-primary1 leading-[24px] font-semibold text-[20px]">Experience</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15" stroke="#063248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </div>
  
      <hr className=' border-[#a5a8aa]' />
      <div className="flex gap-3 mx-auto  text-sm whitespace-nowrap max-md:mt-10">
       

        <button className=" flex flex-row justify-center items-center gap-2.5 w-[119px] h-[100%] px-[37px] py-[9px] border-[0.5px]  border-[#298ea6ff] border-solid rounded-lg box-border">
            <p className=" text-[#298EA6] border-[#298ea6ff] text-sm  leading-[14px]  font-urbanist  font-[600]">
              Remov
            </p>
          </button>
          <button className=" flex flex-row justify-center items-center gap-2.5 w-[119px] h-[100%] px-7 py-2.5 rounded-lg box-border  bg-[rgba(41,142,166,1)]">
            <p className=" flex flex-col justify-center  text-[#FFF] border-[#ffffffff] text-sm  leading-[14px]  font-urbanist  font-[600] text-center">
              Apply
            </p>
          </button>
      </div>
    </div>
  )
}

export default Filter

