import httpClient from "../utils/request";
import config from '../config/config';
const data = [
    {
        categoryType: 'Truck',
        name: 'ABC',
        description: 'Truck'
    },
    {
        categoryType: 'Container',
        name: 'EFG',
        description: 'Container Van'
    }
]

export class VehicleCategoryService {

    static getAllVehicleCategory() {
        return new Promise((resolve, reject) => {
            console.log('config.catalogBaseUrl', config.catalogBaseUrl)
            let httpClientObj = httpClient.getInstance(config.catalogBaseUrl);
            httpClientObj.get('catalogs').then((response) => {
                console.log('response', response)
                resolve(response)
            }).catch((err) => {
                console.log(err.message)
                reject(err)
            })
        })
    }

    static createVehicle(object) {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance();
            httpClientObj.post('/category', object ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }

    static getVehicle(id){
        console.log('id', id)
        return new Promise((resolve, reject) => {
            // httpClientObj.get('/category/' + id).then((response) => {
            //     resolve(response)
            // }).catch((err) => {
            //     reject(err)
            // })

            const category = data.find(d => {
                return d.categoryType === id
            })
            let response = {}
            response.data = category;
            resolve(response)
        })
    }
}

export default VehicleCategoryService

