import httpClient from "../utils/request";
import config from '../config/config';
import DataBuilder from './dataBuilder';



export class ProductDataService {

    static getAllProductsByClient(clientName) {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.productsBaseUrl);
            httpClientObj.get('products/'+ config.clientRealm+'/clientName/'+clientName).then((response) => {
                resolve(response)
            }).catch((err) => {
                console.log(err.message)
                reject(err)
            })
        })
    }

    static createProduct(object) {
        console.log('CREATING PRODUCT SERVICE')
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.productsBaseUrl);
            let data = DataBuilder.buildCreateProductData(object);
            
            httpClientObj.post('products', data ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }

    static updateProduct(object){
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.productsBaseUrl);
            let data = DataBuilder.buildCreateProductData(object);
            httpClientObj.post('products', object ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }


    static getProduct(id){
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance(config.productsBaseUrl);
            httpClientObj.get('products/' + config.clientRealm +"/"+id).then((response) => {
                resolve(response)
            }).catch((err) => {
                console.log(err.message)
                reject(err)
            })
        })
    }
}

export default ProductDataService

