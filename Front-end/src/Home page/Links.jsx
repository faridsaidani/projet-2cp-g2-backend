import React from "react"
import { useState } from "react"



export default function Link() {

  const [openModal, setOpenModal] = useState(false);

  const Sidebarlist = [
    { id: 1, descreption:"Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",clientName:"Robert Johnson",src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2asjwoc0xyq-65%3A32741?alt=media&token=a3b6dc8e-4551-46ca-9d6f-437d40eac529"},
    { id: 2,descreption:"Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",clientName:"Robert Johnson",src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2asjwoc0xyq-65%3A32741?alt=media&token=a3b6dc8e-4551-46ca-9d6f-437d40eac529"},
    { id: 3,descreption:"Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",clientName:"Emily Davis",src:"https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2asjwoc0xyq-65%3A32741?alt=media&token=a3b6dc8e-4551-46ca-9d6f-437d40eac529"},
    

];

// Sidebarlist--

const MySidebarlist = Sidebarlist.map((side) => {
  
  return (
// eslint-disable-next-line react/jsx-key
<div className=" flex flex-col justify-start items-center w-[31%] h-[100%] border  border-[#e3f1f4ff] border-solid rounded-[10px] box-border  bg-[rgba(227,241,244,1)]">
<div className=" flex flex-col justify-start items-start gap-10 w-[100%] p-[30px] rounded-2xl box-border">
  <img
    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2asjwoc0xyq-65%3A32736?alt=media&token=16be4305-4ee3-4323-88d6-efddf596b082"
    alt="Not Found"
    className=" w-[34px] h-[34px]"
  />
  <p className="  border-[#4c606eff] text-base text-[#4c606eff]  leading-[150%]  font-urbanist  font-[500]">
   {side.descreption}
  </p>
</div>
<div className=" flex flex-row justify-start items-center gap-2.5 w-[100%] px-[30px] py-5 box-border  bg-[rgba(227,241,244,1)]">
  <img
    src={side.src}
    alt="Not Found"
    className=" w-[50px] h-[100%]"
  />
  <p className="  border-[#063248ff] text-base text-[#4c606eff]  leading-[150%]  font-urbanist  font-[600]">
   {side.clientName}
  </p>
</div>
</div>




   
  );
});






    return (
        <>
        <ul className=" flex flex-row items-start mx-auto justify-between w-[100%] h-80 box-border mb-[64px]">
        
        {MySidebarlist}
     
      </ul>

     </>
    )
  }