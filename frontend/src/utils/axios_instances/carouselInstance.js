import axios from "axios";

const carouselInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/carousel',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default carouselInstance;