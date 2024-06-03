import React from 'react'
import { WiTime9 } from "react-icons/wi";
import IMG from '/assets/MariaDolce.png';

const CompletedAppointment = ({ title, timing, name, age }) => {
  return (
    <div className='flex flex-col justify-between items-center  h-auto border rounded-xl p-4 shadow-xl'>
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
              <img src={IMG} alt="Profile" className='rounded-full' />
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

/*
  Example <CompletedAppointment
      title='Deppressive states,Reasons and methods of struggle'
      timing='July 7 , 9:15 - 11:00 AM (1 hour 30 min)'
      name='Maria Dolce Gabana'
      age='32'
      >
      </CompletedAppointment>
 */



export default CompletedAppointment