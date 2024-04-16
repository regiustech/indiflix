import { INDIFLIX_SERVICE } from '../../api';

const login = async (payload) => {
    return await INDIFLIX_SERVICE.post("/users/login", payload);
};

const registration = async (payload) => {
    return await INDIFLIX_SERVICE.post("/users/register", payload);
};

const payment = async (payload) => {
    return await INDIFLIX_SERVICE.post("/users/payment", payload);
};
export const AuthServices = {
    login,
    registration,
    payment
}
