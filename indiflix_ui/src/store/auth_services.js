import { INDIFLIX_SERVICE } from '../api';

const login = async (payload) => {
    return await INDIFLIX_SERVICE.post("/users/login", payload);
};

const registration = async (payload) => {
    return await INDIFLIX_SERVICE.post("/users/register", payload);
};

export const AuthServices = {
    login,
    registration
}
