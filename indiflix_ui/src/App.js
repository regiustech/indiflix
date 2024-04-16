import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "./routes";
import Aos from "aos";
import Login from "./Screen/Login";
import { useSelector } from 'react-redux';
import { loginAuth } from "./store/auth_reducers";
import { useDispatch } from 'react-redux';

function App() {
  const { userDetail } = useSelector(store => store.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user-detail")) {
      dispatch(loginAuth(JSON.parse(localStorage.getItem("user-detail"))));
    }
  }, []);

  Aos.init();
  return (
    <>
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
