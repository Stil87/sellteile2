import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ErrorBoundary from './Error'
import Spinner from "react-spinners/BounceLoader";
import { CreatePart } from './CreatePart';
import { partStream } from '../utils/firebaseAPI';
import { Part } from '../utils/types';

const MainPageContainer = React.lazy(() => import('./MainPageContainer')); // Lazy-loaded

export function Navigation() {
  const [partList, setPartList] = useState<Part[]>([])


  useEffect(() => {
    console.log('fire')
    const unsubscribe = partStream({
      next: (querySnapshot: any) => {
        const updated = querySnapshot.docs.map((docSnap: any) => docSnap.data())
        setPartList(updated)
      }
    })
    return unsubscribe
  }, [])



  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path={'/'}>
          <Suspense fallback={<div style={{ position: "fixed", top: "45%", left: "45%", transform: "translate(-50%, -50%)" }}> <Spinner /></div>}>
            <MainPageContainer partList={partList} />
          </Suspense>
          </Route>
          <Route path={'/Create'}
            render={(props) => <CreatePart props={props}/> }/>
        </Switch>
      </ErrorBoundary>
    </Router>
  )

}

