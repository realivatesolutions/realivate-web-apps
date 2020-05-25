import { combineReducers } from 'redux'
import dashboardReducer from "./dashboardReducer";
import clientsReducer from "./clientsReducer";

const  rootReducer = (state, action)=> {
    return appReducer(state, action)
}

const appReducer = combineReducers({
    dashboardReducer,
    clientsReducer
})

export  default rootReducer