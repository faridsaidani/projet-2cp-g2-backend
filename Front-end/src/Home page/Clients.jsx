import React from 'react'
import './index.css'
import Link from './Links'
const Clients = () => {
  return (
    <div className='mt-[86px] w-[86%] mx-auto text-black '>
     <ul className='font-urbanist text-center mb-[64px]'>


     <li className=' font-[700] text-[38px] leading-[57px] mb-[9px] text-[#063248]'>Our Testimonials</li>
            <li className=' font-[500] text-[16px] leading-[24px]  text-[#4C606E]'>Our satisfied clients share their success stories and experiences on their journey to better health
                and
                well-being.</li>
     </ul>
       
        <Link/>
        <svg className='mx-auto'
        width="188" height="48" viewBox="0 0 188 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="47" height="47" rx="5.5" fill="#E3F1F4"/>
<rect x="1" y="0.5" width="47" height="47" rx="5.5" stroke="#E3F1F4"/>
<path d="M28 17L21 24L28 31" stroke="#4C606E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="72" cy="24" r="3.5" fill="#063248"/>
<circle cx="83" cy="24" r="3.5" fill="#C3E7FA"/>
<circle cx="94" cy="24" r="3.5" fill="#C3E7FA"/>
<circle cx="105" cy="24" r="3.5" fill="#C3E7FA"/>
<circle cx="116" cy="24" r="3.5" fill="#C3E7FA"/>
<rect x="140" y="0.5" width="47" height="47" rx="5.5" fill="#E3F1F4"/>
<rect x="140" y="0.5" width="47" height="47" rx="5.5" stroke="#E3F1F4"/>
<path d="M160 17L167 24L160 31" stroke="#4C606E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
  )
}

export default Clients
