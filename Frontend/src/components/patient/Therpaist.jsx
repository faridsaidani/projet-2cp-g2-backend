// eslint-disable-next-line no-unused-vars
import React from "react";

import Modal from "./Therapist list/Modal";
import TherapistList from "./Therapist list/TherapistList";
import Filter from "./Therapist list/Filter";
import DoctorCard from "./Therapist list/DoctorCard";
import Therapistliste3 from "./Therapist list/Therapistliste3";
// import Chat from '../components/Chat'
import { useState } from "react";

const Therpaist = () => {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <div>
  
      {/*filter*/}
      <div className=" w-[80%] flex justify-between  absolute left-[250px] top-[120px]">
        <Filter />
        <TherapistList />
      </div>

      {/*Make appointment*/}
      {/* <Therapistliste3/>   */}
    </div>
  );
};

export default Therpaist;
