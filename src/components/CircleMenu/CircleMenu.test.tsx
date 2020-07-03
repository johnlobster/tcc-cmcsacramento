import React from 'react'
import { Route, Switch, Router} from 'react-router-dom';


import { createMemoryHistory } from 'history'
import {act} from 'react-dom/test-utils'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import CircleMenu from "./CircleMenu"


// simple testbed to check that links will navigate away from the component
const Home: React.FunctionComponent = () => {
  return <h1>This is home page</h1>
}
const history = createMemoryHistory()
history.push('/badRoute')
const TestBed: React.FunctionComponent = () => {
  return(
    <div>
    <Router history={history}>
      <Switch>
        <Route exact path='/Home' component={Home} />
        <Route component={ CircleMenu } />
      </Switch>
    </Router>
    </div>
  )
}

it("Renders CircleMenu", () => {
  const history = createMemoryHistory()

  render(<Router history={history}><CircleMenu /></Router>);
  cleanup
})