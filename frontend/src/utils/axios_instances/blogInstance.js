import axios from "axios";

const blogInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/blogs',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default blogInstance;