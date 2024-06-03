import React from 'react'
import CompletedAppointmentSB from "./CompletedAppointmentSB"
import IMG from '/assets/MariaDolce.png';
import { MdOutlineTrendingUp } from "react-icons/md";

import Calendar from './Calendar';


const CalenderSideBar = () => {
  return (
    <div className='border rounded-lg bg-primback p-2'>
        <div className='flex justify-between'>
            <p className='font-urbanist text-20 font-bold leading-24 text-left text-primdark'>My therapists</p>
            <button className='font-urbanist text-xs font-medium leading-4 text-left text-sechover px-2 border border-sechover rounded-lg'>View all</button>
        </div>
        {/*statistics*/}
        <div className='grid grid-cols-2 my-2 gap-2'>

                <div className='p-4 bg-secwhite rounded-lg text-primdark'>
                    <p className='font-urbanist text-base font-semibold leading-5 text-left'>Total</p>
                    <p className='font-urbanist text-base font-semibold leading-5 text-left'>Patients</p>
                    <p className='font-urbanist text-4xl font-bold leading-12 text-left'>982</p>
                    <p className='flex font-urbanist text-xs font-semibold leading-3 text-left text-sechover mt-2'><MdOutlineTrendingUp className='mr-2' /> 8.5%</p>
                </div>

                <div className='p-4 bg-secwhite rounded-lg text-primdark'>
                    <p className='font-urbanist text-base font-semibold leading-5 text-left'>New</p>
                    <p className='font-urbanist text-base font-semibold leading-5 text-left'>Requests</p>
                    <p className='font-urbanist text-4xl font-bold leading-12 text-left'>24</p>
                    <p className='font-urbanist text-xs font-semibold leading-3 text-left text-secdarksemi mt-2'>last 30 days</p>
                </div>

                <div className='p-4 bg-secwhite rounded-lg text-primdark'>
                    <p className='font-urbanist text-base font-semibold leading-5 text-left'>Personal</p>
                    <p className='font-urbanist text-base font-semibold leading-5 text-left'>Consultations</p>
                    <p className='font-urbanist text-4xl font-bold leading-12 text-left'>182</p>
                    <p className='font-urbanist text-xs font-semibold leading-3 text-left text-secdarksemi mt-2'>05 July 2024</p>
                </div>

                
                <div className='p-4 bg-secwhite rounded-lg text-primdark'>
                    <p className='font-urbanist text-base font-semibold leading-5 text-left'>Today</p>
                    <p className='font-urbanist text-base font-semibold leading-5 text-left'>Consultations</p>
                    <p className='font-urbanist text-4xl font-bold leading-12 text-left'>05</p>
                    <p className='font-urbanist text-xs font-semibold leading-3 text-left text-secdarksemi mt-2'>last 30 days</p>
                </div>
            

        </div>
        {/*calender*/}
        <Calendar/>
        
        <div className='flex justify-between my-4'>
            <p className='font-urbanist text-20 font-bold leading-24 text-left text-primdark'>Today appointments</p>
            <button className='font-urbanist text-xs font-medium leading-4 text-left text-sechover px-2 border border-sechover rounded-lg'>View all</button>
        </div>
        <p className='font-urbanist text-xs font-medium leading-4 text-left text-primdark'>You have two events</p>

        <CompletedAppointmentSB 
        title='Deppressive states,Reasons and methods of struggle'
        timing='July 7 , 9:15 - 11:00 AM (1 hour 30 min)'
        name='Maria Dolce Gabana'
        age='32'
        photo={IMG}
        />
        
    </div>
  )
}

export default CalenderSideBar