import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Header from "./components/Header/Header";
import Routing from "./components/Routing/Routing";
import Footer from "./components/Footer/Footer";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header desktop={true}/>
        <Routing />
        <Footer />
      </BrowserRouter>
    );
  }

  
  
}

export default App;
