import httpClient from "../utils/request";
import config from '../config/config';


export class ServiceCrewService {

    static getAllServiceCrew() {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.get('catalogs/REALIVATE').then((response) => {
                resolve(response)
            }).catch((err) => {
                console.log(err.message)
                reject(err)
            })
        })
    }

    static createServiceCrew(object) {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.post('catalogs', object ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }

    static updateServiceCrew(object){
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.post('catalogs', object ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }

    static getServiceCrew(id){
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.get('catalogs/' + id).then((response) => {
                resolve(response)
            }).catch((err) => {
                console.log(err.message)
                reject(err)
            })
        })
    }
}

export default ServiceCrewService

