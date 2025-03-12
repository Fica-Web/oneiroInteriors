import axios from 'axios';

const adminInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/admin',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000
})

export default adminInstance;