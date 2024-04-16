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
import LandingPage from "./Screen/LandingPage";


export const routes = [
    // {
    //     path: "/",
    //     element: <HomeScreen />,
    // },
    {
        path: "/",
        element: <LandingPage />,
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
    },
    {
        path: "/movie/:id",
        element: <SingleMovie />,
    },
    {
        path: "/watch/:id",
        element: <WatchPage />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/verifytoken",
        element: <EnterToken />,
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
    },
    {
        path: "/password",
        element: <Password />,
    },
    {
        path: "/favorites",
        element: <FavoriteMovies />,
    },
    {
        path: "/movieslist",
        element: <MovieList />,
    },
    {
        path: "/addmovie",
        element: <AddMovie />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/categories",
        element: <Categories />,
    },
    {
        path: "/users",
        element: <Users />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
    
];
