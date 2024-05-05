import axios from 'axios';
export const INDIFLIX_SERVICE = axios.create({baseURL: `${process.env.REACT_APP_API_URL}/api/`});
INDIFLIX_SERVICE.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            'authorization': localStorage.getItem("access-token") ? `Bearer ${localStorage.getItem("access-token")}` : ""
        }
    }
});
