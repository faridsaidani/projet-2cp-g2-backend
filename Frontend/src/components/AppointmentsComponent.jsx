import React from 'react'
import UpComingAppointment from './UpComingAppointment'

const AppointmentsComponent = ({upcAppNbr}) => {
  return (
    <div className=' flex flex-col justify-between gap-4'>
        <span className="text-xl text-primdark font-semibold leading-38.4 tracking-tighter text-left gap-0 border ">
             Upcoming Appointments({upcAppNbr})
        </span>
        <div className='grid grid-cols-3 gap-2 justify-between w-[100%] h-[70%] border'>
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