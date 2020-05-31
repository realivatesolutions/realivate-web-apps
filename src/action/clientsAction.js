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


export function loadClientSuccess(result){
    const { data  } = result;
    const { client } = data;
    let resolvedData = Object.assign({}, result,client) 
    console.log(' RESOLVED DATA ' + JSON.stringify(resolvedData))
    return{
        type: types.LOAD_CLIENT_SUCCESS,
        data: resolvedData
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

function updateClient(data){
    return dispatch => {
        ClientDataService.updateClient(data).then( response => {
        }).catch( error => {
            dispatch(loadAllClientsFailed(error.message))
        })
    };
}

export const clientsAction = {
    getAllClients: getAllClients,
    createClient: createClient,
    getClient: getClient,
    updateClient: updateClient

}