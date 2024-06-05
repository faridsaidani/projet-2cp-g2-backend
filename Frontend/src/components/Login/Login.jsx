import "./index.css";
import { Link } from "react-router-dom";
import login from "./images/login.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  // const [values, setValues] = useState({ email: '', password: '' });
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  function handleInput(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  async function handleLogin(event) {
    event.preventDefault();
    let postLink = "http://localhost:5000/patient/login";
    let followUpLink = "/patient";
    if (values.role === "therapist") {
      postLink = "http://localhost:5000/therapist/login";
      followUpLink = "/therapist";
    }
    const validationErrors = validation(values);
    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      console.log("Logging in:", formData);
      setSubmitting(true);
      try {
        const response = await axios.post(postLink, values, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
          },
        });
        console.log(response.data); // Handle success response
        console.log("Redirecting to:", followUpLink);
        navigate(followUpLink);
      } catch (error) {
        alert("Login failed");
        console.error("Login failed:", error); // Handle error response
      } finally {
        setSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  }
  // useEffect(() => {
  //   if (submitting) {
  //     axios
  //       .post("/api/login", values)
  //       .then((response) => {
  //         console.log(response.data);
  //         setSubmitting(false);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setErrors({ server: "An error occurred while logging in" });
  //         setSubmitting(false);
  //       });
  //   }
  // }, [submitting, values]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={login} alt="Login" />
      </div>
      <div className="leading-relaxed bg-white flex flex-col justify-center">
        <form
          className="border border-[#ffff] w-full mx-auto p-20 bg-white"
          onSubmit={handleLogin}
        >
          <div className="flex text-complimetary1 font-normal text-base font-poppins mt-1 text-center md:text-left absolute right-14 top-14 ">
            Dont have an account?
            <Link to="/sign-up">
              <p className="ml-2 text-primary1 underline hover:underline hover:underline-offset-4">
                Sign Up
              </p>
            </Link>
          </div>
          <div className="mx-auto">
            <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-complimetary1 mb-12">
              Sign in
            </h1>

            <div className="text-center md:text-left">
              <div className="flex flex-col py-2">
                <label className="mb-1 text-complimetary1 font-poppins font-normal text-base leading-6">
                  Username or Email address
                </label>
                <input
                  className="border p-2 rounded-xl border-shad text-complimetary1 "
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleInput}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>

              <div className="flex flex-col py-2">
                <label className="mb-1 text-complimetary1 font-poppins font-normal text-base leading-6">
                  Password
                </label>
                <input
                  className="border p-2  rounded-xl border-shad text-complimetary1 "
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleInput}
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password}</span>
                )}
              </div>
            </div>
            <div className="flex">
              <label className="mr-2">
                <input
                  type="radio"
                  name="role"
                  value="therapist"
                  checked={values.role === "therapist"}
                  onChange={handleInput}
                />
                Therapist
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="patient"
                  checked={values.role === "patient"}
                  onChange={handleInput}
                />
                Patient
              </label>
            </div>

            <button
              className="border my-5 w-1/4 rounded-lg bg-complimetary2 py-3 text-primary1 font-[700] text-[18px] leading-[21.6px] font-urbanist"
              type="submit"
            >
              {/* <button
              className={`border my-5 w-1/4 rounded-lg bg-complimetary2 py-3 text-primary1 font-[700] text-[18px] leading-[21.6px] font-urbanist ${(isValid && dirty && isFormFilled(values)) ? 'hover:bg-blue-600' : ''}`}
              type="submit"
              disabled={!isValid || !dirty || !isFormFilled(values) || isSubmitting}
            > */}
              Sign In
            </button>
            <a
              className="underline absolute text-[16px] leading-[24px] font-poppins font-[400] text-primary1 right-20 hover:underline-offset-4"
              href="https://tailwindcss.com/docs/border-radius"
            >
              Forgot your password
            </a>
            <div className="flex text-complimetary1 font-normal text-base font-poppins mt-1 text-center md:text-left">
              Dont have an account?
              <Link to="/sign-up">
                <p className="ml-2 text-primary underline hover:underline hover:underline-offset-4">
                  Sign Up
                </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function validation(values) {
  const errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.email.trim()) {
    errors.email = "Username or Email is required!";
  } else {
    if (!email_pattern.test(values.email)) {
      errors.email = "Invalid email format";
    }
  }

  if (!values.password.trim()) {
    errors.password = "Password is required!";
  }

  return errors;
}

