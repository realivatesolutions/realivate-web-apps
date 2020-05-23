import axios from 'axios'

const getInstance = (baseUrl) => {
    let instance = axios.create({
        baseURL: baseUrl,
        timeout: 100000,
  
    })

    instance.interceptors.request.use((config) => {
        config.headers.post['Access-Control-Allow-Origin'] = '*'
        config.headers.post['Access-Control-Allow-Credentials'] =  true;
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