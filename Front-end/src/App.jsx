import React from "react";
// import Login from "./Login/Login";
import FAQ from "./Home page/FAQ.jsx";
import GetStarted from "./Home page/GetStarted.jsx";
import Blogs from "./Home page/Blogs.jsx";
import Quizees from "./Home page/Quizees.jsx";
import HowWorks from "./Home page/HowWorks.jsx";
import BestTherapist from "./Home page/BestTherapist.jsx";
import Clients from "./Home page/Clients.jsx";
// import Header from "./Home page/Header.jsx";
import Hheader from ".//Home page/Header.jsx"
import Overview from "./patient/Overview.jsx"
import Ther from "./patient/Overview.jsx"
import Therapistliste3 from "./patient/Therapist list/Therapistliste3.jsx"
import SideBar from "./SideBar copy.jsx";
import Header from "./Header.jsx";

import SignUp from "./components/SignUp.jsx";
import Login from "./Login/Login.jsx";
import Therpaist from "./patient/Therpaist.jsx";
import Chat from "./chat/Chat.jsx";
import ChatWithTherapist from "./admin/Admin.jsx";
import Admintherapistlist from "./admin/Admintherapistlist.jsx";
import AdminTherapist from "./admin/AdminTherapist.jsx";
import AdminPatient from "./admin/AdminPatient.jsx";
import PatientList from "./Therapist/PatientList.jsx";
import PatientProfile from "./Therapist/PatientProfile.jsx";
import AppointRequest from "./Therapist/AppointRequest.jsx";
function App() {
  return (
    <>

      {/* <Login /> */}
    

      {/* Home page */}
         {/* <Hheader/>
        <GetStarted/>
        <Blogs/>
        <HowWorks/> 
        <BestTherapist/>
        <Clients/>
        <Quizees/>
        <FAQ/>      */}

    {/* Home page */}
        {/* patient */}
          <Header/>
       <SideBar/>        
            {/* patient overviewn */}
       {/* <Overview/>   */}
       {/* therapist list  */}
         {/* <Therpaist/>    */}
        {/* <Therapistliste3/>    */}
         <Chat/>    
         {/* <ChatWithTherapist/>   */}
        {/* <Admintherapistlist/>  */}
       {/* <AdminTherapist/>  */}
        {/* <AdminPatient/>  */}
 {/* <PatientList/>  */}
 {/* <PatientProfile/>  */}
 {/* <AppointRequest/>  */}


    </>
  );
}

export default App;
