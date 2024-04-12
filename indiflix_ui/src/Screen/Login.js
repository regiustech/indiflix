import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { FiLogIn } from "react-icons/fi";
import React, { useState } from "react";
import { AuthActions } from "../store/auth_actions";
import logo from "../assets/logo2.png";
import Layout from "../Layout/Layout";
import { loginAuth } from "../store/auth_reducers";

function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleSignIn = async () => {
    const errors = {};
    if (!formValues.email) {
      errors.email = "Please enter email"
    }
    if (!formValues.password) {
      errors.password = "Please enter password"
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
    }
    else {
      const payload = { ...formValues };
      dispatch(AuthActions.login(payload)).then(res => {
        if (res.success) {
          toast(res.message);
          localStorage.setItem("access-token", res.data.token);
          localStorage.setItem("user-detail", JSON.stringify(res.data.detail));
          dispatch(loginAuth(res.data.detail));
          navigate("/");
        }
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img src={logo} alt="logo" className="w-full h-12 object-contain" />
          <div className="w-full">
            <input
              label="Email"
              placeholder="netflix@gmail.com"
              type="email"
              bg={true}
              value={formValues.email}
              name="email"
              onChange={handleInputChange}
              className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            />
            <small className="text-textError">{formErrors.email}</small>
          </div>
          <div className="w-full">
            <input
              label="Password"
              placeholder="***********"
              type="password"
              bg={true}
              value={formValues.password}
              name="password"
              onChange={handleInputChange}
              className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            />
            <small className="text-textError">{formErrors.password}</small>
          </div>
          <Link
            onClick={handleSignIn}
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
      </div>
    </Layout>
  );
}

export default Login;

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
