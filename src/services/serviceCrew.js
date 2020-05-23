import httpClient from "../utils/request";

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

export class ServiceCrewService {

    static getAllServiceCrew() {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance();
            // httpClientObj.get('/category').then((response) => {
            //     resolve(response)
            // }).catch((err) => {
            //     reject(err)
            // })

            //TODO: WILL REMOVE THIS ONCE INTEGRATED WITH API
            let response = {}
            response.data = data;
            resolve(response)
        })
    }

    static createServiceCrew(object) {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance();
            httpClientObj.post('/category', object ).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error.message)
            })
        })
    }

    static getServiceCrew(id){
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

export default ServiceCrewService

