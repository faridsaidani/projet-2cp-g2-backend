// eslint-disable-next-line no-unused-vars
import React from "react";

function TopSection() {
  return (
    <div className="flex items-center justify-between px-6 py-2.5 rounded-xl bg-primary2 w-[98%]">
      {/* Search_input */}
      <div className="w-[73%] flex  py-[12px] px-6 rounded-2xl border border-solid border-complimetary1 border-opacity-10  ">
        <svg
          className="shrink-0 w-6 aspect-square"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#4C606E"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L16.7 16.7"
            stroke="#4C606E"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          type="search"
          className="w-[100%]  bg-primary2  flex focus:outline-none   self-stretch px-[21px]  text-base font-medium rounded-2xl  "
          id="default-search"
          placeholder="Search Appointement, Patient, Therapist or etc ..."
          required
        />
      </div>

      {/* Search_input--*/}

      <div className="flex ">
        <div className=" ml-[20px] flex gap-3 justify-between self-stretch   py-1 my-auto">
          <svg
            className="shrink-0 w-6 aspect-square"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21L4.9 15.3C3.99713 13.4948 3.76612 11.4272 4.2483 9.46722C4.73049 7.50725 5.8944 5.78282 7.53176 4.60254C9.16911 3.42226 11.173 2.86316 13.1849 3.02528C15.1968 3.1874 17.0854 4.06017 18.5126 5.48741C19.9398 6.91464 20.8126 8.80319 20.9747 10.8151C21.1369 12.827 20.5777 14.8309 19.3975 16.4683C18.2172 18.1056 16.4928 19.2695 14.5328 19.7517C12.5728 20.2339 10.5052 20.0029 8.7 19.1L3 21Z"
              stroke="#063248"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="19.5" cy="4.5" r="2.5" fill="#FF0000" />
          </svg>

          <svg
            className="shrink-0 w-6 aspect-square"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
              stroke="#063248"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2865 21.5583 13.5326 21.3044 13.7 21"
              stroke="#063248"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="18.5" cy="4.5" r="2.5" fill="#FF0000" />
          </svg>
        </div>

        <div className="flex items-center gap-3 ml-[22px]  ">
          <div className="ml-[6px] flex flex-col justify-center items-center gap-2.5 py-[6px] px-[11px] p-1 rounded-full border border-[#fff] bg-[#c3e7fa] text-[#298ea6] font-urbanist text-lg font-semibold leading-[normal]">
            B
          </div>

          <div className="flex flex-col items-start gap-1 ">
            <div className="flex items-center">
              <div className="text-[#063248] font-urbanist font-semibold leading-[normal]">
                {localStorage.getItem("patient_username")}
              </div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#063248"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
