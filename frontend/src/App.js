import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "./routes";
import Aos from "aos";
import Login from "./Screen/Login";
import { useSelector } from 'react-redux';
import { loginAuth } from "./store/auth/auth_reducers";
import { useDispatch } from 'react-redux';
import { PaymentActions } from "./store/payment/payment_actions";

function App() {
  const { userDetail } = useSelector(store => store.Auth);
  const dispatch = useDispatch();

  const paymentHandler = async(event)=>{
    const amount = 500;
    const currency = "INR";
    const receipt = "1234567890"
  
      const payload = { amount: 500, currency: "INR", receipt: "1234567890"};
      dispatch(PaymentActions.payment(payload)).then(res => {
        console.log("my responseeee", res)
      });
    

    // const order = response.json();
    // console.log("My orders", order);
  }
  useEffect(() => {
    if (localStorage.getItem("user-detail")) {
      dispatch(loginAuth(JSON.parse(localStorage.getItem("user-detail"))));
    }
  }, []);

  Aos.init();
  return (
    <>
    {/* <button className="btn btn-primary" onClick={paymentHandler}>Pay Now</button> */}
      <Routes>
        <Route path="/login" element={Object.keys(userDetail).length > 0 ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Routes>
        {routes.map(routeDetail => {
          if ((userDetail.role && routeDetail.roles?.includes(userDetail.role)) || !routeDetail.roles) {
            return <Route path={routeDetail.path} element={routeDetail.element} key={routeDetail.path}/>;
          }
        })}
      </Routes>
    </>
  );
}

export default App;
