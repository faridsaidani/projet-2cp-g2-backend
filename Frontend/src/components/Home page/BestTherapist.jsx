/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
const therapists = [
  {
    name: 'Dr. Maya Sanchez',
    title: 'Psychotherapist and author',
    // Add more details for each therapist here
  },
  {
    name: 'Dr. William Jones',
    title: 'Clinical psychologist',},
  // Add objects for other therapists
];

const BestTherapist = () => {

  const [currentTherapistIndex, setCurrentTherapistIndex] = useState(0);

  const handleLeftClick = () => {
    const newIndex = currentTherapistIndex === 0 ? therapists.length - 1 : currentTherapistIndex - 1;
    setCurrentTherapistIndex(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = currentTherapistIndex === therapists.length - 1 ? 0 : currentTherapistIndex + 1;
    setCurrentTherapistIndex(newIndex);
  };

  const currentTherapist = therapists[currentTherapistIndex];

  return (
    <div className='flex justify-between mx-auto w-[86%] mt-[86px] '>
        <ul className='w-[57%]'>
    
            <li className='font-urbanist font-[700] text-[38px] leading-[57px] mb-3 text-[#063248]'> ‘‘The Power of Psychological Insight‘‘</li>
         
            <li className='font-urbanist font-[500] text-[24px] leading-[36px] mb-[32px] text-[#4C606E]'>“Understanding the depths of our psyche is akin to discovering the universe within ourselves. Psychology illuminates the pathways of our thoughts, feelings, and behaviors, guiding us towards self-awareness and empowerment.”</li>
            <li>  <hr className='border border-[#4C606E] mb-[38px]'/></li>
       
            <li className='font-urbanist font-[700] text-[38px] leading-[57px] mb-[23px] text-[#063248]'>{currentTherapist.name}</li>
            <li className='flex items-center justify-between font-urbanist font-[500] text-[24px] leading-[36px] mb-[23px] text-[#4C606E]'>

            <p className='text-[#063248]'> {currentTherapist.title}</p>
            <div className='flex '>
            <svg className='left cursor-pointer'
             onClick={handleLeftClick}
              width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="44.5" y="44" width="44" height="44" rx="22" transform="rotate(-180 44.5 44)" fill="#298EA6"/>
<path d="M16.5 26L12.5 22L16.5 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.5 22L12.5 22" stroke="white" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
<svg 
    onClick={handleRightClick}
className='right cursor-pointer' width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="44" height="44" rx="22" fill="#298EA6"/>
<path d="M28.5 18L32.5 22L28.5 26" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 22H32.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            </div>
        
            </li>
        </ul>
        <div className="quote-image">   </div>
     
    </div>


  )
}

export default BestTherapist
