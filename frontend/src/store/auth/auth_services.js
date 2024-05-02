import { INDIFLIX_SERVICE } from "../../api";

const login = async (payload) => {
    return await INDIFLIX_SERVICE.post("/users/login", payload);
};

const registration = async (payload) => {
    return await INDIFLIX_SERVICE.post("/users/register", payload);
};

const updateProfile = async (payload) => {
    return await INDIFLIX_SERVICE.put("/users/profile", payload, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
};

const payment = async (payload) => {
    return await INDIFLIX_SERVICE.post("/users/payment", payload);
};

export const AuthServices = {
    login,
    registration,
    updateProfile,
    payment
}
