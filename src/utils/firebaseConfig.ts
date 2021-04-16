import firebase from "firebase/app";
import * as firebaseui from 'firebaseui'



import 'firebase/storage';
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'
import { preProcessFile } from "typescript";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,
  measurementId:process.env.REACT_APP 
}


export const fire = firebase.initializeApp(firebaseConfig);

export const ui = new firebaseui.auth.AuthUI(firebase.auth());

export const startFirebaseUi = (id: string) => ui.start(id, {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ], callbacks: {
    signInSuccessWithAuthResult: function () {
      return false
    }
  }
  // Other config options...
});



