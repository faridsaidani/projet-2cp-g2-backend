import React from 'react'
import TopSection from "../../components/TopSection";
import SideBar from '../../components/SideBar';
import TherapistList from "../../components/patient/Therapist list/TherapistList"
const TherapistsList = () => {
  return (
    <div className='flex justify-between'>
      <SideBar currentPage='therapist list'></SideBar>
      
      <div className='grid-rows-2 w-[80%] my-10 '>
          <TopSection/>
          <div>
            <TherapistList/>
          </div>
          {/*just add filter , div containing therapistlist and filter but some size modifications will be required*/}
          {/*the overflow-y must be in the therapist list only */}
      </div>
    </div>

  )
}

export default TherapistsList