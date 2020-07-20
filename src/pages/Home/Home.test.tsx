import React from 'react'
import { Route, Switch, Router} from 'react-router-dom';


import { createMemoryHistory } from 'history'
import {act} from 'react-dom/test-utils'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import Home from "./Home"

import * as db from "../../database/database";



// simple testbed to check that links will navigate away from the component
// const Home: React.FunctionComponent = () => {
//   return <h1>This is home page</h1>
// }
// const history = createMemoryHistory()
// history.push('/badRoute')
// const TestBed: React.FunctionComponent = () => {
//   return(
//     <div>
//     <Router history={history}>
//       <Switch>
//         <Route exact path='/Home' component={Home} />
//         <Route component={ Home} />
//       </Switch>
//     </Router>
//     </div>
//   )
// }

// create a mock for App with global database
const tmpData: db.DbType = {
  page1: {
    "someId": "First editor data",
    "someOtherId": "Second editor data",

  }
}

declare global {
  /* eslint no-var: "off" */
  var appDb: db.DatabaseType;
}
const AppMock: React.FunctionComponent = (props) => {

  // initialize database
  window.appDb = db.DatabaseType.create(tmpData);
  
  return (
    <div>
      {props.children}
    </div>
  )
}
it("Renders Home", (done) => {
  const history = createMemoryHistory()
  history.push('/Home')

  render(
    <AppMock>
      <Router history={history}>
        <Switch>
          <Route exact path='/Home' component={Home} />
          <Route component={ Home} />
        </Switch>
      </Router>
    </AppMock>
  );
  cleanup
  done()
})

test.todo("Need to write more tests");
