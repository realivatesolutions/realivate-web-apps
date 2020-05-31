import * as types from '../action/actionTypes'

let initialState = {
    data: [],
    selectedProduct: {}
}
export default function productsReducer(state = initialState, action) {

    switch (action.type){
        case types.LOAD_ALL_PRODUCTS_SUCCESS:
            return{
                ...state,
                data: action.data
            }
        case types.LOAD_PRODUCT_SUCCESS:
            return {
                ...state,
                selectedProduct: action.data
            }
        case types.LOAD_ALL_PRODUCTS_FAILED:
            return{
                ...state,
                data: []
            }
        default:
            return state
    }
}