import { PaymentServices } from "../payment/payment_service";
import { toast } from "react-toastify";

const payment = (payload) => async (dispatch) => {
    try {
        const res = await PaymentServices.payment(payload);
        const data = res.data;
        toast.success("Payment Sucessfull");
        return { success: true };
    }
    catch (error) {
        toast.error(error?.response?.data?.error || "Server error");
        return { success: false };
    }
};
export const PaymentActions = {
    payment
};