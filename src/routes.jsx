import { ReactElement } from "react";
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


export const routes = [
    {
        path: "/",
        element: <HomeScreen />,
    },
    {
        path: "/about-us",
        element: <AboutUs />,
    },
    {
        path: "/contact-us",
        element: <ContactUs />,
    },
    {
        path: "/movies",
        element: <MoviesPage />,
        roles: ['user']
    },
    {
        path: "/movie/:id",
        element: <SingleMovie />,
        roles: ['user']
    },
    {
        path: "/watch/:id",
        element: <WatchPage />,
        roles: ['user']
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/verifytoken",
        element: <EnterToken />,
        roles: ['user']
    },
    {
        path: "/forgotpassword",
        element: <ForgotPassword />,
    },
    {
        path: "/resetpassword",
        element: <ResetPassword />,
    },
    {
        path: "/profile",
        element: <Profile />,
        roles: ['user']
    },
    {
        path: "/password",
        element: <Password />,
        roles: ['user']
    },
    {
        path: "/favorites",
        element: <FavoriteMovies />,
        roles: ['user']
    },
    {
        path: "/movieslist",
        element: <MovieList />,
        roles: ['admin', "content-creator"]
    },
    {
        path: "/addmovie",
        element: <AddMovie />,
        roles: ['content-creator']
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        roles: ['admin']
    },
    {
        path: "/categories",
        element: <Categories />,
        roles: ['admin', "content-creator"]
    },
    {
        path: "/users",
        element: <Users />,
        roles: ['admin']
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
