import { combineReducers } from 'redux'
import dashboardReducer from "./dashboardReducer";
import vehicleCategoryReducer from "./vehicleCategoryReducer";
import clientsReducer from "./clientsReducer";

const  rootReducer = (state, action)=> {
    return appReducer(state, action)
}

const appReducer = combineReducers({
    dashboardReducer,
    vehicleCategoryReducer,
    clientsReducer
})

export  default rootReducer