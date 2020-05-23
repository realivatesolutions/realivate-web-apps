import * as types from '../action/actionTypes'

let initialState = {
    data: [],
    selectedCategory: {}
}
export default function serviceCrewReducer(state = initialState, action) {

    switch (action.type){
        case types.LOAD_ALL_SERVICE_CREW_SUCCESS:
            return{
                ...state,
                data: action.data
            }
        case types.LOAD_SERVICE_CREW_SUCCESS:
            console.log(action)
            return {
                ...state,
                selectedCategory: action.data
            }
        case types.LOAD_ALL_SERVICE_CREW_FAILED:
            return{
                ...state,
                data: []
            }
        default:
            return state
    }
}