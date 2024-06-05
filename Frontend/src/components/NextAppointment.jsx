import React from "react";
import { Link } from "react-router-dom";
import { WiTime9 } from "react-icons/wi";
import { TbMessageCircle2 } from "react-icons/tb";
import { LuVideo } from "react-icons/lu";

const NextAppointment = ({ photo, timing, name, age, topics }) => {
  return (
    <div className="flex flex-col flex-start justify-between items-center h-[60%] w-[50%] border rounded-xl p-4 shadow-xl ml-2">
      <h4 className="flex flex-start font-urbanist text-lg font-bold leading-6 text-left text-primdark border-b-[1px] w-[100%] pb-2">
        Next Appointment
      </h4>
      <div className="flex flex-start items-center font-urbanist text-sm font-semibold leading-3 text-left text-primdark w-[100%] mt-2">
        Initial Meeting
      </div>

      {/* Appointment Timing */}
      <div className="flex items-center font-urbanist text-xs font-semibold leading-3 text-left text-graycolor w-[100%] mt-2">
        <WiTime9 className="mr-2" />
        {timing}
      </div>

      {/* Profile */}
      <div className="flex flex-start space-x-2 w-[100%] items-center mt-4 pb-4">
        <div>
          <img src={photo} alt="Profile" className="rounded-full" />
        </div>
        <div className="flex flex-col">
          {/* Name */}
          <p className="font-urbanist text-sm font-semibold leading-3 text-left text-primdark">
            {name}
          </p>
          {/* Age */}
          <p className="font-urbanist text-sm font-semibold leading-3 text-left text-graycolor mt-2">
            {age} years old
          </p>
        </div>
      </div>

      {/*Topics */}
      <div className="flex flex-start flex-col border-b-[1px] pb-2">
        <p className="font-urbanist text-sm font-semibold leading-3 text-left text-primdark">
          Topics:
        </p>
        <p className="font-urbanist text-sm font-semibold leading-4 text-left text-secdark my-2">
          {topics}
        </p>
      </div>

      {/*Messages & Vedio call*/}
      <div className="flex justify-between items-center w-[100%] mt-2">
        <Link
          to="/therapist/chat"
          className="flex justify-center  items-center border text-sm font-semibold text-sechover bg-seclight rounded-lg w-[48%] p-2"
        >
          <TbMessageCircle2 className="mr-2" /> Messages
        </Link>
        <button className="flex justify-center items-center border text-sm font-semibold text-secwhite bg-sechover rounded-tl-8 gap-2 rounded-lg w-[48%] p-2">
          <LuVideo /> Vedio Call
        </button>
      </div>
    </div>
  );
};

/* Example
    <NextAppointment
      timing='July 7 , 9:15 - 11:00 AM (1 hour 30 min)'
      name='Maria Dolce Gabana'
      age='32'
      topics='Deppressive states , Panic attacks, isolation'
      >
    </NextAppointment>
 */

export default NextAppointment;
