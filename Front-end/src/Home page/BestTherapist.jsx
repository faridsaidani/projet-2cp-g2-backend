import React from 'react'
import './index.css'

const BestTherapist = () => {
  return (
    <div className='flex justify-between mx-auto w-[86%] mt-[86px] '>
        <ul className='w-[57%]'>
    
            <li className='font-urbanist font-[700] text-[38px] leading-[57px] mb-3 text-[#063248]'>‘‘The best-known couples therapists‘‘</li>
         
            <li className='font-urbanist font-[500] text-[24px] leading-[36px] mb-[32px] text-[#4C606E]'>“Sometimes I learn something about you because you tell me: your history, your family, your life
          before
             we met. But just as often my understanding comes from watching you, intuiting, and making
            associations.”</li>
            <li>  <hr className='border border-[#4C606E] mb-[38px]'/></li>
       
            <li className='font-urbanist font-[700] text-[38px] leading-[57px] mb-[23px] text-[#063248]'>Esther PEREL</li>
            <li className='flex items-center justify-between font-urbanist font-[500] text-[24px] leading-[36px] mb-[23px] text-[#4C606E]'>

            <p className='text-[#063248]'>Psychotherapist and author</p>
            <svg className="quote-vector" width="127" height="44" viewBox="0 0 127 44" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                 <rect x="44.5" y="44" width="44" height="44" rx="22" transform="rotate(-180 44.5 44)"
                     fill="#298EA6" />
                 <path d="M16.5 26L12.5 22L16.5 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M32.5 22L12.5 22" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                 <rect x="82.5" width="44" height="44" rx="22" fill="#298EA6" />
                 <path d="M110.5 18L114.5 22L110.5 26" stroke="white" strokeLinecap="round"
                     strokeLinejoin="round" />
                 <path d="M94.5 22H114.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </li>
        </ul>
        <div className="quote-image">   </div>
     
    </div>


  )
}

export default BestTherapist
