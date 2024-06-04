import React from "react";
import TopSection from "../../components/TopSection";
import Sidebarr from "../../components/Sidebarr";
import AdminTherapist from "../../components/admin/AdminTherapist";

const TherapistApproval = () => {
  return (
    <div className="grid grid-cols-[20%_80%] ml-5 mt-3 h-screen ">
      <Sidebarr />
      <div className=" flex flex-col ">
        <TopSection />
        <AdminTherapist />
      </div>
    </div>
  );
};

export default TherapistApproval;
