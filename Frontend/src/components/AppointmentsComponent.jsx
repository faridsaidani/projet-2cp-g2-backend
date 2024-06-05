import React from 'react'
import { Link } from 'react-router-dom';
import UpComingAppointment from './UpComingAppointment'



const AppointmentsComponent = ({upcAppNbr}) => {
  return (
    <div className=' flex flex-col gap-4'>
        <span className="text-xl text-primdark font-semibold leading-38.4 tracking-tighter text-left gap-0 ">
            Upcoming Appointments(4{upcAppNbr})
        </span>
        <div className='grid grid-cols-3 gap-2 justify-between w-[100%] h-[70%]'>
            
            
            <div className='flex justify-center items-center border border-dashed  rounded-xl '>
              <div className='flex flex-col justify-center items-center bg-primback px-6 py-4 rounded-xl'>
                <button className='my-4'>
                      <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="80" height="80" rx="40" fill="#C3E7FA"/>
                      <path d="M40.5 27.167V53.8337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27.1641 40.5H53.8307" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                </button>

                <Link to='/therapist/create-appointment' className='px-6 py-4 bg-sechover text-secwhite rounded-lg font-urbanist text-sm font-semibold leading-3 text-left mt-2'>
                  Create Appointment
                </Link>

              </div>
            </div>


            <UpComingAppointment
            title='Deppressive states,Reasons and methods of struggle'
            timing='July 7 , 9:15 - 11:00 AM (1 hour 30 min)'
            name='Maria Dolce Gabana'
            age='32'
            >
            </UpComingAppointment>
            <UpComingAppointment
            title='Deppressive states,Reasons and methods of struggle'
            timing='July 7 , 9:15 - 11:00 AM (1 hour 30 min)'
            name='Maria Dolce Gabana'
            age='32'
            >
            </UpComingAppointment>
            <UpComingAppointment
            title='Deppressive states,Reasons and methods of struggle'
            timing='July 7 , 9:15 - 11:00 AM (1 hour 30 min)'
            name='Maria Dolce Gabana'
            age='32'
            >
            </UpComingAppointment>
            <UpComingAppointment
            title='Deppressive states,Reasons and methods of struggle'
            timing='July 7 , 9:15 - 11:00 AM (1 hour 30 min)'
            name='Maria Dolce Gabana'
            age='32'
            >
            </UpComingAppointment><UpComingAppointment
            title='Deppressive states,Reasons and methods of struggle'
            timing='July 7 , 9:15 - 11:00 AM (1 hour 30 min)'
            name='Maria Dolce Gabana'
            age='32'
            >
            </UpComingAppointment>
            
            


        </div>

    </div>
  )
}

export default AppointmentsComponent