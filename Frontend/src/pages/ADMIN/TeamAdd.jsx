import React from 'react'
import SideBarAdmin from "../../components/SideBarAdmin"
import TopBar from "../../components/TopBar"
import { AiFillCamera } from "react-icons/ai"

const TeamAdd = () => {
  return (
    <div>
        <SideBarAdmin></SideBarAdmin>
        <TopBar></TopBar>
        <div className='flex flex-col fixed w-[74%] h-[75%] text-urbanist  mb-2 sm:mb-4 lg:mb-6 xl:mb-10 mr-2 sm:mr-4 lg:mr-6 xl:mr-10 right-0 bottom-0 '>
            <div className='flex justify-between w-[100%] mb-4 '>
                <span className="text-2xl font-semibold leading-38.4 tracking-tighter text-left w-83 h-38 gap-0">Add a team Member</span>
            </div>
            <div className='flex flex-col justify-between items-center h-[85%] rounded-3xl py-4 px-6 bg-primback'>
                <button className='flex flex-col justify-center items-center'>
                    <div className=' flex justify-center items-center w-20 h-20 rounded-full bg-sechoverbg'>
                        <AiFillCamera className='w-[50%] h-[50%]' />
                    </div>
                    <p className='font-urbanist font-semibold leading-4 tracking-wider text-left text-xs text-blue-500 mt-4'>Upload Photo</p>
                </button>

                <div className='flex justify-between w-[80%] h-[50%]'>
                    <div className='flex flex-col justify-between w-[45%] h-[100%]'>
                        <label htmlFor="" className='font-urbanist font-semibold text-secdark text-sm leading-5 text-left'>Name</label>
                        <input type="text" className='w-[100%] h-[18%]  p-2 border border-gray-300  rounded-lg bg-secwhite    font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist'  placeholder='Hibatallah'/>

                        <label htmlFor="" className='font-urbanist font-semibold text-secdark text-sm leading-5 text-left'>User Name</label>
                        <input type="text" className='w-[100%] h-[18%]  p-2 border border-gray-300  rounded-lg bg-secwhite   font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist' placeholder='Hiba Bella' />

                        <label htmlFor="" className='font-urbanist font-semibold text-secdark text-sm leading-5 text-left'>Gender</label>
                        <input type="text"className=' w-[100%] h-[18%]  p-2 border border-gray-300  rounded-lg bg-secwhite   font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist' placeholder='female' />

                    </div>
                    <div className='flex flex-col justify-between w-[45%] h-[100%]'>
                        <label htmlFor="" className='font-urbanist font-semibold text-secdark text-sm leading-5 text-left'>Family Name</label>
                        <input type="text" className='w-[100%] h-[18%]  p-2 border border-gray-300  rounded-lg bg-secwhite   font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist' placeholder='Bellatreche' />

                        <label htmlFor="" className='font-urbanist font-semibold text-secdark text-sm leading-5 text-left'>Email</label>
                        <input type="email" className='w-[100%] h-[18%]  p-2 border border-gray-300  rounded-lg bg-secwhite   font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist' placeholder='Hibabella@gmail.com' />

                        <label htmlFor="" className='font-urbanist font-semibold text-secdark text-sm leading-5 text-left'>Positon</label>
                        <input type="text" className='w-[100%] h-[18%]  p-2 border border-gray-300  rounded-lg bg-secwhite   font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist' placeholder='Admin' />
                    </div>
                </div>

                <button className='px-8 py-2 bg-sechover text-secwhite border rounded-lg font-urbanist text-sm font-normal leading-5 text-center'>
                    Add Now
                </button>

            </div>
        </div>
    </div>
  )
}

export default TeamAdd