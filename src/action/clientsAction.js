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


export function loadClientSuccess(data){
    return{
        type: types.LOAD_CLIENT_SUCCESS,
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

function getClient(id) {
    return dispatch => {
        ClientDataService.getClient(id).then( response => {
            dispatch(loadClientSuccess(response.data))
        }).catch( error => {
            dispatch(loadAllClientsFailed(error.message))
        })
    };
}

export const actions = {
    getAllClients: getAllClients,
    createClient: createClient,
    getClient: getClient

}