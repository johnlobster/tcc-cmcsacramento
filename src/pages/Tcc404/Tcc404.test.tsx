import React, { Component } from 'react'
import { Route, Switch, Router, MemoryRouter} from 'react-router-dom';

import { createMemoryHistory } from 'history'
import {act} from 'react-dom/test-utils'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import { queryHelpers } from '@testing-library/dom'
import Tcc404 from "./Tcc404"

it("Renders Tcc404", () => {
  const history = createMemoryHistory()

  render(<Router history={history}><Tcc404 /></Router>);
  cleanup
})

it("contains image, title, link and button", () => {
  const history = createMemoryHistory()
  const { container } = render(<Router history={history}><Tcc404 /></Router>);
  expect(screen.getByText("Whoops, that was a 404 ! That page doesn't exist")).toBeInTheDocument()
  expect(screen.getByText("Take me back to the home page")).toBeInTheDocument()

  expect(screen.getByRole("button")).toBeInTheDocument()
  expect(screen.getByRole("img")).toBeInTheDocument()
  expect(screen.getByAltText("A meditating dog, just what you need for a 404")).toBeInTheDocument()
  expect(screen.getByRole("link")).toBeInTheDocument()

  // name here is the text associated with the role
  expect(screen.getByRole("button", { name: 'Take me back to the home page' })).toBeInTheDocument()
  expect(screen.getByRole("link", { name: 'Take me back to the home page' })).toBeInTheDocument()

  // passing in function to get function - can do all sorts of element matching
  expect(screen.getAllByText((screen, element) => {
    return element.tagName.toLowerCase() === 'div'
  }).length).toEqual(5)

  cleanup
})

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
        <Route component={Tcc404} />
      </Switch>
    </Router>
    </div>
  )
}
it("Navigates on a click", () => {

  render(<TestBed />);
  expect(screen.getByText("Whoops, that was a 404 ! That page doesn't exist")).toBeInTheDocument()

  act(() => {
    userEvent.click(screen.getByRole("link"))

  })
  expect(screen.queryByText("This is home page")).toBeInTheDocument()
  expect(screen.queryByText("Whoops, that was a 404 ! That page doesn't exist")).not.toBeInTheDocument()

  cleanup
})