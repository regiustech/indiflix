import axios from 'axios';

export const INDIFLIX_SERVICE = axios.create({
    baseURL: "http://localhost:5000/api/",
});

INDIFLIX_SERVICE.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            'authorization': localStorage.getItem("access-token") ? `Bearer ${localStorage.getItem("access-token")}` : ""
        }
    }
});
