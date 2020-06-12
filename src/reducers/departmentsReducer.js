import * as types from '../action/actionTypes'

let initialState = {
    data: [],
    selectedDepartment: {}
}
export default function departmentsReducer(state = initialState, action) {

    switch (action.type){
        case types.LOAD_ALL_DEPARTMENT_SUCCESS:
            return{
                ...state,
                data: action.data
            }
        case types.LOAD_DEPARTMENT_SUCCESS:
            console.log(action)
            return {
                ...state,
                selectedDepartment: action.data
            }
        case types.LOAD_ALL_DEPARTMENT_FAILED:
            return{
                ...state,
                data: []
            }
        default:
            return state
    }
}