import httpClient from "../utils/request";
import config from '../config/config';

export class VehicleCategoryService {

    static getAllVehicleCategory() {
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

    static createVehicle(object) {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.post('catalogs', object ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }

    static updateVehicle(object){
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.post('catalogs', object ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }


    static getVehicle(id){
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

export default VehicleCategoryService

