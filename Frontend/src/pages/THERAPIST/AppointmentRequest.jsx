import React from 'react'
import SideBarTherapist from "../../components/SideBarTherapist";
import TopSection from "../../components/TopSection";
import CalenderSideBar from '../../components/CalenderSideBar';
import AppointRequest from '../../components/AppointRequest';


export const AppointmentRequest = () => {
  return (
    <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
      <SideBarTherapist currentPage='overview'/>
      <div className='flex flex-col my-10 overflow-hidden'>
        <TopSection/>
        <div className='flex h-full mt-10'>
          <div className='flex flex-col w-[70%] pr-4 overflow-y-auto'>
            <AppointRequest/>
          </div>
          <div className='w-[28%] overflow-y-auto'>
            <CalenderSideBar/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default AppointmentRequest