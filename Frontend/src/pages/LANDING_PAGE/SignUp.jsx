import React from 'react'
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-secwhite p-10'>
      {/* The gray circle */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#C4C4C4"/>
      </svg>

      <h2 className='text-2xl tex-urbanist text-primdark my-4 font-urbanist text-sx font-base leading-5 text-left text-seckdark placeholder-urbanist'>Sign up to start a live-streaming</h2>

      <button className='flex justify-center items-center border border-sechover rounded-lg w-[20%] h-[10%] m-4'>
        <svg className='mr-4' width="10%" height="10%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0045 12.7331C23.0045 11.8698 22.933 11.2398 22.7783 10.5864H12.7188V14.483H18.6235C18.5045 15.4514 17.8616 16.9097 16.433 17.8897L16.413 18.0202L19.5936 20.4349L19.814 20.4564C21.8377 18.6247 23.0045 15.9297 23.0045 12.7331Z" fill="#4285F4"/>
          <path d="M12.712 23.0001C15.6048 23.0001 18.0334 22.0667 19.8072 20.4567L16.4263 17.89C15.5215 18.5083 14.3072 18.94 12.712 18.94C9.87874 18.94 7.474 17.1083 6.61678 14.5767L6.49113 14.5871L3.18388 17.0955L3.14062 17.2133C4.9025 20.6433 8.52155 23.0001 12.712 23.0001Z" fill="#34A853"/>
          <path d="M6.619 14.5765C6.39281 13.9232 6.26191 13.2231 6.26191 12.4998C6.26191 11.7764 6.39281 11.0765 6.6071 10.4231L6.60111 10.284L3.25239 7.73535L3.14283 7.78642C2.41667 9.20977 2 10.8081 2 12.4998C2 14.1915 2.41667 15.7897 3.14283 17.2131L6.619 14.5765Z" fill="#FBBC05"/>
          <path d="M12.7121 6.05997C14.724 6.05997 16.0811 6.91163 16.8549 7.62335L19.8787 4.73C18.0216 3.03834 15.6049 2 12.7121 2C8.52158 2 4.90251 4.35665 3.14062 7.78662L6.6049 10.4233C7.47403 7.89166 9.87878 6.05997 12.7121 6.05997Z" fill="#EB4335"/>
        </svg>
        <p className='text-primdark font-urbanist text-sx font-base leading-5 text-left text-gray-400 placeholder-urbanist'> Sign up with google</p>
      </button>

      <div className='flex justify-center items-center'>
        <svg width="249" height="3" viewBox="0 0 249 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="248.5" height="2" fill="#C3E7FA"/>
        </svg>
        <p className='text-xl text-primdark mx-2'>Or</p>
        <svg width="249" height="3" viewBox="0 0 249 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="248.5" height="2" fill="#C3E7FA"/>
        </svg>
      </div>

      {/* The form */}
      <SignUpForm/>
      
    </div>
  )
}

export default SignUp
