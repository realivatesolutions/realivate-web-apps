import httpClient from "../utils/request";
import config from '../config/config';
import DataBuilder from './dataBuilder';



export class ClientDataService {

    static getAllClients() {
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

    static createClient(object) {
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

    static updateClient(object){
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


    static getClient(id){
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

export default ClientDataService

