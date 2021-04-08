import React, { useEffect, useState } from 'react';
import './App.css';
import 'firebaseui/dist/firebaseui.css'
import { startFirebaseUi, fire } from './utils/firebaseConfig'
import {firebaseLogOut} from './utils/firebaseAPI'



function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged(user => {
      if (user) { setUserLoggedIn(true) }
      else {
        setUserLoggedIn(false)
        startFirebaseUi('#test')
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])


  return (
    userLoggedIn ? <div onClick={()=>firebaseLogOut()}>Hello</div> :
      <div id="test">
      </div>
  );
}

export default App;
