import ProductDataService from '../services/productDataService'
import * as types from '../action/actionTypes'


export function loadAllProductsSuccess(data){
    return{
        type: types.LOAD_ALL_PRODUCTS_SUCCESS,
        data: data
    }
}

export function loadAllProductsFailed(data){
    return{
        type: types.LOAD_ALL_PRODUCTS_FAILED
    }
}


export function loadProductSuccess(data){
    return{
        type: types.LOAD_PRODUCT_SUCCESS,
        data: data
    }
}

function getAllProductsByClient(clientName){
    return dispatch => {
        ProductDataService.getAllProductsByClient(clientName).then( response => {
            dispatch(loadAllProductsSuccess(response.data))
        }).catch( error => {
            dispatch(loadAllProductsFailed(error.message))
        })
    };
}

function createProduct(data) {
     console.log('CREATING PRODUCT ACTION')
    return dispatch => {
        ProductDataService.createProduct(data).then( response => {

        }).catch( error => {
            dispatch(loadAllProductsFailed(error.message))
        })
    };
}

function getProduct(id) {
    return dispatch => {
        ProductDataService.getProduct(id).then( response => {
            dispatch(loadProductSuccess(response.data))
        }).catch( error => {
            dispatch(loadAllProductsFailed(error.message))
        })
    };
}

function updateProduct(data){
    return dispatch => {
        ProductDataService.updateProduct(data).then( response => {
        }).catch( error => {
            dispatch(loadAllProductsFailed(error.message))
        })
    };
}

export const productsAction = {
    getAllProductsByClient: getAllProductsByClient,
    createProduct: createProduct,
    getProduct: getProduct,
    updateProduct: updateProduct

}