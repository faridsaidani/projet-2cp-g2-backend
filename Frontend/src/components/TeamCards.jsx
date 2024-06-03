import React from 'react'
import IMG from '/assets/Profile.png'


const TeamCards = () => {
  return (
    <div className='bg-card border rounded-xl p-4 shadow-xl w-[20%] h-[25%]'>
        <div className='flex flex-col justify-center items-center'>
            <img src={IMG} alt="Profile Photo" className='rounded-full w-24 h-24 ' />
            <div className='mt-2'>
                <p className='font-urbanist text-lg font-bold leading-[120%] tracking-tighter text-center text-primdark '>Ikram Ouali</p>
                <p className='font-urbanist text-sm font-semibold leading-[120%] tracking-tighter text-center text-secdark'>Admin</p>
            </div>
            <div className='w-[100%] font-urbanist text-sm font-normal leading-[120%] tracking-tighter text-center'>
                janick-parisian@yahoo.com
            </div>
        </div>
    </div>
  )
}

export default TeamCards