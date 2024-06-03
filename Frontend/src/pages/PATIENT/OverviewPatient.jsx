import React from 'react'
import TopSection from "../../components/TopSection";
import Sidebarr from "../../components/Sidebarr";
import MyComponent from "../../components/patient/patientOverview/Mycomponent"
import Asidebar from "../../components/patient/patientOverview/Aside"
import Therapistist from "../../components/patient/patientOverview/Cards"

const OverviewPatient = () => {
  return (
    <div>
      <TopSection/>
      <Sidebarr/>
      <MyComponent/>
      <Asidebar/>
      <Therapistist/>



    </div>
  )
}

export default OverviewPatient