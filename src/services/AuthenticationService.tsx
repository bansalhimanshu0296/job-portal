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

const sendOtp = async (emailId: string) => {
    return axios.post(`${base_url}sendOtp/${emailId}`)
        .then(res => res.data)
        .catch(error => {throw error})
}

const verifyOtp = async (emailId: string, otp: string) => {
    return axios.get(`${base_url}verifyOtp/${emailId}/${otp}`)
        .then(res => res.data)
        .catch(error => {throw error})
}

const changePassword = async (emailId: string, password: string) => {
    return axios.post(`${base_url}changePassword`, {emailId, password})
        .then(res => res.data)
        .catch(error => {throw error})
}

export { registerUser, loginUser, sendOtp, verifyOtp, changePassword };