import 
    React,
    {
        useEffect
    }
from 'react'
import {
    batch 
} from 'react-redux'

// Services
import { FIREBASE } from '../../cloud'
import * as CONFIG from '../../../config'
import { 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth'

// Redux Action

export const sign_in = async(email, password) =>
    signInWithEmailAndPassword(FIREBASE.auth, email, password)
    .then(result => {     

        return {
            status: 200,
            data: {
                emailVerified: result.user.emailVerified,
                currentUser: result.user.uid,
                authProvider: CONFIG.APP_CONFIG.AUTHENTICATION_PROVIDER
            }
        }
      })
    .catch(err => {
        return {
            status: 500,
            msg: err.message
        }
    });

export const sign_out = async() => 
    signOut(FIREBASE.auth)

export const sign_up_user_with_email_password = (email, password) => 
    createUserWithEmailAndPassword(getAuth(), email, password)
    .then(result => {     
        return {
            status: 200,
            data: {
                emailVerified: result.user.emailVerified,
                currentUser: result.user.uid,
                authProvider: CONFIG.APP_CONFIG.AUTHENTICATION_PROVIDER
            }
        }
    })
    .catch(err => {
        return {
            status: 500,
            code: err.code,
            msg: err.message
        }
    });

export const AuthBackgroundTask = () => {

    useEffect(() => {

        const listener = onAuthStateChanged(FIREBASE.auth, user => {

            const cuser = (user || getAuth().currentUser) || {}

            const {
                emailVerified
            } = cuser

            // Only email verified authorised user can pass
            // Prevent client self sign up directly pass without email verified
            if (cuser && emailVerified) {
                // User is signed in.

                batch(() => {
                })

            }
        })
        
        return listener
    })

    return <></>
}