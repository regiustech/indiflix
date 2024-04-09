// import React from "react";
// import Layout from "../Layout/Layout";
// import logo from "../assets/logo2.png";
// import { Input } from "../Components/UsedInputs";
// import { Link } from "react-router-dom";
// import { FiLogIn } from "react-icons/fi";
// function Login() {
//   return (
//     <Layout>
//       <div className="container mx-auto px-2 my-24 flex-colo">
//         <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
//           <img src={logo} alt="logo" className="w-full h-12 object-contain" />
//           <Input
//             label="Email"
//             placeholder="netflix@gmail.com"
//             type="email"
//             bg={true}
//           />
//           <Input
//             label="Password"
//             placeholder="***********"
//             type="password"
//             bg={true}
//           />
//           <Link
//             to="/dashboard"
//             className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
//           >
//             <FiLogIn />
//             Sign In
//           </Link>
//           <p className="text-center text-border">
//             Don't have an account?
//             <Link to="/register" className="text-dryGray font-semibold ml-2">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Login;

import React, { useState } from "react";
import Layout from "../Layout/Layout";
import logo from "../assets/logo2.png";
import { Input } from "../Components/UsedInputs";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const notify = () => toast("Login successfull!");
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
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
      password: userDetails.password,
    };
    console.log(body, "body");
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      body
    );
    console.log(Login);
    console.log(response);
    toast.success("Login successful!");
    setTimeout(navigate("/"), 3000);
    // navigate("/");
  };

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src={logo} alt="logo" className="w-full h-12 object-contain" />
          <input
            label="Email"
            placeholder="netflix@gmail.com"
            type="email"
            bg={true}
            value={userDetails.email}
            name="email"
            onChange={handleInputChange}
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
          />
          <input
            label="Password"
            placeholder="***********"
            type="password"
            bg={true}
            value={userDetails.password}
            name="password"
            onChange={handleInputChange}
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
          />
          <Link
            onClick={handleClick}
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn />
            Sign In
          </Link>
          <Link
            to="/forgotpassword"
            className="text-dryGray font-semibold ml-2"
          >
            Forgot Password ?
          </Link>
          <p className="text-center text-border">
            Don't have an account?
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </Layout>
  );
}

export default Login;
