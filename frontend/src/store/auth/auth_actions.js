import { AuthServices } from "../auth/auth_services";
import { toast } from "react-toastify";
import { loginAuth } from "./auth_reducers";

const login = (payload) => async (dispatch) => {
    try {
        const res = await AuthServices.login(payload);
        const data = res.data;
        toast.success("Successfully logged in");
        return { success: true, data };
    }
    catch (error) {
        toast.error(error?.response?.data?.error || "Server error");
        return { success: false };
    }
};
const registration = (payload) => async (dispatch) => {
    try {
        const res = await AuthServices.registration(payload);
        const data = res.data;
        toast.success("Successfully registered");
        return { success: true };
    }
    catch (error) {
        toast.error(error?.response?.data?.error || "Server error");
        return { success: false };
    }
};

const updateProfile = (payload) => async (dispatch) => {
    try {
        const res = await AuthServices.updateProfile(payload);
        const data = res.data;
        toast.success(data.message);
        dispatch(loginAuth(data.detail));
        return { success: true };
    }
    catch (error) {
        toast.error(error?.response?.data?.error || "Server error");
        return { success: false };
    }
};




export const AuthActions = {
    login,
    registration,
    updateProfile
};
