import axios from 'axios'

const API_KEY = process.env.API_KEY
const axiosConfig = {
    baseURL: 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes',
    headers: {
        'Authorization': API_KEY
    }
}
const axiosInstance = axios.create(axiosConfig);

export const getLenders = (configObj) => {
    let config = {
        method: 'get',
        data: configObj
    }

    return axiosInstance.request(config)
}

export const getRates = (requestId) => {
    let config = {
        method: 'post',
        data: {
            requestId
        }
    }

    return axiosInstance.request(config)
}

