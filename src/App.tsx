import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';


import Header from "./components/Header/Header";
import Routing from "./components/Routing/Routing";
import Footer from "./components/Footer/Footer";
import MuiStyleChanges from "./components/MuiStyleChanges/MuiStyleChanges"

const App: React.FunctionComponent = () => {
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
