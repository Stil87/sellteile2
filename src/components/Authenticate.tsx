import React, { useEffect, useState } from 'react';

import { startFirebaseUi, fire } from '../utils/firebaseConfig'
import { firebaseLogOut } from '../utils/firebaseAPI'

import 'firebaseui/dist/firebaseui.css'
import { Navigation } from './Router';


export function Authenticate() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged(user => {
      if (user) { setUserLoggedIn(true) }
      else {
        setUserLoggedIn(false)
        startFirebaseUi('#loginUI')
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])


  return (
    userLoggedIn ? <Navigation/> :
      <div id="loginUI"/>
      
  );
}