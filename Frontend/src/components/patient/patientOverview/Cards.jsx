import * as React from "react";
import "./index.css";
import axios from "axios";

export default function Therapistist() {
  const [data, setData] = React.useState(null);
  const [therapists, setTherapists] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/appointment/get_all/${localStorage.getItem(
            "user_id"
          )}`
        );
        console.log(response.data.appointments);
        setData(response.data.appointments);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/therapist/get_all`
        );
        console.log(response.data.therapists);
        setTherapists(response.data.therapists);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const getTherapist = (therapist_id) => {
    return therapists.find((therapist) => therapist.id === therapist_id);
  };
  let img = document.createElement("img");

  return (
    <div className="   gap-[12px] flex px-px mt-7 w-[100%] max-md:max-w-full justify-between">
      {data && therapists ? (
        data.map((item, index) => (
          <div className="w-[33%] flex flex-col" key={index}>
            <div className="flex flex-col grow px-2.5 py-3.5 font-semibold bg-white rounded-2xl shadow-custom">
              <div className="text-[14px] font-['Urbanist'] leading-[16.8px] text-primary1">
                {item.name}
              </div>
              <div className="flex gap-2 mt-3 text-xs text-slate-600 text-opacity-50">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_328)">
                    <path
                      d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8.00001 1.33333C4.31811 1.33333 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                      stroke="#4C606E"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 4V8H5"
                      stroke="#4C606E"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_328">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="my-auto text-[10px] leading-[12px] text-[#4C606E80]">
                  {item.date} {item.time}
                </div>
              </div>
              <div className="flex gap-2 mt-4 text-xs">
                <img
                  alt="hello"
                  src={`data:image/jpeg;base64,${
                    getTherapist(item.therapist_id).image_file
                  }`}
                  className="w-[37px] rounded-3xl shrink-0 aspect-[0.97]"
                />
                <div className="flex font-urbanist flex-col my-auto">
                  <div className="text-[12px] text-[#063248] leading[14.4px]">
                    {getTherapist(item.therapist_id).name}{" "}
                    {getTherapist(item.therapist_id).familly_name}
                  </div>
                  <div className="mt-1 leading[14.4px] text-[12px] text-[#4C606E80]">
                    Therapist
                  </div>
                </div>
              </div>
              <hr className="my-[11px] w-[94%]" />
              <div className="flex gap-3">
                <div className="justify-center font-urbanist font-semibold text-[14px] leading-[16.8px] px-[34px] py-2.5 whitespace-nowrap rounded-lg border border-solid border-[#4C606E] text-complimetary1">
                  Details
                </div>
                <div className="justify-center font-urbanist font-semibold text-[14px] leading-[16.8px] px-[22px] py-2.5 text-[#298EA6] bg-[#C3E7FA] rounded-lg">
                  Join Event
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
