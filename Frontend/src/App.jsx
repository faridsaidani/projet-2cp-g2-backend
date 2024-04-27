import React from 'react';
import './index.css';
import ContactUs from './pages/LANDING PAGE/ContactUs';
import Blog from './pages/LANDING PAGE/Blog';
import QuizPage from './pages/ADMIN/QuizPage.jsx';
import SignUp from '../src/pages/SignUp'
import Overview from './pages/ADMIN/OverviewAdmin.jsx'
import TeamAdd from './pages/ADMIN/TeamAdd'
import UpComingAppointment from './components/UpComingAppointment';
import BlogAdmin from './pages/ADMIN/BlogAdmin';
import NextAppointment from './components/NextAppointment'
import CompletedAppointment from './components/CompletedAppointment'
import Team from './pages/ADMIN/Team.jsx'
import OverviewTh from './pages/THERAPIST/OverviewTh';
import AppointmentRequestCard from './components/AppointmentRequestCard.jsx';
import Appointments from './pages/THERAPIST/Appointments.jsx';

const App = () => {
  return (
    <div>
        <QuizPage></QuizPage>
 
    </div>
  )
}

export default App