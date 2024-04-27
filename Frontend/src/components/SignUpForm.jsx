import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const generateOptions = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

const isFormFilled = (values) => {
  // Check all form fields (including therapistOrPatient, gender, etc.)
  const requiredFields = [
    "name",
    "familyName",
    "profileName",
    "email",
    "password",
    "confirmPassword",
    "therapistOrPatient",
    "gender",
    "dobMonth",
    "dobDate",
    "dobYear",
  ];

  // Check if any required field is empty or null
  for (const field of requiredFields) {
    if (!values[field] || values[field] === "") {
      return false;
    }
  }

  return true;
};

const   SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center text-xl text-primdark p-8 font-urbanist text-sx font-base leading-5 text-left  placeholder-urbanist">
        Sign up with your email address
      </h1>
      <Formik
        initialValues={{
          name: "",
          familyName: "",
          profileName: "",
          email: "",
          password: "",
          confirmPassword: "",
          therapistOrPatient: "",
          gender: "",
          dobMonth: "",
          dobDate: "",
          dobYear: "",
          file: null,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          familyName: Yup.string().required("Family name is required"),
          profileName: Yup.string().required("Profile name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Password must contain at least 8 characters, one letter, one number and one special character"
            ),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
          therapistOrPatient: Yup.string().required(
            "Please select therapist or patient"
          ),
          gender: Yup.string().required("Please select your gender"),
          dobMonth: Yup.string().required("Month is required"),
          dobDate: Yup.string().required("Date is required"),
          dobYear: Yup.string().required("Year is required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isValid, dirty, isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
              <TextField
                class="mt-2 border rounded-[12px] pl-6 py-4"
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
              <TextField
                class="mt-2 border rounded-[12px] pl-6 py-4"
                label="Family Name"
                name="familyName"
                type="text"
                placeholder="Enter your family name"
              />
            </div>
            <div className="font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
              <TextField
                class="mt-2 border rounded-[12px] pl-6 py-4"
                label="Profile Name"
                name="profileName"
                type="text"
                placeholder="Enter your profile name"
              />
            </div>
            <div className="font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
              <TextField
                class="mt-2 border rounded-[12px] pl-6 py-4"
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            {/* Password */}
            <div className="font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
              <label htmlFor="password" className="mr-2">
                Password
              </label>
              <div className="relative">
                <TextField
                  class="mt-2 border rounded-[12px] pl-6 py-4"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
                  onClick={() => togglePasswordVisibility("password")}
                >
                  {showPassword ? <VscEye /> : <VscEyeClosed />}
                </button>
              </div>
            </div>

            {/*Comfirm password*/}
            <div className="font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
              <label htmlFor="comfirm password" className="mr-2">
                {" "}
                Comfirm Password
              </label>
              <div className=" relative">
                <TextField
                  class="mt-2 border rounded-[12px] pl-6 py-4"
                  id="comfirm password"
                  name="comfirm password"
                  type={showPassword ? "text" : "comfirm password"}
                  placeholder="Comfirm your password"
                />
                <button
                  type="button"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
                  onClick={() => togglePasswordVisibility("password")}
                >
                  {showPassword ? <VscEye /> : <VscEyeClosed />}
                </button>
              </div>
            </div>

            {/*Position and Gender*/}
            <div className="font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist my-6">
              <label className="">Are you a ?</label>
              <div className="flex ml-10 space-x-10">
                <label>
                  <Field
                    type="radio"
                    name="therapistOrPatient"
                    value="therapist"
                  />
                  Therapist
                </label>
                <label>
                  <Field
                    type="radio"
                    name="therapistOrPatient"
                    value="patient"
                  />
                  Patient
                </label>
              </div>
              <ErrorMessage
                name="therapistOrPatient"
                component="div"
                className="error"
              />
            </div>

            <div className="font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist mb-6">
              <label className="">What is your gender?</label>
              <div className="flex ml-10 space-x-10">
                <label>
                  <Field type="radio" name="gender" value="Male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="Female" />
                  Female
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>
            <div className="flex flex-col items-start my-6">
              <label className="mb-2 font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
                What is your date of birth?
              </label>
              <div className=" grid grid-cols-3  gap-10 justify-between w-[100%]">
                <div className="flex flex-col">
                  <label className=" font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
                    Month
                  </label>
                  <Field
                    as="select"
                    name="dobMonth"
                    className="border rounded-lg px-2 py-1"
                  >
                    <option value=""></option>
                    {generateOptions(1, 12).map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="flex flex-col">
                  <label className=" font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
                    Date
                  </label>
                  <Field
                    as="select"
                    name="dobDate"
                    className="border rounded-lg px-2 py-1"
                  >
                    <option value=""></option>
                    {generateOptions(1, 31).map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="flex flex-col">
                  <label className=" font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
                    Year
                  </label>
                  <Field
                    as="select"
                    name="dobYear"
                    className="border rounded-lg px-2 py-1"
                  >
                    <option value=""></option>
                    {generateOptions(1960, new Date().getFullYear()).map(
                      (year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    )}
                  </Field>
                </div>
              </div>
              <div className="flex space-x-4">
                <ErrorMessage
                  name="dobMonth"
                  component="div"
                  className="error "
                />
                <ErrorMessage
                  name="dobDate"
                  component="div"
                  className="error "
                />
                <ErrorMessage
                  name="dobYear"
                  component="div"
                  className="error "
                />
              </div>
            </div>

            {/* Upload File */}
            <div className="flex flex-col items-start mt-6 mb-10 font-urbanist text-sx font-light leading-5 text-left text-primdark placeholder-urbanist">
              <label className=" my-4">
                Here you upload your medical file or CV and certificates{" "}
              </label>
              <div className="flex">
                <input
                  className=""
                  type="file"
                  id="file"
                  name="file"
                  onChange={(event) =>
                    setFieldValue("file", event.currentTarget.files[0])
                  }
                />

                {values.file && (
                  <div className="text-sechover">File uploaded</div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mb-6 rounded-lg font-urbanist text-sx font-light leading-5 text-left text-secdark ">
              <button
                className={`block w-full px-4 py-2 text-white rounded-md focus:outline-none ${
                  isValid && dirty && isFormFilled(values)
                    ? "bg-gray-300"
                    : "bg-sechover hover:bg-blue-600"
                }`}
                type="submit"
                
              >
                {console.log(
                  "valid" +
                    !isValid +
                    " dirty" +
                    !dirty +
                    " forlfilled" +
                    !isFormFilled(values) +
                    " submitting" +
                    isSubmitting
                )}
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Additional content */}
      <div className="flex justify-center items-center font-urbanist text-sx text-secdark font-light leading-5 text-left ">
        <p className="px-2">By creating an account you agree to the </p>
        <a
          href="/"
          className="underline text-black hover:text-blue-500 hover:underline"
        >
          Terms of Use
        </a>
        <p className="px-2"> and </p>
        <a
          href="/"
          className="underline text-black hover:text-blue-500 hover:underline"
        >
          Privacy Policy
        </a>
      </div>
      <div className="flex justify-center items-center font-urbanist text-sx font-light leading-5 text-left text-secdark">
        <p className="px-2">Already have an account?</p>
        <a
          href="/"
          className="underline text-black hover:text-blue-500 hover:underline"
        >
          Log In
        </a>
      </div>
    </div>
  );
};

export default SignUpForm;
