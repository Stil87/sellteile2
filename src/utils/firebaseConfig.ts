import firebase from "firebase/app";
import * as firebaseui from 'firebaseui'



import 'firebase/storage';
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBubrfwxvlnU1ntjR1PXCbR_2ylAC6CcOk",
  authDomain: "sellteile.firebaseapp.com",
  projectId: "sellteile",
  storageBucket: "sellteile.appspot.com",
  messagingSenderId: "41707276635",
  appId: "1:41707276635:web:603c2de743aee3c806327e",
  measurementId: "G-MYQELKHBQ3"
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



