import React from 'react'



const AppointmentRequestCard = ({photo , name , consultation , date , timing , diagnosis, approval }) => {
   
    return (
    <div className='flex justify-between items-center w-[100%] h-[30%] border p-2'>
                
                <div className='flex justify-start space-x-2 items-center w-1/6 h-[100%]'>
                    
                        <img src={photo} alt="Profile" className='w-1/2 rounded-full' />{/*photo*/}
                        <div className='flex flex-col'>
                            <p className='font-urbanist text-sm font-semibold leading-3 text-left text-primdark'>{name}</p>
                            <p className='font-urbanist text-xs font-semibold leading-3 text-left text-graycolor mt-2'>{consultation}</p>
                        </div>
                    
                </div>
            
                <div className='flex flex-col w-1/6 '>
                    <p className='font-urbanist text-sm font-semibold leading-3 text-left text-secdark'>{date}</p>
                    <p className='font-urbanist text-xs font-semibold leading-3 text-left text-graycolor w-[100%] mt-2'>{timing}</p>
                </div>
                
                <div className='flex justify-center items-center w-1/5 border-secdark border-[1px] rounded-lg'>
                    <p className='font-urbanist text-xs font-semibold leading-3 text-left text-secdark py-2'>{diagnosis}</p>
                </div>
            
                {/*Approval*/}
                <div className='w-1/10'>
                    {approval}
                </div>

    </div>
  )
}

export default AppointmentRequestCard