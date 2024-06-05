import React from 'react'
import SideBarTherapist from "../../components/SideBarTherapist";
import TopBar from "../../components/TopBar";
import AppointmentsRequests from '../../components/AppointmentRequests';
import NextAppointment from '../../components/NextAppointment';
import CalenderSideBar from "../../components/CalenderSideBar"
import IMG from '/assets/MariaDolce.png';
const OverviewTh = () => {
  return (
    <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
        <SideBarTherapist currentPage='overview' />
        
        <div className='flex flex-col justify-center overflow-hidden my-10 pt-12 pb-12'>
            <TopBar />
            <span className="text-3xl text-primdark font-semibold leading-[38.4px] tracking-tighter text-left mt-4">
                        Overview
            </span>
            <div className='flex h-full'>
                <div className='flex flex-col w-[70%] overflow-y-auto py-4 mb-10 pr-4'>
                    <div className='flex h-full '>
                        <AppointmentsRequests/>
                        <NextAppointment 
                        photo={IMG}  
                        timing="9:15 - 11:00 AM (1 hour 30 min)" 
                        name="Maria Dolce Gabana" 
                        age="32" 
                        topics="Depressive States, Panic attacks,Isolation"/>
                    </div>
                </div>
                <div className='w-[28%] overflow-y-auto mb-10 p-4'>
                    <CalenderSideBar />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OverviewTh
