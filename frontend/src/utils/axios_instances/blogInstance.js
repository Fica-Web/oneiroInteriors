import axios from "axios";

const blogInstance = axios.create({
    baseURL: 'http://localhost:3000/api/blogs',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000
})

export default blogInstance;