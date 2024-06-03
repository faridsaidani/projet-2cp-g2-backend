import React from 'react'
import SideBarAdmin from "../../components/SideBarAdmin";
import TopBar from "../../components/TopBar";
import AppointmentsComponent from '../../components/AppointmentsComponent';

const Appointments = () => {
  return (
    <div>
        <SideBarAdmin></SideBarAdmin>
        <TopBar></TopBar>
        <div className='flex justify-between items-center fixed  w-[74%] text-urbanist mr-10 right-0 bottom-0 pb-2 border overflow-y-auto' >
            <div className='flex flex-col justify-between w-[70%] border h-auto pt-10'>
                <span className="text-3xl text-primdark font-semibold leading-38.4 tracking-tighter text-left gap-0 border mb-4 ">
                    Appointments
                </span>
                <AppointmentsComponent></AppointmentsComponent>
                    
                

            </div>
            <div >
                {/*the section at the right*/}
            </div>

        </div>

    </div>
  )
}

export default Appointments