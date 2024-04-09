// import React from "react";
// import Layout from "../Layout/Layout";
// import logo from "../assets/logo2.png";
// import { Input } from "../Components/UsedInputs";
// import { Link } from "react-router-dom";
// import { FiLogIn } from "react-icons/fi";
// function Register() {
//   return (
//     <Layout>
//       <div className="container mx-auto px-2 my-24 flex-colo">
//         <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
//           <img src={logo} alt="logo" className="w-full h-12 object-contain" />
//           <Input
//             label="Full Name"
//             placeholder="your name"
//             type="text"
//             bg={true}
//           />
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
//             Sign Up
//           </Link>
//           <p className="text-center text-border">
//             Already have an account?
//             <Link to="/login" className="text-dryGray font-semibold ml-2">
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Register;

import React from "react";
import Layout from "../Layout/Layout";
import logo from "../assets/logo2.png";
import { Input } from "../Components/UsedInputs";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
function Register() {
  const [newDetails, setNewDetails] = useState({
    FullName: "",
    Email: "",
    Password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDetails({
      ...newDetails,
      [name]: value,
    });
  };
  const handleClick = async () => {
    const body = {
      fullName: newDetails.FullName,
      email: newDetails.Email,
      password: newDetails.Password,
    };

    const response = await axios.post(
      "http://localhost:5000/api/users/register",
      body
    );
    console.log(response);
  };
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src={logo} alt="logo" className="w-full h-12 object-contain" />
          <input
            className={`w-full text-sm mt-2 p-5 border border-border rounded text-black `}
            label="Full Name"
            placeholder="your name"
            name="FirstName"
            value={newDetails.fullName}
            onChange={handleInputChange}
            type="text"
          />
          <input
            className={`w-full text-sm mt-2 p-5 border border-border rounded text-black `}
            label="Email"
            placeholder="netflix@gmail.com"
            type="email"
            value={newDetails.email}
            onChange={handleInputChange}
            name="Email"
          />
          <input
            className={`w-full text-sm mt-2 p-5 border border-border rounded text-black `}
            label="Password"
            placeholder="*"
            type="password"
            value={newDetails.password}
            onChange={handleInputChange}
            name="Password"
          />
          <Link
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
            onClick={handleClick}
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
      </div>
    </Layout>
  );
}

export default Register;
