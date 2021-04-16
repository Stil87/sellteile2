import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ErrorBoundary from './Error'
import Spinner from "react-spinners/BounceLoader";

const MainPageContainer = React.lazy(() => import('./MainPageContainer')); // Lazy-loaded

export function Navigation() {



  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Suspense fallback={<div style={{ position: "fixed", top: "45%", left: "45%", transform: "translate(-50%, -50%)" }}> <Spinner /></div>}>
            <MainPageContainer />
          </Suspense>
        </Switch>
      </ErrorBoundary>
    </Router>
  )

}

