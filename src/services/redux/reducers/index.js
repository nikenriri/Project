import { combineReducers } from "redux";

/**
 * Root Redux Reducer
 */
import { auth } from './auth'

/**
 * Containized Redux Reducer
 */
import { mainReducer } from '../../../containers/v1/services/redux/reducers'

// Main Container Redux Action Types 
import * as MAIN_ActionTypes from '../../../containers/v1/services/redux/action-types'

const appReducer = () => combineReducers({
  containers: combineReducers({
    main: mainReducer,
  }),
  root: combineReducers({
    auth
  })
    // ... // rest of your reducers
})

export const rootReducer = (history) => (state, action) => {

  if (action && action.type === MAIN_ActionTypes.SSO_USER_SIGN_OUT) {
      return appReducer(history)(undefined, action)
  }
    
  return appReducer(history)(state, action);
}