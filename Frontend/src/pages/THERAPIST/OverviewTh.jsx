import React from 'react'
import SideBarAdmin from "../../components/SideBarAdmin";
import TopBar from "../../components/TopBar";
import AppointmentRequests from '../../components/AppointmentRequests';
import NextAppointment from '../../components/NextAppointment';
import Maria from '../../assets/MariaDolce.png';
const OverviewTh = () => {
  return (
    <div>
        <SideBarAdmin></SideBarAdmin>
        <TopBar></TopBar>
        <div className='flex justify-between items-center fixed  w-[74%] h-[100%] text-urbanist mr-10 right-0 bottom-0 pb-2 overflow-auto'>
            
            <div className='flex flex-col justify-between w-[70%] border'>
                {/*Top section*/}
                <span className="text-3xl text-primdark font-semibold leading-38.4 tracking-tighter text-left gap-0 border ">
                   Overview
                </span>
                <div className='flex justify-between h-[50%] border'>
                    <div className='w-[60%] h-[100%]'>
                        <AppointmentRequests></AppointmentRequests>
                    </div>
                    <div>
                        <NextAppointment
                          timing='July 7 , 9:15 - 11:00 AM (1 hour 30 min)'
                          name='Maria Dolce Gabana'
                          age='32'
                          topics='Deppressive states , Panic attacks, isolation'
                          photo={Maria}
                          >
                        </NextAppointment>
                    </div>
                </div>
                {/*Buttom setion charts*/}
                <div className='flex justify-between items-center w-[100%] h-[35%] border border-red-500 '>
                    <div className='w-[54%] h-[100%] border'>
                    
                    </div>
                    <div className=' w-[44%] h-[100%] border '>

                    </div>
                </div>



            </div>

            <div >
                {/*the section at the right*/}
            </div>
        </div>
    </div>
  )
}

export default OverviewTh