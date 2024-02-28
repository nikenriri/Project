import 
    React, 
    { 
        // useState
    } 
from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

import ReduxConfigureStore from './configureStore'

import { ConfigProvider } from 'antd';

/**
 * Config & Constant
 */
import * as CONFIG from '../config'
import { THEME } from '../constants'

/**
 * Pages
 */

/**
 * Components
 */
import Initialiser from './components/Initialiser'; 

/**
 * Service Componnent
 */
import * as Auth from '../services/auth'

/**
 * Container
 */
import App from '../containers/v1'

/**
 * Style
 */
import './index.css'

/**
 * Configure Store
 */
const store = ReduxConfigureStore()

const ThemedAPP = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: THEME.THEME_COLOR
                }
            }}
        >
            <App />
        </ConfigProvider>
    )
}

const APPWapper = () => {
    switch(CONFIG.APP_INFO.APP_MAINTENANCE_MODE === 'true') {
        case true: {
            return (
                <></>
            )
        } 
        case false:
        default: {
            return (
                <>
                    <Initialiser />
                    <Auth.AuthBackgroundTask />
                    <ThemedAPP />
                </>
            )
        }
    }
}

const ConnectedApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {
                    APPWapper()
                }
            </BrowserRouter>
        </Provider>
    );
}

export default ConnectedApp