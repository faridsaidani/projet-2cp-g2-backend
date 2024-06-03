import React from 'react'
import AppointmentRequestCard from './AppointmentRequestCard'
import IMG1 from '/assets/MouhamedIslam.png'
import IMG2 from '/assets/Takieddine.png'
import IMG3 from '/assets/LotfiBellatreche.png'


const AppointmentRequests = () => {
    const SVGICON =(
        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.117188" y="0.5" width="40" height="40" rx="10" fill="#298EA6" fill-opacity="0.2"/>
        <path d="M20.1146 28.8337C24.7171 28.8337 28.4479 25.1028 28.4479 20.5003C28.4479 15.8978 24.7171 12.167 20.1146 12.167C15.5121 12.167 11.7812 15.8978 11.7812 20.5003C11.7812 25.1028 15.5121 28.8337 20.1146 28.8337Z" stroke="#298EA6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.6172 20.4997L19.2839 22.1663L22.6172 18.833" stroke="#298EA6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

  );
    
  return (
    <div className='flex flex-col h-[100%] w-[100%]'>
        <div className='flex justify-between items-center w-[100%]'>
            <p className='flex flex-start font-urbanist text-lg font-bold leading-6 text-left text-primdark pb-2'>Appointment Requests</p>
            <button className='text-center text-xs text-sechover border border-sechover rounded-lg h-[80%] w-[13%] '>View all</button>
        </div>
        <div className='border rounded-xl shadow-xl h-[49%]'> 
            <div className='flex h-auto justify-between p-2'>
                <div className=' flex justify-start w-1/6'>
                    <p className='font-urbanist text-base font-bold leading-3 text-left text-primdark'>Patient</p>
                </div>

                <div className=' flex justify-start w-1/6'>
                    <p className='font-urbanist text-base font-bold leading-3 text-left text-primdark'>Date</p>
                </div>

                <div className='flex justify-start w-1/5'>
                    <p className='font-urbanist text-base font-bold leading-3 text-left text-primdark'>Diagnosis</p>
                </div>

                <div className='flex justify-start w-1/10'>
                    <p className='font-urbanist text-base font-bold leading-3 text-left text-primdark'>Approval</p>
                </div>
            </div>

            <AppointmentRequestCard
            photo={IMG1}
            name='Mouhamed Islam'
            consultation='Re-consultaion'
            date='07 July'
            timing='9:15 -11:00 AM'
            diagnosis='Axiety'
            approval={SVGICON}
            />

            <AppointmentRequestCard
            photo={IMG2}
            name='Takieddine'
            consultation='Re-consultaion'
            date='07 July'
            timing='9:15 -11:00 AM'
            diagnosis='Deppresion'
            approval={SVGICON}
            />

            <AppointmentRequestCard
            photo={IMG3}
            name='Lotfi Bellatreche'
            consultation='Re-consultaion'
            date='07 July'
            timing='9:15 -11:00 AM'
            diagnosis='Stress'
            approval={SVGICON}
            />
        </div>
  
    </div>
  )
}

export default AppointmentRequests