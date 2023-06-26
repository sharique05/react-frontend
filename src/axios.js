import axios from 'axios'
axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/`;
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`


const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)

export default axiosInstance
