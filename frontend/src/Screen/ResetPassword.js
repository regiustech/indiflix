import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";
import axios from "axios";
import logo from "../assets/logo2.png";
function ResetPassword() {
  const notify = () => toast("Login successfull!");
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state with the new value for the specific field
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleClick = async () => {
    const body = {
      email: userDetails.email,
      newPassword: userDetails.newPassword,
      confirmPassword: userDetails.confirmPassword,
    };
    console.log(body, "body");
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/users/resetpassword`,
      body
    );

    toast.success("Login successful!");
    setTimeout(navigate("/"), 3000);
  };
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src={logo} alt="logo" className="w-full h-12 object-contain" />
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="email"
            placeholder="Enter your email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            type="text"
          />
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="newPassword"
            placeholder="Enter Password"
            type="password"
            value={userDetails.newPassword}
            onChange={handleInputChange}
            name="newPassword"
          />
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={userDetails.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
          />
          <Link
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
            onClick={handleClick}
          >
            <FiLogIn />
            Reset Password
          </Link>
          <p className="text-center text-border">
            Already have an account?
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ResetPassword;
