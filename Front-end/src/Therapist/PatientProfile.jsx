import React from 'react'

const PatientProfile = () => {
  return (
    <div className='w-[80%] flex justify-between absolute left-[250px] top-[120px] '>
    <div className='w-[24%]  border-[black] border-solid  '>
    <div className="flex justify-between w-[45%] items-center">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="21.6"
          y="21.2078"
          width="21.45"
          height="21.0578"
          rx="2.85"
          transform="rotate(-180 21.6 21.2078)"
          stroke="#298EA6"
          strokeWidth="0.3"
        />
        <path
          d="M12.75 6.99997L9 10.6789L12.75 14.3578"
          stroke="#298EA6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="text-complimetary1"> Back to List</p>
    </div>
    
    
    
    <div className=" shadow-custom mt-[12%] flex flex-col justify-start items-center gap-8 w-[100%] h-[359px] px-[25px] py-5 rounded-xl box-border  bg-[rgba(255,255,255,1)] shadow-multiple">
<img
  src="https://s3-alpha-sig.figma.com/img/ffcb/6739/1f4fea04cfcaa07cc1213db2fd30d35a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gpup5zpnJ~U54qqDMkcYVco4uy1nup6V4TBC8WOvHR22qFoo8-jf1t5iwXac4Cch630FPMQNA4kDmMGZCY2XSeWsA3gU12Qc3~xaA0Lpato8HEn5en5GIEbx~aZ4DRr3PrW0gSB2e9mCvcZIYQTieWanbp2BA173i6rtPY5IV360jQTEZHtLDNcJ0v7e-Fq0ZMKG2DKkDLcjqL-5ZDMPVwfJHvFAZctOb28xKVy1T7mA4a-ogNZj5B6jVorWzMdplYbfxp6o4o5IZtVofadz-3dIIEFdnYvmS-kgnFuCzRmY9RDyFI25uNsVYf3C4NLEV2lePsulby0z234EVJ7OeA__"
  alt="Not Found"
  className=" w-[130px] h-[130px] rounded-xl"
/>
<div className=" flex flex-col justify-center items-center gap-6 w-[100%] box-border">
<div className=" flex flex-col justify-start items-center gap-3 w-[100%] box-border">
          <p className="  border-[#063248ff] text-xl leading-5 text-[#063248] font-urbanist  font-[600]">
             Bellatreche Hibatallah
          </p>
          <p className="  text-base leading-4  text-complimetary1 font-urbanist  font-[600]">
          32 y.o
          </p>
            <p className="  text-complimetary1 text-xs leading-3 justify-center items-center  font-urbanist  font-[500]">
            Female            </p>
        
         
        </div>
  <div className=" flex flex-col justify-start items-start gap-3 w-[undefinedundefined] box-border">
    {/* <button  
             className=" border-[#ffffffff] text-[#fff] text-base leading-4  font-urbanist  font-[600]
             flex flex-row justify-center items-center gap-2.5 w-[100%] px-[39px] py-3.5 rounded-lg box-border  bg-[#298EA6]">

Make Appointement

    </button> */}

    <button  
             className=" border-[#298ea6ff] text-[#298EA6] text-base leading-4  font-urbanist  font-[600]
             flex flex-row justify-center items-center gap-2.5 w-[100%] px-[39px] py-3.5 rounded-lg box-border  bg-[#E3F1F4]">

Chat with Patient
    </button>
   
   
    
  </div>
</div>
</div>



    



  
    </div>








    <div className="w-[75%] shadow-custom h-[83vh] rounded-[12px]  px-[13px] py-[19px] gap-[30px] flex justify-between">
    <div className=" flex flex-col justify-start items-start   w-[403px] h-[100%]  box-border">
      <div className=" flex flex-col justify-start items-start gap-[34px] w-[100%] box-border">
        <div className=" flex flex-col justify-start items-start gap-[20px] w-[100%] box-border">
          <p className="  text-[#063248] border-[#063248ff] text-xl leading-5  font-urbanist  font-[600]">
            Specialities and Expertise
          </p>
          <div className=" text-complimetary1 flex flex-col justify-start items-start gap-3 w-[100%] box-border">
            <div className=" text-complimetary1 flex flex-row justify-start items-start gap-3 w-[55%] box-border">
              <button
                className="text-sm  leading-[14px]  font-urbanist  font-[500]
         flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  text-complimetary1 border-solid rounded-lg   bg-[rgba(227,241,244,1)]
        
        w-[undefinedundefined] box-border
        "
              >
                {" "}
                Anxiety
              </button>

              <button
                className="text-sm  leading-[14px]  font-urbanist  font-[500]
         flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
        
        w-[undefinedundefined] box-border
        "
              >
                {" "}
                Emigration
              </button>

              <button
                className="text-sm  leading-[14px]  font-urbanist  font-[500]
         flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
        
        w-[undefinedundefined] box-border
        "
              >
                {" "}
                Panic attacks
              </button>
            </div>
            <div className=" text-complimetary1 flex flex-row justify-start items-start gap-3 w-[100%] box-border">
              <button
                className="text-sm  leading-[14px]  font-urbanist  font-[500]
         flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
        
        w-[undefinedundefined] box-border
        "
              >
                Depressive states
              </button>

              <button
                className="text-sm  leading-[14px]  font-urbanist  font-[500]
         flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
        
        w-[undefinedundefined] box-border
        "
              >
                Solitude
              </button>

              <button
                className="text-sm  leading-[14px]  font-urbanist  font-[500]
         flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
        
        w-[undefinedundefined] box-border
        "
              >
                Familly Problems
              </button>
            </div>
          </div>
        </div>
      









        <div className=" flex flex-col justify-start items-start  gap-[20px] w-[undefinedundefined] box-border">
          <div className=" flex flex-col justify-start items-start  gap-[23px] w-[undefinedundefined] box-border">
            <p className=" text-[#063248] border-[#063248ff] text-xl leading-5  font-urbanist  font-[600]">
              Descreption
            </p>
          </div>
          <p className=" text-[#063248] border-[#4c606eff] text-sm  leading-[129%]  font-urbanist  font-[500]  tracking-[0.7px]">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
            condimentum lobortis. Ut commodo efficitur neque.Sorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.Sorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis.{" "}
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-start items-start gap-[20px] w-[undefinedundefined] box-border">
        <div className=" flex flex-row justify-start mt-[20px] items-start gap-1 w-[undefinedundefined] box-border">
          <p className=" text-[#063248] border-[#063248ff] text-sm  leading-[129%]  font-urbanist  font-[600]  tracking-[0.7px]">
            Age:{" "}
          </p>
          <p className=" text-[#063248] border-[#4c606eff] text-sm  leading-[129%]  font-urbanist  font-[500]  tracking-[0.7px]">
            38 Years
          </p>
        </div>
        <div className=" flex flex-row justify-start items-start gap-1 w-[100%] box-border">
          <p className=" text-[#063248] border-[#063248ff] text-sm  leading-[129%]  font-urbanist  font-[600]  tracking-[0.7px]">
            Language:{" "}
          </p>
          <p className=" text-[#063248] border-[#4c606eff] text-sm  leading-[129%]  font-urbanist  font-[500]  tracking-[0.7px]">
            English, French
          </p>
        </div>
      </div>
    </div>

    <div className=" flex flex-col justify-start items-start gap-8 w-[396px] h-[55%] px-6 py-8 rounded-xl box-border  bg-[rgba(227,241,244,1)]">
 
      <div className=" flex flex-col justify-start items-start gap-6 w-[100%] box-border">
        <p className=" text-[#063248] border-[#063248ff] text-xl leading-5  font-urbanist  font-[600]">
        Fiche Medicale & Documents        </p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/3cjxmttbrva-127%3A3197?alt=media&token=916a6ccf-5487-419c-a67f-8324fb220621"
          alt="Not Found"
          className=" gap-3 w-[100%] h-[232px]"
        />
      </div>
     
    </div>
  </div>
  


</div>
  )
}

export default PatientProfile
