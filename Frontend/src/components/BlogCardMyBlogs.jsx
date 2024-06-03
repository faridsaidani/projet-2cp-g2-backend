import React from 'react'
import IMG from '/assets/img6.png'
import Heily from '/assets/Heily.png'
const BlogCardMyBlogs = () => {
  return (
    <div className='flex flex-col justify-between h-[450px] bg-primback border border-sechover p-4 rounded-xl'>

        {/*Blog Photo */}
        <img src={IMG} alt="" className='rounded-lg' />
        
        {/*Blog type */}
        <p className='font-urbanist text-base font-medium leading-6 text-left text-secdark'>Depression</p>

        {/*Title */}
        <p className='font-urbanist text-xl font-semibold leading-[30px] text-left text-primdark'>Overcoming Depression: Strategies for Healing and Hope</p>

        {/*Description */}
        <p className='font-urbanist text-md font-medium leading-[21px] text-left text-secdark'>Uncover how maintaining wellness and peace can bolster your life goals and enhance overall health.</p>

        {/*Blog editorial information */}
        <div className='flex border border-seclight py-2 px-4 rounded-lg'>
            <img src={Heily} alt="" className='w-[18%]  rounded-lg'/>
            <div className='pl-2'>
              {/*Writer name */}
              <p className='font-urbanist text-base font-semibold leading-[21px] text-left text-primdark'>Bellatreche Hibatallah</p>
              {/*Idition date */}
              <p className='font-urbanist text-xs font-medium leading-[21px] text-left text-secdark'>09 May 2024 - 5 min read</p>
            </div>
        </div>

    </div>
  )
}

export default BlogCardMyBlogs