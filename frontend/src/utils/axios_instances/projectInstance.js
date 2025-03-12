import axios from 'axios';

const projectInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/projects',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000
})

export default projectInstance;