import * as ActionTypes from '../action-types'

const DEFAULT_AUTH_USER_STATE = {
    currentUser: null,
    loadingState: false
}

export const auth = (state = DEFAULT_AUTH_USER_STATE, action) => {

    let newState = JSON.parse(JSON.stringify(state))

    if(!action) return newState

    switch (action.type) {
        case ActionTypes.ROOT_SET_AUTH_USER: {
            newState.currentUser = action.currentUser;
            // if(action.authInfo) newState.authInfo = action.authInfo
            return newState;
        }
        case ActionTypes.ROOT_UNSET_AUTH_USER: {
            return DEFAULT_AUTH_USER_STATE;
        }
        case ActionTypes.ROOT_SET_AUTH_LOADING: {
            newState.loadingState = true
            return newState;
        }
        case ActionTypes.ROOT_SET_AUTH_UNLOADING: {
            newState.loadingState = false
            return newState;
        }
        default:
            return state;
    }
}