/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React ,{useState} from "react";
// import '../index.css'
import { GrHomeRounded } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";


const SideBar = () => {
  // Sidebarlist
  // const Sidebarlist = [
  //     { id: 1, title: "Overview", src:'GrHomeRounded'},
  //     { id: 2, title: "Therapist List",},
  //     { id: 3, title: "Messages",},
  //     { id: 4, title: "Settings",  },
  //     { id: 5, title: "Log Out", },
  //     { id: 6, title: "Help Center",  },
  // ];

  const [activeItem, setActiveItem] = useState('home');

  const handleClick = (itemId) => {
      setActiveItem(itemId);
  };



  const [logoutHovered, setLogoutHovered] = useState(false);
  const [helpHovered, setHelpHovered] = useState(false);

  const handleLogoutHover = () => {
    setLogoutHovered(!logoutHovered);
  };

  const handleHelpHover = () => {
    setHelpHovered(!helpHovered);
  };


  // Sidebarlist--
  


  return (
    <div className="ml-[13px] fixed  h-[95vh] top-[24px] px-6 py-11 w-[15%] bg-primary1 rounded-3xl">
      {/* Logo */}
      <div className="  flex gap-2 text-2xl text-[#fff] whitespace-nowrap">
        <svg
          width="34"
          className="shrink-0 aspect-square w-[34px]"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.768 10.3888C8.8752 6.60116 11.5567 0 16.988 0C22.4194 0 25.1009 6.60116 21.2081 10.3888L16.988 14.4947L12.768 10.3888Z"
            fill="#C3E7FA"
          />
          <path
            d="M12.7925 23.6112C8.89967 27.3988 11.5811 34 17.0125 34C22.4439 34 25.1253 27.3988 21.2326 23.6112L17.0125 19.5053L12.7925 23.6112Z"
            fill="#C3E7FA"
          />
          <path
            d="M10.3888 21.232C6.60116 25.1248 0 22.4434 0 17.012C0 11.5806 6.60116 8.89916 10.3888 12.792L14.4947 17.012L10.3888 21.232Z"
            fill="#C3E7FA"
          />
          <path
            d="M23.6112 21.2076C27.3988 25.1004 34 22.4189 34 16.9875C34 11.5562 27.3988 8.87468 23.6112 12.7675L19.5053 16.9875L23.6112 21.2076Z"
            fill="#C3E7FA"
          />
        </svg>

        <div className="flex-auto my-auto">OxyPsy</div>
      </div>
      {/* Logo-- */}



      {/*  Sidebarlist */}
      <div className="mt-[90px]  text-[#fff] justify-between ">
        {/* {MySidebarlist} */}
        {/* <div
        className="hover:text-primary1 hover:bg-complimetary2 hover:border hover:rounded-lg  hover:my-[12px]  hover:flex  hover:items-center hover:fill-[#000] hover:w-[179px] hover:h-12 hover:pl-6  border-[#000]  "
      > */}
                                      <div className={`  hover:bg-complimetary2 hover:border hover:rounded-lg  hover:my-[22px]  hover:flex  hover:items-center hover:fill-[#000]   hover:h-12 hover:pl-6  justify-start text-white  my-[22px] flex items-center hover:text-primary1 gap-3 cursor-pointer ${activeItem === 'home' && 'rounded-lg h-12 items-center bg-[#C3E7FA] pl-6 text-black my-[22px] text-primary1'}`} onClick={() => handleClick('home')}>

        {/* <div  className="my-[22px] flex items-center gap-3"> */}
        <GrHomeRounded  />
          <a href="">Home</a>
        {/* </div> */}
      </div>
      {/* <div className=" hover:bg-complimetary2 hover:border hover:rounded-lg hover:text-primary1  hover:my-[12px]  hover:flex  hover:items-center  hover:w-[179px] hover:h-12 hover:pl-6  border-[#000]  "> */}
      <div className={`  hover:bg-complimetary2 hover:border hover:rounded-lg  hover:my-[22px]  hover:flex  hover:items-center hover:fill-[#000]   hover:h-12 hover:pl-6  justify-start text-white  my-[22px] flex items-center hover:text-primary1 gap-3 cursor-pointer ${activeItem === 'THerapist' && 'rounded-lg h-12 items-center bg-[#C3E7FA] pl-6  my-[22px] text-primary1'}`} onClick={() => handleClick('THerapist')}>

        {/* <div  className={my-[22px] flex items-center hover:text-primary1 gap-3 ${activeItem === 'therapist' && ' rounded-md bg-[#C3E7FA] text-primary1'}`} onClick={() => handleClick('therapist')}> */}
        <FiUsers  className="hover:text-primary1 " />
          <a href="" >Therapist List</a>
        </div>
      {/* </div> */}
      {/* <div
        className="hover:text-primary1 hover:bg-complimetary2 hover:border hover:rounded-lg  hover:my-[12px]  hover:flex  hover:items-center hover:fill-[#000] hover:w-[179px] hover:h-12 hover:pl-6  border-[#000]  "
      > */}
                                            <div className={`  hover:bg-complimetary2 hover:border hover:rounded-lg  hover:my-[22px]  hover:flex  hover:items-center hover:fill-[#000]  hover:h-12 hover:pl-6  justify-start text-white  my-[22px] flex items-center hover:text-primary1 gap-3 cursor-pointer ${activeItem === 'msg' && 'rounded-lg h-12 items-center bg-[#C3E7FA] pl-6  my-[22px] text-primary1'}`} onClick={() => handleClick('msg')}>

        {/* <div  className="my-[22px] flex items-center gap-3"> */}
        <LuMessagesSquare  />
          <a href=""> Messages</a>
        {/* </div> */}
      </div>
      {/* <div
        className="hover:text-primary1 hover:bg-complimetary2 hover:border hover:rounded-lg  hover:my-[12px]  hover:flex  hover:items-center hover:fill-[#000] hover:w-[179px] hover:h-12 hover:pl-6  border-[#000]  "
      > */}
                                            <div className={`  hover:bg-complimetary2 hover:border hover:rounded-lg  hover:my-[22px]  hover:flex  hover:items-center hover:fill-[#000]  hover:h-12 hover:pl-6  justify-start text-white  my-[22px] flex items-center hover:text-primary1 gap-3 cursor-pointer ${activeItem === 'stg' && 'rounded-lg h-12 items-center bg-[#C3E7FA] pl-6  my-[22px] text-primary1'}`} onClick={() => handleClick('stg')}>

        {/* <div  className="my-[22px] flex items-center gap-3"> */}
        <IoSettingsOutline  />
          <a href="">Settings</a>
        </div>
      {/* </div> */}
      {/* <div
          className="hover:text-primary1 mt-[230px] hover:bg-complimetary2 hover:border hover:rounded-lg  hover:mb-[12px] hover:flex  hover:items-center hover:fill-[#000] hover:w-[179px] hover:h-12 hover:pl-6  border-[#000]  "
        > */}
                                              <div className={` mt-[230px] over:text-primary1 hover:mt-[230px]  hover:rounded-lg  hover:mb-[12px] hover:flex  hover:items-center hover:fill-[#000] 
                                               hover:bg-complimetary2 hover:border   hover:my-[12px]  hover:h-12 hover:pl-6  justify-start text-white  my-[22px] flex items-center hover:text-primary1 gap-3 cursor-pointer ${activeItem === 'lg' && 'rounded-lg h-12 items-center bg-[#C3E7FA] pl-6  my-[22px] text-primary1'}`} onClick={() => handleClick('lg')}>

          {/* <li  className="my-[22px] flex items-center gap-3"> */}
          <IoIosLogOut  />
            <a>Log Out</a>
          {/* </li> */}
         </div> 
        {/* <div
        className="hover:text-primary1 hover:bg-complimetary2 hover:border hover:rounded-lg  hover:my-[12px]  hover:flex  hover:items-center hover:fill-[#000] hover:w-[179px] hover:h-12 hover:pl-6  border-[#000]  "
      > */}
                                            <div className={`  hover:bg-complimetary2 hover:border hover:rounded-lg  hover:my-[22px]  hover:flex  hover:items-center hover:fill-[#000]  hover:h-12 hover:pl-6  justify-start text-white  my-[22px] flex items-center hover:text-primary1 gap-3 cursor-pointer ${activeItem === 'hp' && 'rounded-lg h-12 items-center bg-[#C3E7FA] pl-6  my-[22px] text-primary1'}`} onClick={() => handleClick('hp')}>

        {/* <div  className="my-[22px] flex items-center gap-3"> */}
        <BiHelpCircle   />
          <a href="">Help Center</a>
        {/* </div> */}
      </div>
      </div>
      {/*  Sidebarlist-- */}
    </div>
  );
};

export default SideBar;
