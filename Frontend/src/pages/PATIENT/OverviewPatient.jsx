import React from "react";
import TopSection from "../../components/TopSection";
import SideBar from "../../components/SideBar";
import MyComponent from "../../components/patient/patientOverview/Mycomponent";
import Asidebar from "../../components/patient/patientOverview/Aside";
import Therapistist from "../../components/patient/patientOverview/Cards";

const OverviewPatient = () => {
  return (
    <div className="grid grid-cols-[20%_80%] ml-5 mt-3 h-screen ">
      <div className="">
        <SideBar currentPage='overview' />
      </div>
      <div className=" my-10 flex flex-col">
        <TopSection />
        <div className="mt-2 w-[98%] grid grid-cols-[71%_28%] justify-between ">
          <div className="flex flex-col mb-10">
            <MyComponent />
            <Therapistist />
          </div>
          <Asidebar />
        </div>
      </div>
    </div>
  );
};

export default OverviewPatient;
