import axios from "axios";

const messageInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/messages',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default messageInstance;