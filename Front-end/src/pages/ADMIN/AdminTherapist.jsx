import React from 'react'
import './index.css'
const AdminTherapist = () => {


    const Sidebarlist = [
       { id: 1, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" ,ap:"Approve", dec:"Decline"},
       { id: 2, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" ,ap:"Approve", dec:"Decline"},
       { id: 3, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" ,ap:"Approve", dec:"Decline"},
       { id: 4, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" ,ap:"Approve", dec:"Decline"},
       { id: 5, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" ,ap:"Approve", dec:"Decline"},
       { id: 6, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" ,ap:"Approve", dec:"Decline"},
       { id: 7, name:"Bellatreche HIba",email:"Hibatallah@gmail.com", v:"view", date:"04 Sep 2019" ,ap:"Approve", dec:"Decline"},




      
  
];
  
  
  
  // Sidebarlist--
   const MySidebarlist = Sidebarlist.map((side) => {
      return (
   
  
  <li key={side.id} className='flex w-[100%] px-[20.5px] pt-[19px] pb-[20px] justify-between items-center border-t border-t-[#D5D5D5]'>
  <li className=' text-[14]px font-semibold leading-[16.8px] font-urbanist text-[#202224]' >{side.name}</li>
  <li className=' text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#202224]'>{side.email}</li>
  <li ><button className=' text-[12px] font-[700] leading-[14.4px] w-[69px]  border border-[#4C606E] items-center h-[40px] font-urbanist text-primary1 rounded-[10px]  '>
    {side.v}</button></li>
  <li className=' text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#202224]'>{side.date}</li>
  <li className='flex w-[20%] justify-between items-center'> <button className='text-[#00B69B] text-[12px] font-[700] leading-[14.4px]   w-[95px] rounded-lg h-[33px] font-urbanist bg-[#c6f6ef] '>
    {side.ap}</button>
    <button className='text-[#EF3826] text-[12px] font-[700] leading-[14.4px] font-urbanist   w-[95px] rounded-lg h-[33px] bg-[#ffc2be]'>
     {side.dec}</button></li>
  
      </li>
  
     
  );
  });
  





  return (

<>

    <div className='top-[116px] absolute  left-[250px]  w-[80%]'>
          <div className=" flex flex-col mb-[30px] justify-between items-center  w-[100%] h-[46px] box-border">
      <div className=" flex flex-row justify-between items-start   w-[100%] h-[100%] box-border">
        <p className="  border-[#063248ff] text-[#063248] text-[32px] leading-8  font-urbanist  font-[700]  tracking-[-0.1px]">
          Therapist List
        </p>
        <button
               className=" flex flex-row justify-center items-center gap-2.5 w-[186px] h-[100%] px-[31px] py-3.5 rounded-lg box-border  bg-[rgba(41,142,166,1)]
       border-[#ffffffff]  text-[15px]  leading-[15px]  font-urbanist  font-[600] text-center">
View Therapists
        </button>
       
      </div>
    </div>
 








  



<div>
  <div className='shadow-multiple border border-white rounded-[22px] '>

 
  <div className='py-[15px] px-[60px] border border-b-0 rounded-tl-[22px] rounded-tr-[22px] border-[#D5D5D5] '>
    <ul className='flex justify-between '>
      <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#202224]'>Name</li>
      <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#202224]'>Email</li>
      <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#202224]'>Cv & Certificates</li>
      <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#202224]'>DATE of inscription</li>
      <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#202224]'>STATUS</li>
    </ul>

  </div>
  {/* <ul className='flex w-[100%] px-[20.5px] pt-[19px] pb-[20px] justify-between items-center border border-t-[#D5D5D5]'>
    <li className=' text-[14]px font-semibold leading-[16.8px] font-urbanist text-[#202224]' >Bellatreche HIba</li>
    <li className=' text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#202224]'>Hibatallah@gmail.com</li>
    <li ><button className=' text-[12px] font-[700] leading-[14.4px] w-[69px]  border border-[#4C606E] items-center h-[40px] font-urbanist text-primary1 rounded-[10px]  '>
      view file</button></li>
    <li className=' text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#202224]'>04 Sep 2019</li>
    <li className='flex w-[20%] justify-between items-center'> <button className='text-[#00B69B] text-[12px] font-[700] leading-[14.4px]   w-[95px] rounded-lg h-[33px] font-urbanist bg-[#c6f6ef] '>
      Approve</button>
      <button className='text-[#EF3826] text-[12px] font-[700] leading-[14.4px] font-urbanist   w-[95px] rounded-lg h-[33px] bg-[#ffc2be]'>
        decline</button></li>
  </ul> */}
<ul >
        
        {MySidebarlist}
     
      </ul> 
      </div>
</div>
</div>
</>
  )
}

export default AdminTherapist












