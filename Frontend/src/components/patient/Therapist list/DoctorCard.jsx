import React from 'react'
import '../../index.css'

const DoctorCard = () => {
  return (
    <div className="  flex flex-col justify-start items-center gap-8 w-[26%] h-[453px] px-[25px] py-5 rounded-xl box-border  bg-[rgba(255,255,255,1)] shadow-multiple">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x2og7113ea-64%3A26549?alt=media&token=31c37af4-6e70-4aa9-8498-d50123112f97"
      alt="Not Found"
      className=" w-[130px] h-[130px]"
    />
    <div className=" flex flex-col justify-center items-center gap-6 w-[100%] box-border">
      <div className=" flex flex-col justify-start items-center gap-3 w-[100%] box-border">
        <p className="  border-[#063248ff] text-xl leading-5 text-[#063248] font-urbanist  font-[600]">
          Dr. Bellatreche Hibatallah
        </p>
        <p className="  border-[#4c606eff] text-base leading-4  font-urbanist  font-[600]">
          8 years of experience
        </p>
        <div className=" text-[#4C606E] flex flex-col justify-center items-center gap-1.5 w-[undefinedundefined] box-border">
          <p className="  border-[#4c606ee5] text-xs leading-3  font-urbanist  font-[500]">
            Narrative psychoTherapist
          </p>
          <p className="  border-[#4c606ee5] text-xs leading-3  font-urbanist  font-[500]">
            Familly psychologist
          </p>
          <p className="  border-[#4c606ee5] text-xs leading-3  font-urbanist  font-[500]">
            (+1500 Patients )
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-start items-start gap-3 w-[undefinedundefined] box-border">
        <div className=" flex flex-row justify-center items-center gap-2.5 w-[100%] px-[39px] py-3.5 rounded-lg box-border  bg-[#298EA6]">
          <p className="  border-[#ffffffff] text-[#fff] text-base leading-4  font-urbanist  font-[600]">
            Make Appointement
          </p>
        </div>
        <div className=" flex flex-row justify-center items-center gap-2.5 w-[100%] px-[39px] py-3.5 rounded-lg box-border  bg-[#E3F1F4]">
          <p className="  border-[#298ea6ff] text-[#298EA6] text-base leading-4  font-urbanist  font-[600]">
            Chat with Therapist
          </p>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default DoctorCard
