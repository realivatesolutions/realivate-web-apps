import httpClient from "../utils/request";
import config from '../config/config';
import DataBuilder from './dataBuilder';



export class ProductDataService {

    static getAllProductsByClient(clientId) {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.get('catalogs/'+ config.clientRealm+'/categoryType/'+config.clientsPath).then((response) => {
                resolve(response)
            }).catch((err) => {
                console.log(err.message)
                reject(err)
            })
        })
    }

    static createProduct(object) {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.realivateOpsBaseUrl);
            let data = DataBuilder.buildCreateData(object);
            httpClientObj.post('catalogs', data ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }

    static updateProduct(object){
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            let data = DataBuilder.buildCreateData(object);
            httpClientObj.post('catalogs', object ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }


    static getProduct(id){
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

export default ProductDataService

