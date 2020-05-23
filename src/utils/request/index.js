import axios from 'axios'
import config from '../../config/config';

const BACKEND_URL = config.baseUrl

const getInstance = () => {
    let instance = axios.create({
        baseURL: BACKEND_URL,
        timeout: 100000,
        xsrfHeaderName: 'x-csrf-token'
    })

    instance.interceptors.request.use((config) => {
        config.headers.post['Content-Type'] = 'application/json'
        return config
    }, (error) => {
        return Promise.reject(error)
    })

    instance.interceptors.response.use((response) => {
        return response
    }, function (error) {
        return Promise.reject(error)
    })
    return instance
}

const httpClient = { getInstance }

export default httpClient