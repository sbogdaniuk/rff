import React from 'react'
import { Link, Redirect, Router, Route, Switch } from 'react-router-dom'

import { history } from './services'
import { routes } from './constants'
import { Form, About } from './routes'

export function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <ul>
            <li>
              <Link to={routes.form}>form</Link>
            </li>
            <li>
              <Link to={`${routes.form}?tab=2`}>form (tab 2)</Link>
            </li>
            <li>
              <Link to={`${routes.about}?with=params`}>about with params</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path={routes.form} component={Form} />
          <Route path={routes.about} component={About} />
          <Redirect to={routes.form} />
        </Switch>
      </Router>
    </div>
  )
}
