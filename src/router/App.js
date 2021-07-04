import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../components/Home'

// contexts
import MoviesProvider from '../contexts/MoviesProvider'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MoviesProvider><Home /></MoviesProvider>
        </Route>
      </Switch>
    </Router>
  )
}
