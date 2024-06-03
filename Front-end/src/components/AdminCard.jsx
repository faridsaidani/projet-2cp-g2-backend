import React from 'react'
import { MdOutlineTrendingUp } from "react-icons/md";
import { MdOutlineTrendingDown } from "react-icons/md";

const AdminCard = ({ name, value, svgIcon , trendPercentage , trend }) => {
    let trendIcon;
    let trendLabel;
    let trendClassName;


    if (trend === "up") {
        trendIcon = <MdOutlineTrendingUp />;
        trendLabel = "Up from last week";
        trendClassName = "text-sechover";
      } else {
        trendIcon = <MdOutlineTrendingDown />;
        trendLabel = "Down from last week";
        trendClassName = "text-red-500";
      }
    
  return (
    <div className='flex flex-col justify-between border rounded-xl shadow-xl px-2 py-4'>
                <div className='flex justify-between p-2'>
                  <div className='flex flex-col'>
                    <p className='font-urbanist font-semibold text-secdark text-sm leading-5 text-left'>{name}</p>
                    <p className='font-urbanist text-2xl font-semibold leading-9 text-left'>{value}</p>
                  </div>
                    {svgIcon}
                </div>
                <div className='flex justify-start space-x-2 pl-2 place-items-center w-[100%]'>
                  <div className={`flex items-center  ${trendClassName}`}>
                    {trendIcon} {trendPercentage}
                  </div>
                  <div className=' flex w-[60%]font-urbanist font-semibold text-secdark text-xs leading-5 text-left'>
                    {trendLabel}
                  </div>
                </div>
    </div>
  )
}

export default AdminCard