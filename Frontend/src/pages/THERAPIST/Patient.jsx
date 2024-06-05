import React from 'react'
import { Link } from 'react-router-dom';
import SideBarTherapist from "../../components/SideBarTherapist";
import TopSection from "../../components/TopSection";
import PatientComponent from '../../components/PatientComponent';

const Patient = () => {
  return (
    <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
      <SideBarTherapist currentPage='patient list'/>
      <div className='flex flex-col my-10'>
        <TopSection/>
        <PatientComponent/>
      </div>
    </div>
  )
}

export default Patient