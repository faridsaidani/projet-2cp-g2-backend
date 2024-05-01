import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin";
import TopBar from "../../components/TopBar";
import AdminCard from "../../components/AdminCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import AreaChartComponent from "../../components/AreaChartComponent";

const Overview = () => {
  const svgIcon1 = (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
        fill="#E3F1F4"
      />
      <path
        opacity="0.587821"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.6641 23.3333C20.6641 26.2789 23.0519 28.6667 25.9974 28.6667C28.9429 28.6667 31.3307 26.2789 31.3307 23.3333C31.3307 20.3878 28.9429 18 25.9974 18C23.0519 18 20.6641 20.3878 20.6641 23.3333ZM33.9974 28.6667C33.9974 30.8758 35.7883 32.6667 37.9974 32.6667C40.2065 32.6667 41.9974 30.8758 41.9974 28.6667C41.9974 26.4575 40.2065 24.6667 37.9974 24.6667C35.7883 24.6667 33.9974 26.4575 33.9974 28.6667Z"
        fill="#298EA6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.9778 31.333C19.6826 31.333 14.5177 34.5684 14.0009 40.9319C13.9727 41.2786 14.6356 41.9997 14.97 41.9997H36.9956C37.9972 41.9997 38.0128 41.1936 37.9972 40.933C37.6065 34.3906 32.3616 31.333 25.9778 31.333ZM45.2746 41.9997L40.1333 41.9997C40.1333 38.9984 39.1417 36.2288 37.4683 34.0005C42.0103 34.0501 45.7189 36.3465 45.998 41.1997C46.0092 41.3951 45.998 41.9997 45.2746 41.9997Z"
        fill="#298EA6"
      />
    </svg>
  );

  const svgIcon2 = (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
        fill="#E3F1F4"
      />
      <path
        d="M42.137 23.3021C41.0036 22.0488 39.1103 21.4221 36.3636 21.4221H36.0436V21.3688C36.0436 19.1288 36.0436 16.3555 31.0303 16.3555H29.0036C23.9903 16.3555 23.9903 19.1421 23.9903 21.3688V21.4355H23.6703C20.9103 21.4355 19.0303 22.0621 17.897 23.3155C16.577 24.7821 16.617 26.7555 16.7503 28.1021L16.7636 28.1955L16.8744 29.3588C16.8887 29.5085 16.9695 29.6439 17.0953 29.7265C17.4023 29.9281 17.9929 30.311 18.337 30.5021C18.5236 30.6221 18.7236 30.7288 18.9236 30.8355C21.2036 32.0888 23.7103 32.9288 26.257 33.3421C26.377 34.5955 26.9236 36.0621 29.8436 36.0621C32.7636 36.0621 33.337 34.6088 33.4303 33.3155C36.1503 32.8755 38.777 31.9288 41.1503 30.5421C41.2303 30.5021 41.2836 30.4621 41.3503 30.4221C41.9001 30.1114 42.4714 29.7256 42.9873 29.3512C43.1001 29.2694 43.1724 29.1434 43.1878 29.0049L43.217 28.7421L43.2836 28.1155C43.297 28.0355 43.297 27.9688 43.3103 27.8755C43.417 26.5288 43.3903 24.6888 42.137 23.3021ZM31.4703 32.4355C31.4703 33.8488 31.4703 34.0621 29.8303 34.0621C28.1903 34.0621 28.1903 33.8088 28.1903 32.4488V30.7688H31.4703V32.4355ZM25.897 21.4221V21.3688C25.897 19.1021 25.897 18.2621 29.0036 18.2621H31.0303C34.137 18.2621 34.137 19.1155 34.137 21.3688V21.4355H25.897V21.4221Z"
        fill="#298EA6"
      />
      <path
        d="M42.0765 32.1818C42.4296 32.0123 42.8348 32.2932 42.7993 32.6832L42.2938 38.2526C42.0138 40.9193 40.9204 43.6393 35.0538 43.6393H24.8938C19.0271 43.6393 17.9338 40.9193 17.6538 38.266L17.173 32.9781C17.138 32.5927 17.5347 32.3125 17.8868 32.4732C19.3444 33.1383 22.4673 34.5162 24.2962 34.9772C24.4609 35.0188 24.5949 35.1364 24.6638 35.2917C25.4555 37.0757 27.2259 38.026 29.8004 38.026C32.3494 38.026 34.1431 37.0392 34.9369 35.2519C35.0059 35.0965 35.1404 34.9788 35.3052 34.9371C37.2448 34.4467 40.5576 32.9109 42.0765 32.1818Z"
        fill="#298EA6"
      />
    </svg>

    
  );

  const svgIcon3 = (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
        fill="#E3F1F4"
      />
      <path
        d="M19.1111 40.8889H42.4444C43.3036 40.8889 44 41.5853 44 42.4444C44 43.3036 43.3036 44 42.4444 44H17.5556C16.6964 44 16 43.3036 16 42.4444V17.5556C16 16.6964 16.6964 16 17.5556 16C18.4147 16 19.1111 16.6964 19.1111 17.5556V40.8889Z"
        fill="#298EA6"
      />
      <path
        opacity="0.5"
        d="M24.9091 34.175C24.3216 34.8017 23.3372 34.8335 22.7104 34.2459C22.0836 33.6583 22.0519 32.6739 22.6395 32.0472L28.4728 25.8249C29.0411 25.2188 29.9854 25.1662 30.6174 25.7056L35.2214 29.6343L41.22 22.0361C41.7524 21.3618 42.7306 21.2467 43.4049 21.779C44.0792 22.3114 44.1942 23.2895 43.6619 23.9638L36.6619 32.8305C36.1152 33.5231 35.1024 33.6227 34.4312 33.0499L29.7272 29.0358L24.9091 34.175Z"
        fill="#298EA6"
      />
    </svg>
  );

  const svgIcon4 = (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
        fill="#E3F1F4"
      />
      <path
        opacity="0.78"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.6299 23.8093C28.65 23.5488 28.8672 23.3477 29.1285 23.3477H29.5463C29.8032 23.3477 30.0183 23.5423 30.0438 23.7979L30.6655 30.0143L35.0802 32.537C35.236 32.626 35.3321 32.7917 35.3321 32.9712V33.3597C35.3321 33.6894 35.0186 33.9288 34.7006 33.8421L28.3974 32.123C28.1661 32.0599 28.0121 31.8414 28.0305 31.6023L28.6299 23.8093Z"
        fill="#298EA6"
      />
      <path
        opacity="0.901274"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.7204 14.9844C22.4563 14.6697 21.9464 14.7902 21.851 15.1898L20.2176 22.038C20.1399 22.3636 20.398 22.6721 20.7322 22.6532L27.777 22.254C28.1879 22.2307 28.3963 21.7486 28.1317 21.4334L26.3304 19.2867C27.4956 18.8884 28.7312 18.6803 30 18.6803C36.2592 18.6803 41.3333 23.7544 41.3333 30.0137C41.3333 36.2729 36.2592 41.347 30 41.347C23.7408 41.347 18.6667 36.2729 18.6667 30.0137C18.6667 28.9629 18.809 27.9338 19.0864 26.9446L16.5188 26.2244C16.1808 27.4296 16 28.7005 16 30.0137C16 37.7457 22.268 44.0137 30 44.0137C37.732 44.0137 44 37.7457 44 30.0137C44 22.2817 37.732 16.0137 30 16.0137C28.0547 16.0137 26.2021 16.4104 24.5186 17.1274L22.7204 14.9844Z"
        fill="#298EA6"
      />
    </svg>
  );

  const data = [20, 10 , 40 , 0 , 20 , 75 , 80 , 65 , 72 , 11 , 18 , 90 ];
  const labels = ["5k","10", "15k","20k","25k","30k","35k","40k","45k","50k","55k","60k"]

  return (
    <div>
      <SideBarAdmin></SideBarAdmin>
      <TopBar></TopBar>
      <div className="flex flex-col justify-between items-center fixed  w-[74%] h-[75%] text-urbanist mb-10 mr-10 right-0 bottom-0">
        <div className="flex justify-between w-[100%] mb-4">
          <span className="text-2xl text-primdark font-semibold leading-38.4 tracking-tighter text-left w-83 h-38 gap-0">
            Dashboard
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 w-[100%] h-[28%]">
          <AdminCard
            name="Total User"
            value="40.689"
            svgIcon={svgIcon1}
            trendPercentage="8.5%"
            trend="up"
          />

          <AdminCard
            name="Total Therapists"
            value="50,600"
            svgIcon={svgIcon2}
            trendPercentage="1.3%"
            trend="up"
          />

          <AdminCard
            name="Total Appointements"
            value="40,689"
            svgIcon={svgIcon3}
            trendPercentage="8.5%"
            trend="down"
          />

          <AdminCard
            name="Total Pending"
            value="40.689"
            svgIcon={svgIcon4}
            trendPercentage="13%"
            trend="up"
          />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center w-[100%] h-[100%] mt-2 ">
          <div className="flex flex-col justify-between w-[100%] h-[95%] shadow-xl  rounded-xl p-4">
            <div className="flex justify-between items-center ">
              <p className="font-urbanist text-base font-bold leading-5 text-left text-primdark">
                Sale Details
              </p>
              <div className=" flex  justify-center space-x-2 w-[10%] items-center bg-primback py-2  font-Urbanist text-xs text-secdark font-semibold leading-3 border rounded-md">
                <p>October</p> <MdKeyboardArrowDown />
              </div>
            </div>
            {/*Area Chart*/}
            <div className="flex justify-center items-center flex-1">
              <AreaChartComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
