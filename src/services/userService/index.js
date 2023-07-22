import axios from "axios";

export const handleLogin = (username, password) => {
    return axios.post('/api/login', { username, password })
}