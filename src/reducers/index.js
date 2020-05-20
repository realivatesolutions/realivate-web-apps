import { combineReducers } from 'redux'
import dashboardReducer from "./dashboardReducer";
const  rootReducer = (state, action)=> {
    return appReducer(state, action)
}

const appReducer = combineReducers({
    dashboardReducer
})

export  default rootReducer