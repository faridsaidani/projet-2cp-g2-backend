import React from 'react'
import { WiTime9 } from "react-icons/wi";

const CompletedAppointmentSB = ({ title, timing, name, age, photo }) => {
  return (
    <div className='flex flex-col justify-between items-center w-[100%] h-[18%] border rounded-xl p-4 shadow-xl bg-secwhite'>
      {/* Appointment Title */}
      <h4 className='font-urbanist text-lg font-bold leading-6 text-left text-primdark'>{title}</h4>

      {/* Appointment Timing */}
      <div className='flex items-center font-urbanist text-xs font-semibold leading-3 text-left text-graycolor w-[100%] mt-2'>
        <WiTime9 className='mr-2' />
        {timing}
      </div>

      {/* Profile */}
      <div className='flex flex-start space-x-2 w-[100%] items-center m-4'>
        <div>
          <img src={photo} alt="Profile" className='rounded-full' />
        </div>
        <div className='flex flex-col'>
          {/* Name */}
          <p className='font-urbanist text-sm font-semibold leading-3 text-left text-primdark'>{name}</p>
          {/* Age */}
          <p className='font-urbanist text-sm font-semibold leading-3 text-left text-graycolor mt-2'>{age} years old</p>
        </div>
      </div>
    </div>
  )
}

export default CompletedAppointmentSB;
