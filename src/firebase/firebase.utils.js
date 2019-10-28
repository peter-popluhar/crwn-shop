import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmpACRwLbpTBVA-QFuP3bEqzFZxe6W3DU",
    authDomain: "crwn-db-257c7.firebaseapp.com",
    databaseURL: "https://crwn-db-257c7.firebaseio.com",
    projectId: "crwn-db-257c7",
    storageBucket: "crwn-db-257c7.appspot.com",
    messagingSenderId: "50012556081",
    appId: "1:50012556081:web:8accc9520f93dd9e867e10"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef;

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;