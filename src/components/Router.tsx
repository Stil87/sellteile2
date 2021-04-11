import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ErrorBoundary from './Error'
import Spinner from "react-spinners/BounceLoader";
import { MainPageContainer } from './MainPageContainer';

export function Navigation() {



  return (
    <Router>
      <ErrorBoundary>
        <Switch>

          <Suspense fallback={<Spinner />}>
            <MainPageContainer/>
          </Suspense>

        </Switch>
      </ErrorBoundary>
    </Router>
  )

}

