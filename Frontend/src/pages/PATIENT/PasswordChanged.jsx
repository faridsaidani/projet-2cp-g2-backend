import React from 'react'

const PasswordChanged = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className='flex flex-col justify-center items-center border rounded-xl w-[30%] h-[30%] p-4 bg-secwhite font-urbanist text-primdark'>
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="40" height="40" rx="20" fill="#298EA6" fill-opacity="0.2"/>
            <path d="M20.4974 28.3332C25.0999 28.3332 28.8307 24.6023 28.8307 19.9998C28.8307 15.3973 25.0999 11.6665 20.4974 11.6665C15.8949 11.6665 12.1641 15.3973 12.1641 19.9998C12.1641 24.6023 15.8949 28.3332 20.4974 28.3332Z" stroke="#298EA6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 20.0002L19.6667 21.6668L23 18.3335" stroke="#298EA6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h3 className='text-xl font-bold m-4'>Change Password</h3>
            <p >Your password has been succefully changed</p>
        </div>
    </div>
  )
}

export default PasswordChanged