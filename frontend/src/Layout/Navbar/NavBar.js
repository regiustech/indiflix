import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { CgUser, CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import logo from "../../assets/logo2.png";
import Popover from '@mui/material/Popover';
import { useDispatch, useSelector } from 'react-redux';
import AlertDialog from "../../Components/Dialogs/AlertDialog";
import { loginAuth } from "../../store/auth/auth_reducers";


function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [alertModal, setAlertModal] = useState(null);
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  const { userDetail } = useSelector(store => store.Auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserLogoClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleClose();
    setAlertModal({
      title: "Logout",
      message: "Do you really want to logout?"
    });
  }

  const handleProfileClick = () => {
    navigate("/profile");
  }

  const handleLogout = () => {
    dispatch(loginAuth({}));
    navigate("/login");
  }

  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-6 lg:grid gap-10 grid-cols-7 justify-between items-center">
          {/* Logo */}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-full h-12
                 object-contain"
              />
            </Link>
          </div>
          {/* Search Form */}
          <div className="col-span-3">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-subMain w-12 flex-colo h-12 rounded text-white"
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search Movie Name from here"
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          {/* Menus */}
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/movies" className={Hover}>
              Movies
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              Contact Us
            </NavLink>
            {Object.keys(userDetail).length ? <NavLink className={Hover} onClick={handleUserLogoClick}>
              <CgUser className="w-8 h-8" />
            </NavLink> : <NavLink to="/login" className={Hover}>
              Login
            </NavLink>}
            <NavLink to="/favorite" className={`${Hover} relative`}>
              <FaHeart className="w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                3
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          horizontal: 'right'
        }}
      >
        <div className="px-5 py-2">
          <div className="flex justify-center">
            {userDetail.image ? <img
              className="w-8 h-8 rounded-full"
              src={userDetail.image}
              alt="" /> :
              <span>Logo</span>
            }
          </div>
          <div className="flex justify-center mt-2">
            <small className="text-slate-500">{userDetail.email}</small>
          </div>
          <div className="flex flex-col justify-start mt-3 gap-2">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleProfileClick}>
              <CgProfile />
              <span>Profile</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoutClick}>
              <MdOutlineLogout />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </Popover>
      {alertModal && <AlertDialog {...alertModal} handleClose={() => setAlertModal(null)} handleOk={handleLogout} />}
    </>
  );
}

export default NavBar;
