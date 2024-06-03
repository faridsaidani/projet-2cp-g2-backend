import React,{useState} from 'react'
import SideBarAdmin from '../../components/SideBarAdmin'
import TopBar from '../../components/TopBar'
import IMG from '/assets/Profile.png'
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg";
import { LiaEdit } from "react-icons/lia";





const Profile = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="grid grid-cols-[20%_80%] h-screen overflow-hidden">
      <SideBarAdmin/>
      <div className='flex flex-col h-screen'>
        <TopBar/>
        <div className="grid grid-cols-[25%_70%] text-urbanist h-full pt-4 pb-10 mr-10">
          {/*Settings section */}
          <div className="left-0 bg-primback rounded-xl p-4">
          {/*Notifications*/}
          <h3 className="text-xl ">Settings</h3>
          <div className="flex flex-col justify-center items-center">
            <button
              className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${
                activeButton === "notifications" ? "text-sechover" : ""
              }`}
              onClick={() => setActiveButton("notifications")}
            >
              <IoMdNotificationsOutline />
              <div className="flex flex-col w-[70%] text-start px-6">
                <p className="text-bold">Notifications</p>
                <p className="text-xs">
                  Select notifications you want to receive
                </p>
              </div>
              <GrFormNext />
            </button>

            {/*Profile*/}
            <button
              className={`flex items-center w-[90%] border-b border-gray-300 p-4 text-sechover ${
                activeButton === "profile" ? "text-sechover" : ""
              }`}
              onClick={() => setActiveButton("profile")}
            >
              <FiUser />
              <div className="flex flex-col w-[70%] text-start px-6">
                <p className="text-bold">Profile</p>
                <p className="text-xs">
                  Update your personal information to get more information about
                  you
                </p>
              </div>
              <GrFormNext />
            </button>

            

            {/*Password*/}
            <button
              className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${
                activeButton === "password" ? "text-sechover" : ""
              }`}
              onClick={() => setActiveButton("password")}
            >
              <CgLock />
              <div className="flex flex-col w-[70%] text-start px-6">
                <p className="text-bold">Password</p>
                <p className="text-xs">
                  Choose a strong password to protect your information
                </p>
              </div>
              <GrFormNext />
            </button>
          </div>
          </div>

          {/*Page content*/}
          <div className="flex flex-col justify-start px-4 ">
          <div className="flex justify-between mx-4 mt-2 w-[95%] h-[10%]">
            <div>
              <h3 className="text-xl font-urbanist font-semibold text-left text-primdark">
                Profile
              </h3>
              <p className=" font-urbanist text-base font-medium leading-5 text-left text-secdark">
                Update your photo and personal information
              </p>
            </div>
            <button className="flex justify-center items-center space-x-2  py-2 px-4 bg-sechover rounded-lg text-secwhite">
              <p className="font-urbanist text-sm font-semibold leading-5 text-center">
                Edit profile
              </p>
              <LiaEdit />
            </button>
          </div>

          {/*Image and name section */}
          <div className="flex bg-primlight border rounded-lg shadow h-[20%] p-2 m-4 w-[95%]">
            <img src={IMG} alt="Profile" className="w-[15%]" />
            <div className="px-4 ">
              <h3 className="text-primdark font-bold">
                Bellatreche Hibatellah
              </h3>
              <p className="text-xs">It will be displayed on your profile</p>
              <button className="text-sechover text-sm">Update</button>
            </div>
          </div>

          {/*fields to edit*/}
          <div className="flex justify-between mx-4 my-2 h-[28%] w-[95%]">
            <div className="flex flex-col w-[45%] justify-between">
              <label
                className="font-urbanist text-primdark text-sm font-semibold leading-4 text-left"
                htmlFor=""
              >
                Name
              </label>
              <input
                type="text"
                class="p-2 border rounded-lg w-[100%] h-[20%] font-urbanist text-xs text-secdark font-light leading-4 text-left"
                placeholder="Hibatallah"
              />

              <label
                className="font-urbanist text-primdark text-sm font-semibold leading-4 text-left"
                htmlFor=""
              >
                User Name
              </label>
              <input
                type="text"
                class="p-2 border rounded-lg w-[100%] h-[20%] font-urbanist text-xs text-secdark font-light leading-4 text-left"
                placeholder="Hiba Bella"
              />

              <label
                className="font-urbanist text-primdark text-sm font-semibold leading-4 text-left"
                htmlFor=""
              >
                Gender
              </label>
              <input
                type="text"
                class="p-2 border rounded-lg w-[100%] h-[20%] font-urbanist text-xs text-secdark font-light leading-4 text-left"
                placeholder="female"
              />
            </div>

            <div className="flex flex-col w-[45%] justify-between ">
              <label
                className="font-urbanist text-primdark text-sm font-semibold leading-4 text-left"
                htmlFor=""
              >
                Family Name
              </label>
              <input
                type="text"
                class="p-2 border rounded-lg w-[100%] h-[20%] font-urbanist text-xs text-secdark font-light leading-4 text-left"
                placeholder="Bellatreche"
              />

              <label
                className="font-urbanist text-primdark text-sm font-semibold leading-4 text-left"
                htmlFor=""
              >
                Email
              </label>
              <input
                type="email"
                class="p-2 border rounded-lg w-[100%] h-[20%] font-urbanist text-xs text-secdark font-light leading-4 text-left"
                placeholder="Hibabella@gmail.com"
              />

              <label
                className="font-urbanist text-primdark text-sm font-semibold leading-4 text-left"
                htmlFor=""
              >
                Date of Birth
              </label>
              <input
                type="text"
                class="p-2 border rounded-lg w-[100%] h-[20%] font-urbanist text-xs text-secdark font-light leading-4 text-left"
                placeholder="27.03.2005"
              />
            </div>
          </div>

          {/*Files and Documents*/}
          <div className="flex flex-col justify-between mx-4 my-2 w-[95%]">
            <div>
              {" "}
              <p className="font-urbanist text-base font-semibold leading-5 text-left">
                Files & Documents
              </p>
            </div>

            <div className="flex items-center w-[100%] h-[60%]  space-x-[2%]">
              <div className="flex justify-center items-center border rounded-lg h-[100%] w-[18%] ">
                <svg
                  width="80%"
                  height="80%"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M65.625 55.5845V59.0626C65.625 60.8031 64.9336 62.4723 63.7029 63.703C62.4722 64.9337 60.803 65.6251 59.0625 65.6251H10.9375C9.19702 65.6251 7.52782 64.9337 6.29711 63.703C5.0664 62.4723 4.375 60.8031 4.375 59.0626V55.5845L19.6875 40.272L27.5406 48.1251L22.5094 53.1345C22.0975 53.5464 21.8661 54.1051 21.8661 54.6876C21.8661 55.2701 22.0975 55.8288 22.5094 56.2407C22.9213 56.6527 23.48 56.8841 24.0625 56.8841C24.645 56.8841 25.2037 56.6527 25.6156 56.2407L45.9375 35.897L65.625 55.5845Z"
                    fill="#A4ADFB"
                  />
                  <path
                    d="M18.1344 35.6344C18.3377 35.4293 18.5797 35.2666 18.8462 35.1555C19.1128 35.0445 19.3987 34.9873 19.6875 34.9873C19.9763 34.9873 20.2622 35.0445 20.5288 35.1555C20.7953 35.2666 21.0373 35.4293 21.2406 35.6344L30.625 45.0406L44.3844 31.2594C44.5877 31.0543 44.8297 30.8916 45.0962 30.7805C45.3628 30.6695 45.6487 30.6123 45.9375 30.6123C46.2263 30.6123 46.5122 30.6695 46.7788 30.7805C47.0453 30.8916 47.2873 31.0543 47.4906 31.2594L65.625 49.4156V10.9375C65.625 9.19702 64.9336 7.52782 63.7029 6.29711C62.4722 5.0664 60.803 4.375 59.0625 4.375H10.9375C9.19702 4.375 7.52782 5.0664 6.29711 6.29711C5.0664 7.52782 4.375 9.19702 4.375 10.9375V49.4156L18.1344 35.6344Z"
                    fill="#DADBFB"
                  />
                </svg>
              </div>
            </div>


            <div className="flex flex-start w-[95%] h-[20%]">
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                id="fileInput"
                onChange={(e) => handleFileUpload(e.target.files)}
              />
              <label
                htmlFor="fileInput"
                className="flex justify-center items-center font-urbanist text-sm  font-semibold text-center border border-sechover rounded-lg text-sechover cursor-pointer p-3"
              >
                <MdOutlineFileUpload className="mr-2" />
                Upload File
              </label>
            </div>





          </div>
          </div>

        </div>

      </div>
      
    </div>
  );
};

export default Profile;