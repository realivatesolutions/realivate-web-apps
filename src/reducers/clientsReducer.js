import * as types from '../action/actionTypes'

let initialState = {
    data: [],
    selectedCategory: {}
}
export default function clientsReducer(state = initialState, action) {

    switch (action.type){
        case types.LOAD_ALL_CLIENTS_SUCCESS:
            return{
                ...state,
                data: action.data
            }
        case types.LOAD_VEHICLE_CATEGORY_SUCCESS:
            console.log(action)
            return {
                ...state,
                selectedCategory: action.data
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