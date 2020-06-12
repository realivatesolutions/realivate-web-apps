import DepartmentsService from '../services/departmentsService'
import * as types from '../action/actionTypes'


export function loadAllDepartmentSuccess(data){
    return{
        type: types.LOAD_ALL_DEPARTMENT_SUCCESS,
        data: data
    }
}

export function loadDepartmentFailed(data){
    return{
        type: types.LOAD_ALL_DEPARTMENT_FAILED
    }
}


export function loadDepartmentSuccess(data){
    return{
        type: types.LOAD_DEPARTMENT_SUCCESS,
        data: data
    }
}

function getAllDepartments(){
    return dispatch => {
        DepartmentsService.getAllDepartmentsCategory().then( response => {
            dispatch(loadAllDepartmentSuccess(response.data))
        }).catch( error => {
            dispatch(loadDepartmentFailed(error.message))
        })
    };
}

function createDepartment(data) {
    return dispatch => {
        DepartmentsService.createDepartment(data).then( response => {

        }).catch( error => {
            dispatch(loadDepartmentFailed(error.message))
        })
    };
}

function getDepartment(id) {
    return dispatch => {
        DepartmentsService.getDepartment(id).then( response => {
            dispatch(loadDepartmentSuccess(response.data))
        }).catch( error => {
            dispatch(loadDepartmentFailed(error.message))
        })
    };
}

function updateDepartment(data){
    return dispatch => {
        DepartmentsService.updateDepartment(data).then( response => {
        }).catch( error => {
            dispatch(loadDepartmentFailed(error.message))
        })
    };
}

export const actions = {
    getAllDepartments: getAllDepartments,
    createDepartment: createDepartment,
    getDepartment: getDepartment,
    updateDepartment: updateDepartment
}