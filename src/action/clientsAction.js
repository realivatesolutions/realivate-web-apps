import ClientDataService from '../services/clientDataService'
import * as types from '../action/actionTypes'


export function loadAllClientsSuccess(data){
    return{
        type: types.LOAD_ALL_CLIENTS_SUCCESS,
        data: data
    }
}

export function loadAllClientsFailed(data){
    return{
        type: types.LOAD_ALL_CLIENTS_FAILED
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
        ClientDataService.getAllClients().then( response => {
            dispatch(loadAllClientsSuccess(response.data))
        }).catch( error => {
            dispatch(loadAllClientsFailed(error.message))
        })
    };
}

function createClient(data) {
    return dispatch => {
        ClientDataService.createClient(data).then( response => {

        }).catch( error => {
            dispatch(loadAllClientsFailed(error.message))
        })
    };
}

function getVehicle(id) {
    return dispatch => {
        ClientDataService.getVehicle(id).then( response => {
            dispatch(loadVehicleCategorySuccess(response.data))
        }).catch( error => {
            dispatch(loadAllClientsFailed(error.message))
        })
    };
}

export const actions = {
    getAllClients: getAllClients,
    createClient: createClient
}