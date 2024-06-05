import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Home,
  AboutUs,
  Blog,
  ContactUs,
  QuizPage,
  SignUp,
  LogIn,


  BlogAdmin,
  OverviewAdmin,
  TherapistApproval,
  TherapistAd,
  MyTherapistsAdmin,
  PatientListAd,
  TeamAdd,
  Team,
  ProfileAd,
  NotificationsAd,
  PasswordChangingAd,
  PasswordAd,


  Overview,
  Profile,
  ChatPatient,
  TherapistsList,
  MyTherapistsPatient,
  Therapist,
  MakeAppointment,
  Notifications,
  PasswordChanging,
  Password,


  OverviewTh,
  Appointments,
  AppointmentRequest,
  CreateAnAppointment,
  PatientTh,
  PatientList,
  ChatTh,
  MyBlogs,
  AddBlog,
  TherapistProfile,
  NotificationsTh,
  PasswordChangingTh,
  PasswordTh,

  NotFound,
} from "./pages";

const App = () => {
  const [user, setUser] = useState({
    isAdmin: true, // true or false
    role: "patient", //"therapist"  or "patient"
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route
          path="admin-dashboard/*"
          element={user?.isAdmin ? <AdminRoutes /> : <Navigate to="/" />}
        />
        <Route
          path="patient/*"
          element={
            user?.role === "patient" ? <PatientRoutes /> : <Navigate to="/" />
          }
        />
        <Route
          path="therapist/*"
          element={
            user?.role === "therapist" ? (
              <TherapistRoutes />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<OverviewAdmin />} />
    <Route path="blog-admin" element={<BlogAdmin />} />
    <Route path="therapist-approval" element={<TherapistApproval />} />
    <Route path="therapist" element={<TherapistAd />} />
    <Route path="my-therapists" element={<MyTherapistsAdmin />} />
    <Route path="patient-list" element={<PatientListAd />} />
    <Route path="add-team" element={<TeamAdd />} />
    <Route path="team" element={<Team />} />
    <Route path="profile" element={<ProfileAd />} />
    <Route path="notifications" element={<NotificationsAd />} />
    <Route path="password-changing" element={<PasswordChangingAd />} />
    <Route path="password" element={<PasswordAd />} />
  </Routes>
);

const PatientRoutes = () => (
  <Routes>
    <Route path="/" element={<Overview />} />
    <Route path="profile" element={<Profile />} />
    <Route path="chat" element={<ChatPatient />} />
    <Route path="therapists-list" element={<TherapistsList />} />
    <Route path="therapist" element={<Therapist />} />
    <Route path="my-therapists" element={<MyTherapistsPatient />} />
    <Route path="make-appointment" element={<MakeAppointment />} />
    <Route path="notifications" element={<Notifications />} />
    <Route path="password-changing" element={<PasswordChanging />} />
    <Route path="password" element={<Password />} />
  </Routes>
);

const TherapistRoutes = () => (
  <Routes>
    <Route path="/" element={<OverviewTh />} />
    <Route path="appointments" element={<Appointments />} />
    <Route path="appointment-request" element={<AppointmentRequest />} />
    <Route path="create-appointment" element={<CreateAnAppointment />} />
    <Route path="patient" element={<PatientTh />} />
    <Route path="patient-list" element={<PatientList />} />
    <Route path="chat" element={<ChatTh />} />
    <Route path="my-blogs" element={<MyBlogs />} />
    <Route path="add-blog" element={<AddBlog />} />
    <Route path="profile" element={<TherapistProfile />} />
    <Route path="notifications" element={<NotificationsTh />} />
    <Route path="password-changing" element={<PasswordChangingTh />} />
    <Route path="password" element={<PasswordTh />} />
  </Routes>
);

export default App;
