import React from "react";
import Layout from "../Layout/Layout";
import logo from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AuthActions } from "../store/auth/auth_actions";
import { toast } from "react-toastify";

function Register() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [userType, setUserType] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: ""
    })
  };

  const handleRegistration = async () => {
    const errors = {};
    if (!formValues.fullName) {
      errors.fullName = "Please enter full name"
    }
    if (!formValues.email) {
      errors.email = "Please enter email"
    }
    if (!formValues.password) {
      errors.password = "Please set password"
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
    }
    else {
      const payload = {...formValues, role: userType};
      dispatch(AuthActions.registration(payload)).then(res => {
        if(res.success) {
          navigate("/login");
        }
        toast(res.message);
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        {userType ? <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src={logo} alt="logo" className="w-full h-12 object-contain" />
          <div className="w-full">
            <input
              className={`w-full text-sm mt-2 p-5 border border-border rounded text-black `}
              label="Full Name"
              placeholder="your name"
              name="fullName"
              value={formValues.fullName}
              onChange={handleInputChange}
              type="text"
            />
            <small className="text-textError">{formErrors.fullName}</small>
          </div>
          <div className="w-full">
            <input
              className={`w-full text-sm mt-2 p-5 border border-border rounded text-black `}
              label="Email"
              placeholder="netflix@gmail.com"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              name="email"
            />
            <small className="text-textError">{formErrors.email}</small>
          </div>
          <div className="w-full">
            <input
              className={`w-full text-sm mt-2 p-5 border border-border rounded text-black `}
              label="Password"
              placeholder="*"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
              name="password"
            />
            <small className="text-textError">{formErrors.password}</small>
          </div>
          <Link
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
            onClick={handleRegistration}
          >
            <FiLogIn />
            Sign Up
          </Link>
          <p className="text-center text-border">
            Already have an account?
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </div>
          :
          <div className="flex gap-8 w-1/2">
            <button
              className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
              onClick={() => setUserType("content-creator")}
            >
              Content Creator
            </button>
            <button
              className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
              onClick={() => setUserType("user")}
            >
              Watch Content
            </button>
          </div>}
      </div>
    </Layout>
  );
}

export default Register;
