import React from 'react'
import './index.css'
const PatientList = () => {

    const Sidebarlist = [
        { id: 1, name:"Bellatreche HIba", statu:"Re-Consultation", age:"32 y.o" , lang:"English",gender:"Female", case:"Solitude" ,case2:"Anxiety",chat:"Chat"},
        { id: 2, name:"Bellatreche HIba", statu:"Re-Consultation", age:"32 y.o" , lang:"English",gender:"Female", case:"Solitude" ,case2:"Anxiety",chat:"Chat"},
        { id: 3, name:"Bellatreche HIba", statu:"Re-Consultation", age:"3.2" , lang:"English",gender:"Female", case:"Solitude" ,case2:"Anxiety",chat:"Chat"},
        { id: 4, name:"Bellatreche HIba", statu:"Re-Consultation", age:"3.2" , lang:"English",gender:"Female", case:"Solitude" ,case2:"Anxiety",chat:"Chat"},
        { id: 5, name:"Bellatreche HIba", statu:"Re-Consultation", age:"3.2" , lang:"English",gender:"Female", case:"Solitude" ,case2:"Anxiety",chat:"Chat"},
        { id: 6, name:"Bellatreche HIba", statu:"Re-Consultation", age:"3.2" , lang:"English",gender:"Female", case:"Solitude" ,case2:"Anxiety",chat:"Chat"},
        { id: 7, name:"Bellatreche HIba", statu:"Re-Consultation", age:"3.2" , lang:"English",gender:"Female", case:"Solitude" ,case2:"Anxiety",chat:"Chat"},
 
 
 
 
       
   
 ];
   
   
   
   // Sidebarlist--
    const MySidebarlist = Sidebarlist.map((side) => {
       return (
    
   
   <li key={side.id} className='flex w-[100%] px-[20.5px] pt-[19px] pb-[20px] justify-between items-center border-t border-t-[#D5D5D5]'>
   <li className='flex w-[20%] justify-between ' >
        <img className='rounded-[34px]  w-[44.12px] h-[45px]'
        src="https://s3-alpha-sig.figma.com/img/ffcb/6739/1f4fea04cfcaa07cc1213db2fd30d35a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gpup5zpnJ~U54qqDMkcYVco4uy1nup6V4TBC8WOvHR22qFoo8-jf1t5iwXac4Cch630FPMQNA4kDmMGZCY2XSeWsA3gU12Qc3~xaA0Lpato8HEn5en5GIEbx~aZ4DRr3PrW0gSB2e9mCvcZIYQTieWanbp2BA173i6rtPY5IV360jQTEZHtLDNcJ0v7e-Fq0ZMKG2DKkDLcjqL-5ZDMPVwfJHvFAZctOb28xKVy1T7mA4a-ogNZj5B6jVorWzMdplYbfxp6o4o5IZtVofadz-3dIIEFdnYvmS-kgnFuCzRmY9RDyFI25uNsVYf3C4NLEV2lePsulby0z234EVJ7OeA__" alt="" />
    
        <div className=' my-auto'>
<p className=' text-[14px]  font-semibold  leading-[16.8px] font-urbanist text-primary1'>
    {side.name}</p>
    <p className='text-[#4C606E80] text-[14px]  font-semibold  leading-[16.8px] font-urbanist '>{side.statu}</p>

    </div></li>
   <li className=' text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#4C606E]'>{side.gender}</li>
   <li className=' text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#4C606E] '>
     {side.age}</li>
   <li className=' text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#4C606E]'>{side.lang}</li>
   <li ><button className=' text-[12px] font-[700] leading-[14.4px] w-[69px]  border border-[#4C606E] items-center h-[40px] text-[#4C606E] font-urbanist rounded-[10px]  '>
    {side.case}</button></li>
   <li className='items-center'> 
     <button className='text-[#298EA6] items-center gap-2 justify-center text-[12px] flex font-[700] leading-[14.4px] font-urbanist   w-[95px] rounded-lg h-[33px] bg-[#E3F1F4]'>
     <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17.9999L4.08333 13.2499C3.33094 11.7455 3.13843 10.0225 3.54025 8.38923C3.94208 6.75592 4.912 5.3189 6.27646 4.33533C7.64093 3.35176 9.31087 2.88584 10.9874 3.02094C12.664 3.15605 14.2378 3.88336 15.4272 5.07272C16.6165 6.26208 17.3438 7.83587 17.4789 9.51244C17.614 11.189 17.1481 12.859 16.1646 14.2234C15.181 15.5879 13.744 16.5578 12.1107 16.9596C10.4773 17.3615 8.75435 17.1689 7.25 16.4166L2.5 17.9999Z" stroke="#298EA6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      {side.chat}</button></li>
   
       </li>
   
      
   );
   });
   

  return (
    <div className='top-[116px] absolute  left-[250px]  w-[57%]'>
        <p className="mb-[30px]  border-[#063248ff] text-[#063248] text-[32px] leading-8  font-urbanist  font-[700]  tracking-[-0.1px]">
        Patients
      </p>

      <div className='shadow-multiple border border-white rounded-[22px] '>

 
<div className=' rounded-tl-[22px] rounded-tr-[22px] border-[#D5D5D5] '>
    <p className= ' py-[15px] px-[23px] text-primary1 text-[20px] font-bold leading-[24px] font-urbanist'> Patient List  <span className='text-[16px] font-semibold leading-[19.2px] font-urbanist text-[#4C606E]'>(84 Patient)</span></p>
  <ul className='flex py-[15px] pl-[23px] pr-[300px] border-[0.6px] w-[100%] border-[#D5D5D5]  justify-between '>
    <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]'>Patient</li>
    <li className='flex justify-between w-[30%]'>
    <div className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]'>Gender</div>
    <div className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]'>Language</div>
    </li>
    <li className=' text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]'>Diagnosis</li>
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
  )
}

export default PatientList
