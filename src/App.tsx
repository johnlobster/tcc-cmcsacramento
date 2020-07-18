import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';


import Header from "./components/Header/Header";
import Routing from "./components/Routing/Routing";
import Footer from "./components/Footer/Footer";
import MuiStyleChanges from "./components/MuiStyleChanges/MuiStyleChanges"

import * as db from "./database/database";
import receiveMessage from "./database/messageLayer"

function inIframe(): boolean { try { return window.self !== window.top; } catch (e) { return true; } }

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

const App: React.FunctionComponent = () => {

  // initialize database
  window.appDb = db.DatabaseType.create(tmpData);
  
  
  // on mount, listen to postMessage event
  React.useEffect(() => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      if (inIframe()) {
        console.log("App: start listening for postMessage event");
        window.addEventListener("message", receiveMessage);
        return ((): void => {
          console.log("App: unmount, remove message listener");
          window.removeEventListener("message", receiveMessage);
        });
      } else {
        console.log("App: not in iframe, don't set up event listener")
      }
      
      
    } 
  });

  // ToDo add left hand menu for desktop
  return (
    <Router>
    <MuiStyleChanges />
    <Header />
    <Routing />
    <Footer />
    </Router>
    ); 
}

export default App;
