import {auth, firebase, appAuth} from './firebase.service';

class LoginService {

    constructor() {
        this.auth = auth;
    }

    signInFaceBook = () => {
        return auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    signInGoogle = () => {
        return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    getUserCurrent = () => {
        return new Promise((resolve, reject) => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    resolve(user);
                } else {
                    reject('Not exist user');
                }
            })
        })
    }

    logout = () => {
        return auth.signOut();
    }
}

export const loginService = new LoginService();
