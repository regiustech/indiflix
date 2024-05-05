import React, { useState } from "react";
import Layout from "../Layout/Layout";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function EnterToken() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    otp: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state with the new value for the specific field
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const body = {
      otp: userDetails.otp,
    };
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/verifytoken`,body);
    setTimeout(navigate("/resetpassword"), 3000);
    // navigate("/");
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
            placeholder="Enter the token"
            type="text"
            name="otp"
            value={userDetails.otp}
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
export default EnterToken;
