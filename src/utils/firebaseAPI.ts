
import { fire } from './firebaseConfig'

import { Part, User } from './types'



const db = fire.firestore()

//firebase User Auth 
export const firebaseSignUp = async (user: User) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(firebaseUserCredential => firebaseUserCredential)
    .catch(error => console.log(error));
}

export const firebaseLogin = async (user: User) => {
  fire
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(firebaseUserCredential => firebaseUserCredential)
    .catch(error => console.log(error));
}

export const firebaseLogOut = async () => {
  await fire.auth().signOut()
    .then(res => console.log('log out ', res))
    .catch(err => console.log(err))
}


//Part DB

export const fetchParts = async () => {
  const partList: Part[] = []
  db
    .collection('Parts')
    .get()
    .then(snap => snap.docs.map(el => console.log(el))
    )




}


