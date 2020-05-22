import * as types from '../action/actionTypes'

let initialState = {
    userCount: 10,
    expandSideBar: false,
    authenticated: true
}

export default function clientsReducer(state = initialState, action) {

    switch (action.type){
        case types.TOGGLE_SIDEBAR:
            return{
                ...state,
                expandSideBar: !state.expandSideBar
            }
        default:
            return state
    }
}