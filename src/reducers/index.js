import { combineReducers } from 'redux'
import dashboardReducer from "./dashboardReducer";
import vehicleCategoryReducer from "./vehicleCategoryReducer";

const  rootReducer = (state, action)=> {
    return appReducer(state, action)
}

const appReducer = combineReducers({
    dashboardReducer,
    vehicleCategoryReducer
})

export  default rootReducer