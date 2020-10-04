import React from 'react'
import { Route, Switch, Router} from 'react-router-dom';


import { createMemoryHistory } from 'history'
import {act} from 'react-dom/test-utils'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import CGrid from "./CGrid"


// simple testbed to check that links will navigate away from the component
// remove all of this if component doesn't have links/anchors
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
        <Route component={ CGrid } />
      </Switch>
    </Router>
    </div>
  )
}

it("Renders CGrid", () => {
  const history = createMemoryHistory()

  render(<Router history={history}><CGrid /></Router>);
  cleanup
})

test.todo("Need to write more tests");
