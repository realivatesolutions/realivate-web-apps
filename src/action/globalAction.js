import * as types from './actionTypes'

export function toggleSideBar() {
    return(dispatch) => {
        dispatch({type: types.TOGGLE_SIDEBAR})
    }
}