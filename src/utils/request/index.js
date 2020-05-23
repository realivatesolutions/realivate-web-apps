import axios from 'axios'

const getInstance = (baseUrl) => {
    let instance = axios.create({
        baseURL: baseUrl,
        timeout: 100000,
        xsrfHeaderName: 'x-csrf-token'
    })

    instance.interceptors.request.use((config) => {
        config.headers.post['Content-Type'] = 'application/json';
        config.headers.put['Content-Type'] = 'application/json';
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