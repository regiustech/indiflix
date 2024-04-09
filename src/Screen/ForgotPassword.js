import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { FiLogIn } from "react-icons/fi";
import logo from "../assets/logo2.png";
function ForgotPassword() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const body = {
      email: userDetails.email,
    };
    const response = await axios.post(
      "http://localhost:5000/api/users/forgotpassword",
      body
    );
    console.log(response);
    setTimeout(navigate("/verifytoken"), 3000);
  };
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src={logo} alt="logo" className="w-full h-12 object-contain" />
          <input
            onChange={handleInputChange}
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="text"
            placeholder="Enter your email"
            type="text"
            name="email"
            value={userDetails.email}
          />
          <Link
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
            onClick={handleClick}
          >
            <FiLogIn />
            Submit
          </Link>
        </div>
      </div>
    </Layout>
  );
}
export default ForgotPassword;
