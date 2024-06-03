import React from 'react'
import TopSection from "../../components/TopSection";
import Sidebarr from "../../components/Sidebarr";
import TherapistList from "../../components/patient/Therapist list/TherapistList"
const TherapistsList = () => {
  return (
    <div>
      <TopSection/>
      <Sidebarr/>
      <div className=''>

        <TherapistList/>
      </div>
    </div>

  )
}

export default TherapistsList