import React from 'react'


  
// eslint-disable-next-line react/prop-types
const REquest = ({ open, onClose }) => {
    if (!open) return null;
  return (
    <div onClick={onClose} >


<div 
onClick={(e) => {
    e.stopPropagation();
  }}
 className="  px-[30px] py-[25px] rounded-[20px] box-border  bg-[rgba(255,255,255,1)]
 flex flex-col justify-center items-center gap-6  w-[35%]  h-[324px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white shadow-lg 
 ">
      <div className=" flex flex-col justify-start items-center gap-5 w-[undefinedundefined] box-border">
        <div className=" flex flex-col justify-between items-center  gap-[18px] w-[100%] h-[100%] box-border">
        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="44" height="44" rx="22" fill="#298EA6" fillOpacity="0.2"/>
<path d="M31.5 24V16C31.5 15.4696 31.2893 14.9609 30.9142 14.5858C30.5391 14.2107 30.0304 14 29.5 14H15.5C14.9696 14 14.4609 14.2107 14.0858 14.5858C13.7107 14.9609 13.5 15.4696 13.5 16V30C13.5 30.5304 13.7107 31.0391 14.0858 31.4142C14.4609 31.7893 14.9696 32 15.5 32H23.5" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.5 12V16" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 12V16" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 20H31.5" stroke="#298EA6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.5 30L28.5 32L32.5 28" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          <p className="  border-[#063248ff] text-2xl text-[#063248] leading-6  font-urbanist  font-[700]">
            Appointement Request Sent
          </p>
        </div>
      </div>
      <div className=" text-[#4C606E] flex flex-col justify-center items-center gap-3 w-[100%] box-border">
        <p className=" flex flex-col justify-center  border-[#4c606eff] text-base leading-4  font-urbanist  font-[500] text-center">
          We’ve reserved your time, but your appointement has not been
          confiremed yet by therapist
        </p>
        
        <p className=" flex flex-col justify-center  border-[#4c606eff] text-base leading-4  font-urbanist  font-[500] text-center">
          Your appointement will be confiremed shortly and we will notify you at  <span className='font-bold'>Y_Zagorulko@gmail.com</span>
          
        </p>
      </div>
      <div className=" flex flex-row justify-start items-start gap-3 w-[undefinedundefined] box-border">
      <button       className=" text-[#298ea6ff] flex flex-row justify-center items-center gap-2.5 h-[100%] px-[66px] py-[13px] border-[0.5px]  border-[#298ea6ff] border-solid rounded-lg box-border">


      
<p >
  Cancel
</p>

</button>
<button          className="   items-center gap-2.5 h-[100%] px-[31px] py-3.5 rounded-lg box-border  text-[white] bg-[rgba(41,142,166,1)] flex flex-col justify-center  border-[#ffffffff]  text-[15px]  leading-[15px]  font-urbanist  font-[600] text-center">
        
My Appointements


</button>
      </div>
    </div>










      {/* <div



        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" flex flex-col justify-center items-center gap-6  w-[35%]  h-[324px] px-[30px] py-[25px] rounded-[20px] box-border  bg-[rgba(255,255,255,1)] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white shadow-lg "
      >
        
       
      <div className="  flex flex-col justify-center items-cente items-start gap-5 w-[100%] box-border">
        <div className=" flex flex-col justify-start items-start  gap-[18px] w-[100%] box-border">
         


<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="21" fill="#298EA6" fillOpacity="0.2"/>
<path d="M29 14H15C13.8954 14 13 14.8954 13 16V30C13 31.1046 13.8954 32 15 32H29C30.1046 32 31 31.1046 31 30V16C31 14.8954 30.1046 14 29 14Z" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26 12V16" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 12V16" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 20H31" stroke="#298EA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>






          <p className="  border-[#063248ff] text-xl leading-5  font-urbanist  font-[700]">
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
        




      </div>
      <div className="   border-[#298ea6ff]  text-[15px]  text-[#298ea6ff] leading-[15px]  font-urbanist  font-[600] flex flex-row justify-start items-start gap-3 w-[undefinedundefined] box-border">
        <button       className=" flex flex-row justify-center items-center gap-2.5 h-[100%] px-[66px] py-[13px] border-[0.5px]  border-[#298ea6ff] border-solid rounded-lg box-border">


      
          <p >
            Cancel
          </p>
    
        </button>
        <button          className="   items-center gap-2.5 h-[100%] px-[31px] py-3.5 rounded-lg box-border  text-[white] bg-[rgba(41,142,166,1)] flex flex-col justify-center  border-[#ffffffff]  text-[15px]  leading-[15px]  font-urbanist  font-[600] text-center">
                  
        My Appointements
        
    
        </button>
      </div>
 


      </div> */}
    </div>
  )
}

export default REquest
