import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ErrorBoundary from './Error'
import Spinner from "react-spinners/BounceLoader";

const PartList = React.lazy(() => import('./PartList')); // Lazy-loaded
export function Navigation() {



  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <PartList/>

          </Suspense>

        </Switch>
      </Router>
    </ErrorBoundary>
  )

}

