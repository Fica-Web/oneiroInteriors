import axios from 'axios';

const projectInstance = axios.create({
    baseURL: 'http://localhost:3000/api/projects',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000
})

export default projectInstance;