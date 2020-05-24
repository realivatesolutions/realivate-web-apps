import ServiceCrewService from '../services/serviceCrew'
import * as types from '../action/actionTypes'


export function loadAllServiceCrewsSuccess(data){
    return{
        type: types.LOAD_ALL_SERVICE_CREW_SUCCESS,
        data: data
    }
}

export function loadServiceCrewsFailed(data){
    return{
        type: types.LOAD_ALL_SERVICE_CREW_FAILED
    }
}


export function loadServiceCrewSuccess(data){
    return{
        type: types.LOAD_SERVICE_CREW_SUCCESS,
        data: data
    }
}

function getAllServiceCrew(){
    return dispatch => {
        ServiceCrewService.getAllServiceCrew().then( response => {
            dispatch(loadAllServiceCrewsSuccess(response.data))
        }).catch( error => {
            dispatch(loadServiceCrewsFailed(error.message))
        })
    };
}

function createServiceCrew(data) {
    return dispatch => {
        ServiceCrewService.createServiceCrew(data).then( response => {

        }).catch( error => {
            dispatch(loadServiceCrewsFailed(error.message))
        })
    };
}

function getServiceCrew(id) {
    return dispatch => {
        ServiceCrewService.getServiceCrew(id).then( response => {
            dispatch(loadServiceCrewSuccess(response.data))
        }).catch( error => {
            dispatch(loadServiceCrewsFailed(error.message))
        })
    };
}

function updateServiceCrew(data){
    return dispatch => {
        ServiceCrewService.updateServiceCrew(data).then( response => {
        }).catch( error => {
            dispatch(loadServiceCrewsFailed(error.message))
        })
    };
}

export const actions = {
    getAllServiceCrew: getAllServiceCrew,
    createServiceCrew: createServiceCrew,
    getServiceCrew: getServiceCrew,
    updateServiceCrew: updateServiceCrew
}