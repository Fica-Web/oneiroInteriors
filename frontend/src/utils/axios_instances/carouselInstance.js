import axios from "axios";

const carouselInstance = axios.create({
    baseURL: 'http://localhost:3000/api/carousel',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default carouselInstance;