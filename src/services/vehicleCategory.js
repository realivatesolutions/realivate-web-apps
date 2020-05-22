import httpClient from "../utils/request";

export class VehicleCategoryService {

    static getAllVehicleCategory() {
        return new Promise((resolve, reject) => {
            let httpClientObj = httpClient.getInstance();
            // httpClientObj.get('/category').then((response) => {
            //     resolve(response)
            // }).catch((err) => {
            //     reject(err)
            // })

            //TODO: WILL REMOVE THIS ONCE INTEGRATED WITH API
            let response = {}
            response.data = [
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
            resolve(response)
        })
    }
}

export default VehicleCategoryService

