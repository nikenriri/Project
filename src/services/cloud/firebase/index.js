import { initializeApp } from "firebase/app";
import "firebase/messaging";
import "firebase/storage"
import {getAuth} from "firebase/auth";

// Config
import { APP_CONFIG } from "../../../config";

// //Initialize Firebase Cloud Messaging (FCM)
export const firebase = initializeApp(APP_CONFIG.FIREBASE);
export const auth = getAuth(firebase)