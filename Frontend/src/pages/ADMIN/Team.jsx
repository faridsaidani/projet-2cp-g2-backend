import React from 'react'
import SideBarAdmin from "../../components/SideBarAdmin";
import TopBar from "../../components/TopBar"
import TeamCards from '../../components/TeamCards';


const Team = () => {
  return (
    <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
        <SideBarAdmin></SideBarAdmin>
        <div className='flex flex-col h-screen'>
            <TopBar/>
            <div className="flex flex-col text-urbanist mb-2 sm:mb-4 lg:mb-6 xl:mb-10 mr-2 sm:mr-4 lg:mr-6 xl:mr-10 mt-10">
            
            <div className='flex justify-between w-[100%] mb-4 '>
              <span className="text-2xl font-semibold leading-38.4 tracking-tighter text-left w-83 h-38 gap-0">Team</span>
              <button className="px-2 py-2 gap-10 border rounded-md bg-sechover font-urbanist text-sm text-secwhite font-semibold text-center">Add New Member</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-[100%] h-[85%] '>
              <TeamCards></TeamCards> 
              <TeamCards></TeamCards> 
              <TeamCards></TeamCards> 
              <TeamCards></TeamCards>
              <TeamCards></TeamCards>
              <TeamCards></TeamCards>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Team