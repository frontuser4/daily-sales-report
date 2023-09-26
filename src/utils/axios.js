import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'http://142.93.208.119:80'
})

export default axiosInstance;