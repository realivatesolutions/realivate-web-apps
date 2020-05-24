import ClientDataService from '../services/clientDataService'
import * as types from '../action/actionTypes'


export function loadAllVehicleCategoriesSuccess(data){
    return{
        type: types.LOAD_ALL_VEHICLE_CATEGORY_SUCCESS,
        data: data
    }
}

export function loadVehicleCategoriesFailed(data){
    return{
        type: types.LOAD_ALL_VEHICLE_CATEGORY_FAILED
    }
}


export function loadVehicleCategorySuccess(data){
    return{
        type: types.LOAD_VEHICLE_CATEGORY_SUCCESS,
        data: data
    }
}

function getAllClients(){
    return dispatch => {
        ClientDataService.getAllVehicleCategory().then( response => {
            dispatch(loadAllVehicleCategoriesSuccess(response.data))
        }).catch( error => {
            dispatch(loadVehicleCategoriesFailed(error.message))
        })
    };
}

function createClient(data) {
    return dispatch => {
        ClientDataService.createClient(data).then( response => {

        }).catch( error => {
            dispatch(loadVehicleCategoriesFailed(error.message))
        })
    };
}

function getVehicle(id) {
    return dispatch => {
        ClientDataService.getVehicle(id).then( response => {
            dispatch(loadVehicleCategorySuccess(response.data))
        }).catch( error => {
            dispatch(loadVehicleCategoriesFailed(error.message))
        })
    };
}

export const actions = {
    getAllClients: getAllClients,
    createClient: createClient
}