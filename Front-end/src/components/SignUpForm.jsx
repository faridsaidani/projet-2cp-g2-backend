import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TextField from './TextField'; 

const generateOptions = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

const isFormFilled = (values) => {
  return Object.values(values).every(value => value !== '');
};

const SignUpForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('family_name', values.familyName);
    formData.append('username', values.profileName);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('gender', values.gender);
    formData.append('birthday', `${values.dobYear}-${values.dobMonth}-${values.dobDate}`);
    formData.append('consent', 'true'); // Add consent value
    // Append other form fields as needed
  
    try {
      const response = await axios.post('http://localhost/patient/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
        }
      });
      console.log(response.data); // Handle success response
      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error('Registration failed:', error); // Handle error response
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <h1 className='flex justify-center text-xl text-primary1 p-8'>Sign up with your email address</h1>
      <Formik
        initialValues={{
          name: "",
          familyName: "",
          profileName: "",
          email: "",
          password: "",
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
          email: Yup.string().email("Invalid email address").required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            // .matches(
            //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            //   "Password must contain at least 8 characters, one letter, one number and one special character"
            // )
            ,
          therapistOrPatient: Yup.string().required("Please select therapist or patient"),
          gender: Yup.string().required("Please select your gender"),
          dobMonth: Yup.string().required("Month is required"),
          dobDate: Yup.string().required("Date is required"),
          dobYear: Yup.string().required("Year is required"),
        })}
        onSubmit={handleSubmit}

      
      >
        {({ isValid, dirty, isSubmitting, values }) => (
          <Form >
            <TextField  label="Name" name="name" type="text" placeholder="Enter your name" />
            <TextField  label="Family Name" name="familyName" type="text" placeholder="Enter your family name" />
            <TextField  label="Profile Name" name="profileName" type="text" placeholder="Enter your profile name" />
            <TextField label="Email" name="email" type="email" placeholder="Enter your email address" />
            <TextField  label="Password" name="password" type="password" placeholder="Enter your password" />
            {/* Add other form fields */}
            <div>
              <label className='mb-4'>Are you a therapist or a patient?</label>
              <div className='flex space-x-16 mb-4 ml-20'>
                <label>
                  <Field type="radio" name="therapistOrPatient" value="therapist" />
                  Therapist
                </label>
                <label>
                  <Field type="radio" name="therapistOrPatient" value="patient" />
                  Patient
                </label>
              </div>
              <ErrorMessage name="therapistOrPatient" component="div" className="error" />
            </div>
            <div>
                <label className='mb-4'>What is your gender?</label>
                <div className='flex space-x-16 mb-4 ml-20'>
                    <label>
                        <Field  type="radio" name="gender" value="Male" />
                        Male
                    </label>
                    <label>
                        <Field type="radio" name="gender" value="Female" />
                        Female
                    </label>
              </div>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>
            <div>
                <label className=''>What is your date of birth?</label>
                <div className="flex space-x-4">
                    <div className='flex flex-col'>  
                      <label>Month</label>
                      <Field as="select" name="dobMonth" className="border rounded-lg px-2 py-1">
                        <option value=""></option>
                        {generateOptions(1, 12).map((month) => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </Field>
                    </div>
                    <div className='flex flex-col'>
                        <label>Date</label>
                        <Field as="select" name="dobDate" className="border rounded-lg px-2 py-1">
                          <option value=""></option>
                          {generateOptions(1, 31).map((date) => (
                            <option key={date} value={date}>{date}</option>
                          ))}
                        </Field>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label>Year</label>
                        <Field as="select" name="dobYear" className="border rounded-lg px-2 py-1">
                          <option value=""></option>
                          {generateOptions(1960, new Date().getFullYear()).map((year) => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </Field>
                    </div>
                </div>
                <div className="flex space-x-4">
                  <ErrorMessage  name="dobMonth" component="div" className="error " />
                  <ErrorMessage  name="dobDate" component="div" className="error " />
                  <ErrorMessage  name="dobYear" component="div" className="error " />
                </div>
            </div>
            <div className="flex justify-center mb-4 rounded-lg  ">
              <button
                className={`block w-full px-4 py-2 text-white rounded-md focus:outline-none ${(isValid && dirty && isFormFilled(values)) ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
                type="submit"
                onClick={handleSubmit()}
                disabled={!isValid || !dirty || !isFormFilled(values) || isSubmitting}
              >
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className='flex justify-center items-center'>
            <p className='px-2'>By creating an account you agree to the  </p>
              <a href="/" className="underline text-black hover:text-blue-500 hover:underline">
                Terms of Use
              </a>
              <p className='px-2'> and </p>
              <a href="/" className="underline text-black hover:text-blue-500 hover:underline">
                Privacy Policy
              </a>
      </div>
      <div className='flex justify-center items-center'>
            <p className='px-2'>Already have an account?</p> 
            <a href="/" className="underline text-black hover:text-blue-500 hover:underline">
              Log In
            </a>
      </div>


    </div>
  );
}

export default SignUpForm;
