import axios from 'axios';
import type { loginAPIInterface, registerAPIInterface } from '../model/userModel';

const base_url = import.meta.env.VITE_API_URL;

const registerUser = async (user: registerAPIInterface) => {
    return axios.post(`${base_url}register`, user)
        .then(res => res.data)
        .catch(error=>{throw error})
}

const loginUser = async (login: loginAPIInterface) => {
    return axios.post(`${base_url}login`, login)
        .then(res => res.data)
        .catch(error=>{throw error})
}

export { registerUser, loginUser };