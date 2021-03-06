import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const axiosConfig = {
    baseURL: 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes',
    headers: {
        'Authorization': API_KEY
    }
}
const axiosInstance = axios.create(axiosConfig);

export const fetchLenders = (configObj) => {
    let config = {
        method: 'post',
        data: configObj
    }

    return axiosInstance.request(config)
}

export const fetchRates = (requestId) => {
    let config = {
        method: 'get',
        params: {requestId}
    }

    return axiosInstance.request(config)
}

