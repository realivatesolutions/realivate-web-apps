import { combineReducers } from 'redux'
import dashboardReducer from "./dashboardReducer";
import vehicleCategoryReducer from "./vehicleCategoryReducer";
import serviceCrewReducer from "./serviceCrewReducer";

const  rootReducer = (state, action)=> {
    return appReducer(state, action)
}

const appReducer = combineReducers({
    dashboardReducer,
    vehicleCategoryReducer,
    serviceCrewReducer
})

export  default rootReducer