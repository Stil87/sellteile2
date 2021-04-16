
import { fire } from './firebaseConfig'

import { Part, User } from './types'



export const db = fire.firestore()

export const PART_COLLECTION_NAME = 'Parts'

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

export const fetchParts = async (): Promise<Part[]> => {
  try {
    return db
      .collection(PART_COLLECTION_NAME)
      .get()
      .then(snap => snap.docs.map(el => el.data() as Part))

  } catch (error) {
    console.log(error)
    return error
  }
}

export   function partStream (observer:any)  {
  return  db
    .collection(PART_COLLECTION_NAME)
    .onSnapshot(observer)

}


