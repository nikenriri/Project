import * as ActionTypes from "../action-types";

// Redux Action
// import * as MAIN_REDUX_ACTION from '../../../containers/main/services/redux/actions'

// const {
//     sso_user_sign_out_request
// } = MAIN_REDUX_ACTION.main_user

export const set_auth_user_request = (data) => dispatch => {
    const {
        currentUser
    } = data

    dispatch(
        set_auth_user_success(
            currentUser,
            {}
        )
    )
}

export const set_auth_user_success = (currentUser, authInfo) => (
    {
        type: ActionTypes.ROOT_SET_AUTH_USER,
        currentUser,
        authInfo
    }
)

export const unset_auth_user_request = () => dispatch => {
    dispatch(unset_auth_user_success())
    // dispatch(sso_user_sign_out_request())
}

export const unset_auth_user_success = () => (
    {
        type: ActionTypes.ROOT_UNSET_AUTH_USER
    }
)

export const set_auth_loading_request = () => dispatch => {
    dispatch(set_auth_loading_success())
}

const set_auth_loading_success = () => (
    {
        type: ActionTypes.ROOT_SET_AUTH_LOADING
    }
)

export const unset_auth_loading_request = () => dispatch => {
    dispatch(unset_auth_loading_success())
}

const unset_auth_loading_success = () => (
    {
        type: ActionTypes.ROOT_SET_AUTH_UNLOADING
    }
)