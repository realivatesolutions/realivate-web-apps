import VehicleCategoryService from '../services/vehicleCategory'
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

function getAllVehicle(){
    return dispatch => {
        VehicleCategoryService.getAllVehicleCategory().then( response => {
            dispatch(loadAllVehicleCategoriesSuccess(response.data))
        }).catch( error => {
            dispatch(loadVehicleCategoriesFailed(error.message))
        })
    };
}

function createVehicle(data) {
    return dispatch => {
        VehicleCategoryService.createVehicle(data).then( response => {

        }).catch( error => {
            dispatch(loadVehicleCategoriesFailed(error.message))
        })
    };
}

function getVehicle(id) {
    return dispatch => {
        VehicleCategoryService.getVehicle(id).then( response => {
            dispatch(loadVehicleCategorySuccess(response.data))
        }).catch( error => {
            dispatch(loadVehicleCategoriesFailed(error.message))
        })
    };
}

function updateVehicle(data){
    return dispatch => {
        VehicleCategoryService.updateVehicle(data).then( response => {
        }).catch( error => {
            dispatch(loadVehicleCategoriesFailed(error.message))
        })
    };
}

export const actions = {
    getAllVehicle: getAllVehicle,
    createVehicle: createVehicle,
    getVehicle: getVehicle,
    updateVehicle: updateVehicle
}