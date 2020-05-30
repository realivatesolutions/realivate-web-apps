import { combineReducers } from 'redux'
import dashboardReducer from "./dashboardReducer";
import clientsReducer from "./clientsReducer";
import productsReducer from "./productsReducer";

const  rootReducer = (state, action)=> {
    return appReducer(state, action)
}

const appReducer = combineReducers({
    dashboardReducer,
    clientsReducer,
    productsReducer
})

export  default rootReducer