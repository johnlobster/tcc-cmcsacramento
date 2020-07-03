import React from 'react'
import { Route, Switch, Router} from 'react-router-dom';


import { createMemoryHistory } from 'history'
import {act} from 'react-dom/test-utils'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import Header from "./Header"

import { data } from "../../data/page-info";

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
        <Route component={ Header } />
      </Switch>
    </Router>
    </div>
  )
}

it("Renders Header with title and menu present", () => {

  render(<TestBed> <Header /> </TestBed>);
  // Being specific as there is Tai Chi more than one time
  expect(screen.getByText(/^Tai Chi$/)).toBeInTheDocument()
  expect(screen.getAllByLabelText('menu').length).toEqual(1) // only one menu

  // The header is a link , so before menu opens, can see it
  expect(screen.getAllByRole("link").length).toEqual(1)
  expect(screen.getByRole("link", { name: 'Tai Chi' })).toBeInTheDocument()


  // Check clicking on title will navigate
  act(() => {
    userEvent.click(screen.getByRole("link"))
  })

  expect(screen.queryByText("This is home page")).toBeInTheDocument()
  expect(screen.queryByText(/^Tai Chi$/)).not.toBeInTheDocument()

  cleanup
})