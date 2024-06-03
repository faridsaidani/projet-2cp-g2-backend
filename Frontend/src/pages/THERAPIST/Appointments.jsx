import React from 'react'
import SideBarTherapist from "../../components/SideBarTherapist";
import TopBar from "../../components/TopBar";
import AppointmentsComponent from '../../components/AppointmentsComponent';
import CompletedAppointment from '../../components/CompletedAppointment';
import CalenderSideBar from "../../components/CalenderSideBar"

const Appointments = () => {
  return (
    <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
        <SideBarTherapist />
        
        <div className='flex flex-col justify-center overflow-hidden py-10'>
            <TopBar />
            <div className='flex h-full'>
                <div className='flex flex-col w-[70%] overflow-y-auto  mb-10 p-4'>
                    <span className="text-3xl text-primdark font-semibold leading-[38.4px] tracking-tighter text-left mb-4 ">
                        Appointments
                    </span>
                    <AppointmentsComponent />
                    <div>
                        <p className='text-xl text-primdark font-semibold leading-38.4 tracking-tighter text-left gap-0 my-4'>Completed Appointments()</p>
                        <div className='grid grid-cols-3 gap-4'>
                            <CompletedAppointment
                                title='Depressive states, Reasons and methods of struggle'
                                timing='July 7, 9:15 - 11:00 AM (1 hour 30 min)'
                                name='Maria Dolce Gabana'
                                age='32'
                            />
                            <CompletedAppointment
                                title='Depressive states, Reasons and methods of struggle'
                                timing='July 7, 9:15 - 11:00 AM (1 hour 30 min)'
                                name='Maria Dolce Gabana'
                                age='32'
                            />
                            <CompletedAppointment
                                title='Depressive states, Reasons and methods of struggle'
                                timing='July 7, 9:15 - 11:00 AM (1 hour 30 min)'
                                name='Maria Dolce Gabana'
                                age='32'
                            />
                        </div>
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

export default Appointments
