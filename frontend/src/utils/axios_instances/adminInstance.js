import axios from 'axios';

const adminInstance = axios.create({
    baseURL: 'http://localhost:3000/api/admin',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000
})

export default adminInstance;