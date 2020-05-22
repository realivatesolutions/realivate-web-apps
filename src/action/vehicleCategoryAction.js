import VehicleCategoryService from '../services/vehicleCategory'
import * as types from '../action/actionTypes'


export function loadVehicleCategoriesSuccess(data){
    return{
        type: types.LOAD_VEHICLE_CATEGORY_SUCCESS,
        data: data
    }
}

export function loadVehicleCategoriesFailed(data){
    return{
        type: types.LOAD_VEHICLE_CATEGORY_FAILED
    }
}

function getAllVehicle(){
    return dispatch => {
        VehicleCategoryService.getAllVehicleCategory().then( response => {
            dispatch(loadVehicleCategoriesSuccess(response.data))
        }).catch( error => {
            dispatch(loadVehicleCategoriesFailed(error.message))
        })
    };
}

export const actions = {
    getAllVehicle: getAllVehicle
}