import * as ActionTypes from '../action-types'

const user_DEFAULT_STATE = {

}

export const user = (state = user_DEFAULT_STATE, action) => {

    let newState = JSON.parse(JSON.stringify(state))

    if(!action) return newState

    switch (action.type) {
        case ActionTypes.SSO_USER_SIGN_IN: {
            const user = action.user;
            newState = user
            return newState
        }
        case ActionTypes.SSO_USER_SIGN_OUT: {
            return user_DEFAULT_STATE
        }
        case ActionTypes.SSO_USER_SIGN_UP: {
            return newState;
        }
        default: {
            return newState;
        }
    }
}