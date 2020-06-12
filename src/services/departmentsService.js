import httpClient from "../utils/request";
import config from '../config/config';
import categoryTypes from '../config/categoryTypes';
import DataBuilder from './dataBuilder';

export class DepartmentsService {

    static getAllDepartmentsCategory() {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.get('catalogs/' + config.clientRealm + '/categoryType/' +categoryTypes.departments).then((response) => {
                resolve(response)
            }).catch((err) => {
                console.log(err.message)
                reject(err)
            })
        })
    }

   
    static createDepartment(object) {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            let data = DataBuilder.buildCategoryData(object);
            httpClientObj.post('catalogs', data ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }

    static updateDepartment(object){
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            let data = DataBuilder.buildUpdateCategoryData(object);
            httpClientObj.post('catalogs', data ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }


    static getDepartment(id){
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.get('catalogs/' + config.clientRealm +"/"+id).then((response) => {
                resolve(response)
            }).catch((err) => {
                console.log(err.message)
                reject(err)
            })
        })
    }
}

export default DepartmentsService

