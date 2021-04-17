import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../config/firebase";

const AUTHENTICATION_STATUS = 'IsAuthenticationStatus';

const appAuth = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

const getAuthenticationStatus = () => {
    return localStorage.getItem(AUTHENTICATION_STATUS);
}

export { auth, getAuthenticationStatus, firebase, AUTHENTICATION_STATUS, appAuth };