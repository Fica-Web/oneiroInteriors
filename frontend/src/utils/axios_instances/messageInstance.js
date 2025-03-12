import axios from "axios";

const messageInstance = axios.create({
    baseURL: 'http://localhost:3000/api/messages',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default messageInstance;