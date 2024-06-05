import React from 'react'
import SideBarAdmin from "../../components/SideBarAdmin";
import TopSection from "../../components/TopSection";

//import './index.css'
const PatientList = () => {

  const Sidebarlist = [
      { id: 1, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" , dec:"Decline"},
      { id: 2, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" , dec:"Decline"},
      { id: 3, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" , dec:"Decline"},
      { id: 4, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" , dec:"Decline"},
      { id: 5, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" ,dec:"Decline"},
      { id: 6, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" , dec:"Decline"},
      { id: 7, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" , dec:"Decline"},
  ];
  
  
  
  // Sidebarlist--
  const MySidebarlist = Sidebarlist.map((side) => {
    return (
  
  
          <li key={side.id} className='flex w-[100%] px-[20.5px] pt-[19px] pb-[20px] justify-between items-center border-t border-t-[#D5D5D5]'>

              <li className=' text-[14]px font-semibold leading-[16.8px] font-urbanist text-[#202224]' >
                {side.name}
              </li>

              <li className=' text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#202224]'>
                {side.email}
              </li>

              <li className='text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#202224]'>
                {side.date}
              </li>

              <li className='items-center'> 
                <button className='text-[#4C606E] text-[12px] font-[700] leading-[14.4px] font-urbanist   w-[95px] rounded-lg h-[33px] bg-[#adc2d0]'>
                {side.dec}
                </button>
              </li>

          </li>
  
     
    );
    });
  
  return (
    <div className='grid grid-cols-[20%_80%] ml-5 mt-3 h-screen'>
      <SideBarAdmin currentPage='patient'></SideBarAdmin>
      <div className='flex flex-col my-10'>
          <TopSection></TopSection>
          <div className='w-[98%] my-10'>
                <div className=" flex flex-col mb-[30px] justify-between items-center  w-[100%] h-[46px] box-border">
                  <div className=" flex flex-row justify-between items-start   w-[100%] h-[100%] box-border">
                      <p className="  border-[#063248ff] text-[#063248] text-[32px] leading-8  font-urbanist  font-[700]  tracking-[-0.1px]">
                      Patients List
                      </p>
                  </div>
                </div>
                <div>
                  <div className='shadow-multiple border border-white rounded-[22px] '>
                    <div className='py-[15px] px-[60px] border border-b-0 rounded-tl-[22px] rounded-tr-[22px] border-[#D5D5D5] '>
                      <ul className='flex justify-between '>
                        <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#202224]'>Name</li>
                        <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#202224]'>Email</li>
                        <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#202224]'>DATE of inscription</li>
                        <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#202224]'>STATUS</li>
                      </ul>

                    </div>

                    <ul >{MySidebarlist}</ul> 
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PatientList

