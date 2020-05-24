import * as types from '../action/actionTypes'

let initialState = {
    data: [],
    selectedClient: {}
}
export default function clientsReducer(state = initialState, action) {

    switch (action.type){
        case types.LOAD_ALL_CLIENTS_SUCCESS:
            return{
                ...state,
                data: action.data
            }
        case types.LOAD_CLIENT_SUCCESS:
            return {
                ...state,
                selectedClient: action.data
            }
        case types.LOAD_ALL_VEHICLE_CATEGORY_FAILED:
            return{
                ...state,
                data: []
            }
        default:
            return state
    }
}