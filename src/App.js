import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Screen/AboutUs";
import HomeScreen from "./Screen/HomeScreen";
import NotFound from "./Screen/NotFound";
import ContactUs from "./Screen/ContactUs";
import MoviesPage from "./Screen/Movies";
import SingleMovie from "./Screen/SingleMovie";
import WatchPage from "./Screen/WatchPage";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import Profile from "./Screen/Dashboard/Profile";
import Aos from "aos";
import Password from "./Screen/Dashboard/Password";
import FavoriteMovies from "./Screen/Dashboard/FavoritesMovies";
import MovieList from "./Screen/Dashboard/Admin/MoviesList";
import Dashboard from "./Screen/Dashboard/Admin/Dashboard";
import Categories from "./Screen/Dashboard/Admin/Categories";
import Users from "./Screen/Dashboard/Admin/Users";
import EnterToken from "./Screen/EnterToken";
import ForgotPassword from "./Screen/ForgotPassword";
import ResetPassword from "./Screen/ResetPassword";
import AddMovie from "./Screen/Movies/AddMovie";

function App() {
  Aos.init();
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verifytoken" element={<EnterToken />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/password" element={<Password />} />
      <Route path="/favorites" element={<FavoriteMovies />} />
      <Route path="/movieslist" element={<MovieList />} />\
      <Route path="/addmovie" element={<AddMovie />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
