import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';


import Header from "./components/Header/Header";
import Routing from "./components/Routing/Routing";
import Footer from "./components/Footer/Footer";
import MuiStyleChanges from "./components/MuiStyleChanges/MuiStyleChanges"

const App: React.FunctionComponent = () => {

  // // another check on code shaking
  // process.env.REACT_APP_BUILD_MODE === "author" && console.log("In author mode")

  // // state will be true (i.e. don't wait for anything to complete) unless in author mode
  // const [appActive, changeAppActive] = React.useState(process.env.REACT_APP_BUILD_MODE !== "author");

  // // load ck editor
  // const ckeReady= React.useRef(false)
  // const onCKELoad: () => void = () => {
  //   ckeReady.current = true
  // }
  // React.useEffect( () => {
  //   if (process.env.REACT_APP_BUILD_MODE === "author") {
  //     const ckeScript = document.createElement('SCRIPT') as HTMLScriptElement;
  //     ckeScript.onload = onCKELoad 
  //     ckeScript.src = "https://cdn.ckeditor.com/ckeditor5/20.0.0/inline/ckeditor.js";

  //     document.head.appendChild(ckeScript)
  //   }
  // })
  
  
  // // loop (setInterval) until everything is ready
  // React.useEffect( () => {
  //   if (process.env.REACT_APP_BUILD_MODE === "author") {
  //     const thisInterval = setInterval( () => {
  //       if( ckeReady.current ) {
  //         changeAppActive(true)
  //         clearInterval(thisInterval)
  //       }
  //     }, 400)
  //   }
  // });
  
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
