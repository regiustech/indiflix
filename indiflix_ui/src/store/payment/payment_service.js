import { INDIFLIX_SERVICE } from '../../api';

const payment = async (payload) => {
    return await INDIFLIX_SERVICE.post("/users/payment", payload);
};


export const PaymentServices = {
    payment
}
