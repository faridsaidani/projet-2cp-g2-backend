import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";

const Sidebarr = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (itemId) => {
    setActiveItem(itemId);
  };

  const sidebarItems = [
    { id: 1, title: "Home", icon: <GrHomeRounded />, path: "/patient/" },
    {
      id: 2,
      title: "Therapist List",
      icon: <FiUsers />,
      path: "/patient/therapists-list",
    },
    {
      id: 3,
      title: "Messages",
      icon: <LuMessagesSquare />,
      path: "/patient/chat",
    },
    {
      id: 4,
      title: "Settings",
      icon: <IoSettingsOutline />,
      path: "/patient/password",
    },
    { id: 5, title: "Log Out", icon: <IoIosLogOut />, path: "" },
    { id: 6, title: "Help Center", icon: <BiHelpCircle />, path: "" },
  ];

  const SidebarItems = sidebarItems.map((list) => {
    if (list.id == 5) {
      return (
        <li key={list.id}>
          <Link to={list.path}>
            <div
              className={`
                        hover:bg-complimetary2 hover:border hover:rounded-lg hover:my-[230px] mt-[230px] hover:flex  hover:items-center hover:fill-[#000]   hover:h-12 hover:pl-6  justify-start text-white  flex items-center gap-3 cursor-pointer 

                        ${
                          activeItem === list.title &&
                          "bg-[#C3E7FA]   my-[22px] mt-[230px] pl-6 text-primary1 border rounded-lg items-center fill-[#000]  h-12 "
                        } 

                  `}
              onClick={() => handleClick(list.title)}
            >
              <div>{list.icon}</div>
              <p>{list.title}</p>
            </div>
          </Link>
        </li>
      );
    }
    return (
      <li key={list.id}>
        <Link to={list.path}>
          <div
            className={`
            hover:bg-complimetary2 hover:border hover:rounded-lg hover:my-[22px]  hover:flex  hover:items-center hover:fill-[#000]   hover:h-12 hover:pl-6  justify-start text-white my-[22px] flex items-center gap-3 cursor-pointer 
          
            ${
              activeItem === list.title &&
              "bg-[#C3E7FA] pl-6  my-[22px] text-primary1 border rounded-lg items-center fill-[#000]  h-12 "
            } 
          
          `}
            onClick={() => handleClick(list.title)}
          >
            <div>{list.icon}</div>
            <p>{list.title}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className=" w-[90%] h-[99vh]  px-6 py-11  bg-primary1 rounded-3xl">
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

      {/* {MySidebarlist} */}
      <div className="mt-[90px]  text-[#fff] justify-between ">
        <ul>{SidebarItems}</ul>
      </div>
    </div>
  );
};

export default Sidebarr;
