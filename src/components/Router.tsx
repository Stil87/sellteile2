import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ErrorBoundary from './Error'
import { MainPageContainer } from './MainPageContainer';

export function Navigation() {



  return (
    <Router>
      <ErrorBoundary>
        <Switch>
            <MainPageContainer />
        </Switch>
      </ErrorBoundary>
    </Router>
  )

}