export default Login;

// const Login = () => {
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
//     <div className='hidden sm:block'>
//         <img className='w-full h-full object-cover'
// src={login}      alt=" " />

//     </div>
//     <div className= 'leading-relaxed  bg-white flex flex-col justify-center '>
//         <form className=' border border-[#ffff] w-full mx-auto  p-20  bg-white '>
//         <div className="text-complimetary1 font-normal text-base font-poppins mt-1 text-center md:text-left absolute right-14 top-14 ">
//       Dont have an account? <a className=" text-primary1 underline hover:underline hover:underline-offset-4" href="https://tailwindcss.com/docs/border-radius">Sign Up</a>
//     </div>
//     <div className="mx-auto">
//         <h1 className='font-poppins font-medium text-[32px] leading-[48px] text-complimetary1 mb-12 '>Sign in</h1>
//         <div className="text-center md:text-left ">

// <div className=" items-center">
// <div className="google-login-button custom-font py-5 mb-12 " >
// <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M22.5045 12.7331C22.5045 11.8698 22.433 11.2398 22.2783 10.5864H12.2188V14.483H18.1235C18.0045 15.4514 17.3616 16.9097 15.933 17.8897L15.913 18.0202L19.0936 20.4349L19.314 20.4564C21.3377 18.6247 22.5045 15.9297 22.5045 12.7331Z" fill="#4285F4"/>
// <path d="M12.212 23.0001C15.1048 23.0001 17.5334 22.0667 19.3072 20.4567L15.9263 17.89C15.0215 18.5083 13.8072 18.94 12.212 18.94C9.37874 18.94 6.974 17.1083 6.11678 14.5767L5.99113 14.5871L2.68388 17.0955L2.64062 17.2133C4.4025 20.6433 8.02155 23.0001 12.212 23.0001Z" fill="#34A853"/>
// <path d="M6.119 14.5765C5.89281 13.9232 5.76191 13.2231 5.76191 12.4998C5.76191 11.7764 5.89281 11.0765 6.1071 10.4231L6.10111 10.284L2.75239 7.73535L2.64283 7.78642C1.91667 9.20977 1.5 10.8081 1.5 12.4998C1.5 14.1915 1.91667 15.7897 2.64283 17.2131L6.119 14.5765Z" fill="#FBBC05"/>
// <path d="M12.2121 6.05997C14.224 6.05997 15.5811 6.91163 16.3549 7.62335L19.3787 4.73C17.5216 3.03834 15.1049 2 12.2121 2C8.02158 2 4.40251 4.35665 2.64062 7.78662L6.1049 10.4233C6.97403 7.89166 9.37878 6.05997 12.2121 6.05997Z" fill="#EB4335"/>
// </svg>

// <span className='text-complimetary1 custom-font ml-2 '>Continue with Google</span>
// </div>
// </div>
// </div>

// <div className="my-5 flex items-center mb-12 before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//       <p className="mx-6 mb-0 text-center font-semibold text-slate-500">OR</p>
//     </div>
//             <div className=' text-complimetary1   flex flex-col py-2'>
//                 <label className=' mb-1 text-complimetary1 font-poppins font-normal text-base leading-6 ' >User name or email address</label>
//                 <input className='border p-2 rounded-xl border-shad' type="email" />
//             </div>
//             <div className='     flex flex-col py-2'>
//                 <label className=' mb-1 text-complimetary1 font-poppins font-normal text-base leading-6 '>Your password</label>
//                 <input className='border p-2 rounded-xl  border-shad'  type="password" />
//             </div>

//             <button className='border  my-5 w-1/4 rounded-lg bg-complimetary2 py-3 text-primary1 font-[700] text-[18px] leading-[21.6px] font-urbanist  '>Sign In</button>
//             <a  className="  underline absolute text-[16px] leading-[24px] font-poppins font-[400] text-primary1  right-20  hover:underline-offset-4" href="https://tailwindcss.com/docs/border-radius">Forget your password</a>

//             <div className="text-complimetary1 font-normal text-base  font-poppins mt-1 text-center md:text-left">
//       Dont have an account? <a className=" text-primary underline hover:underline hover:underline-offset-4" href="https://tailwindcss.com/docs/border-radius">Sign Up</a>
//     </div>
//     </div>
//         </form>
//     </div>
// </div>

//   )
// }

// export default Login
