import {
    configureStore
} from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import { rootReducer }from '../services/redux/reducers';
import { createBrowserHistory } from 'history';

import * as CONFIG from '../config'
import * as CONSTANTS from '../constants'

export const history = createBrowserHistory()

const ReduxConfigureStore = (preloadedState) => 
    configureStore({
        reducer: rootReducer(history),
        preloadedState: preloadedState,
        middleware: [thunk],
        // do not forget this
        devTools: (
            CONFIG.APP_INFO.APP_MODE.toUpperCase() !== CONSTANTS.APP_INFO.MODE.UNKNOWN
            &&
            CONFIG.APP_INFO.APP_MODE.toUpperCase() !== CONSTANTS.APP_INFO.MODE.PROD
            &&
            true
            ||
            false
        )
    })

export default ReduxConfigureStore