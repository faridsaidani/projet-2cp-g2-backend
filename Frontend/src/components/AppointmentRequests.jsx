import React from "react";

const AppointRequest = () => {
  const Sidebarlist = [
    {
      id: 1,
      name: "Bellatreche HIba",
      date: "07 July,",
      hour: "9:15 - 11:00 AM",
      statu: "Re-Consultation",
      age: "32 y.o",
      lang: "English",
      gender: "Female",
      case: "Solitude",
      Approv: "Confirm",
    },
    {
      id: 2,
      name: "Bellatreche HIba",
      date: "07 July,",
      hour: "9:15 - 11:00 AM",
      statu: "Re-Consultation",
      age: "32 y.o",
      lang: "English",
      gender: "Female",
      case: "Solitude",
      Approv: "Confirm",
    },
    {
      id: 3,
      name: "Bellatreche HIba",
      date: "07 July,",
      hour: "9:15 - 11:00 AM",
      statu: "Re-Consultation",
      age: "3.2",
      lang: "English",
      gender: "Female",
      case: "Solitude",
      Approv: "Confirm",
    },
    {
      id: 4,
      name: "Bellatreche HIba",
      date: "07 July,",
      hour: "9:15 - 11:00 AM",
      statu: "Re-Consultation",
      age: "3.2",
      lang: "English",
      gender: "Female",
      case: "Solitude",
      Approv: "Confirm",
    },
  ];

  // Sidebarlist--
  const MySidebarlist = Sidebarlist.map((side) => {
    return (
      <li
        key={side.id}
        className="flex w-[100%] px-[20.5px] pt-[19px] pb-[20px] justify-between items-center border-t border-t-[#D5D5D5]"
      >
        <li className="flex w-[20%] justify-between ">
          <img
            className="rounded-[34px]  w-[44.12px] h-[45px]"
            src="https://s3-alpha-sig.figma.com/img/ffcb/6739/1f4fea04cfcaa07cc1213db2fd30d35a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gpup5zpnJ~U54qqDMkcYVco4uy1nup6V4TBC8WOvHR22qFoo8-jf1t5iwXac4Cch630FPMQNA4kDmMGZCY2XSeWsA3gU12Qc3~xaA0Lpato8HEn5en5GIEbx~aZ4DRr3PrW0gSB2e9mCvcZIYQTieWanbp2BA173i6rtPY5IV360jQTEZHtLDNcJ0v7e-Fq0ZMKG2DKkDLcjqL-5ZDMPVwfJHvFAZctOb28xKVy1T7mA4a-ogNZj5B6jVorWzMdplYbfxp6o4o5IZtVofadz-3dIIEFdnYvmS-kgnFuCzRmY9RDyFI25uNsVYf3C4NLEV2lePsulby0z234EVJ7OeA__"
            alt=""
          />

          <div className=" my-auto">
            <p className=" text-[14px]  font-semibold  leading-[16.8px] font-urbanist text-primary1">
              {side.name}
            </p>
            <p className="text-[#4C606E80] text-[14px]  font-semibold  leading-[16.8px] font-urbanist ">
              {side.statu}
            </p>
          </div>
        </li>
        <li className=" text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#4C606E]">
          <p className="text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#4C606E] ">
            {" "}
            {side.date}
          </p>
          <p className="text-[12px] font-semibold leading-[12px] font-urbanist text-[#b5bec580] ">
            {side.hour}
          </p>
        </li>

        <li className=" text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#4C606E] ">
          {side.age}
        </li>
        <li className=" text-[14px] font-semibold leading-[16.8px] font-urbanist text-[#4C606E]">
          {side.lang}
        </li>
        <li>
          <button className=" text-[12px] font-[700] leading-[14.4px] w-[69px]  border border-[#4C606E] items-center h-[40px] text-[#4C606E] font-urbanist rounded-[10px]  ">
            {side.case}
          </button>
        </li>
        <li className="items-center w-[17%] justify-between flex">
          <button className="text-[#298EA6] items-center gap-2 justify-center text-[12px] flex font-[700] leading-[14.4px] font-urbanist   w-[95px] rounded-lg h-[33px] bg-[#E3F1F4]">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17C13.1422 17 16.5 13.6422 16.5 9.5C16.5 5.35775 13.1422 2 9 2C4.85775 2 1.5 5.35775 1.5 9.5C1.5 13.6422 4.85775 17 9 17Z"
                stroke="#298EA6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.75 9.5L8.25 11L11.25 8"
                stroke="#298EA6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {side.Approv}
          </button>
          <button className="w-[33px] items-center justify-center border-[0.6px] border-[#EF3826] rounded-lg h-[33px]">
            <svg
              className="mx-auto "
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z"
                stroke="#EF3826"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 7.25L6.75 11.75"
                stroke="#EF3826"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.75 7.25L11.25 11.75"
                stroke="#EF3826"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </li>
      </li>
    );
  });

  return (
    <div className="top-[116px]">
      <p className="mb-[7px]  border-[#063248ff] text-[#063248] text-[32px] leading-8  font-urbanist  font-[700]  tracking-[-0.1px]">
        Appointements
      </p>
      <p className="text-[#4C606E] mb-[32px] text-[14px] leading-[16.8px]  font-urbanist  font-[600] ">
        Check and Approve your new appointements{" "}
      </p>

      <div className="shadow-multiple border border-white rounded-[22px] ">
        <div className=" rounded-tl-[22px] rounded-tr-[22px] border-[#D5D5D5] ">
          <p className=" py-[15px] px-[23px] text-primary1 text-[20px] font-bold leading-[24px] font-urbanist">
            {" "}
            Appointement Requests{" "}
            <span className="text-[16px] font-semibold leading-[19.2px] font-urbanist text-[#4C606E]">
              (4 new Requests)
            </span>
          </p>
          <ul className="flex py-[15px] pl-[23px] pr-[300px] border-[0.6px] w-[100%] border-[#D5D5D5]  justify-between ">
            <li className=" text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]">
              Patient
            </li>
            <li className="flex justify-between w-[30%]">
              <div className=" text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]">
                date
              </div>
              <div className="flex justify-between">
                <div className=" text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]">
                  Age
                </div>

                <div className=" text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]">
                  Language
                </div>
              </div>
            </li>
            <li className=" text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]">
              Diagnosis
            </li>
            <li className=" text-[14px] font-extrabold leading-[16.8px] font-urbanist text-[#063248]">
              Approval
            </li>
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
        <ul className="mb-[32px]">{MySidebarlist}</ul>
      </div>
    </div>
  );
};

export default AppointRequest;
