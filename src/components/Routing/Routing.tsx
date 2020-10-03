import React  from 'react';
import { Switch, Route,  } from 'react-router-dom';

import * as pageInfo from "../../data/page-info"; // single source of truth, but not sure how to use it here

import Tcc404 from "../../pages/Tcc404/Tcc404";

import Home from "../../pages/Home/Home";
import Beginners from "../../pages/Beginners/Beginners";
import Intermediate from "../../pages/Intermediate/Intermediate"
import Advanced from "../../pages/Advanced/Advanced"
import About from "../../pages/About/About"
import History from "../../pages/History/History"
import Articles from "../../pages/Articles/Articles"
import Resources from "../../pages/Resources/Resources"
import Contact from "../../pages/Contact/Contact"

const pageList = [ // this doesn't make it any more dry ..., maybe pull path from pageInfo.data
  Home,
  Beginners,
  Intermediate,
  Advanced,
  About,
  History,
  Articles,
  Resources,
  Contact
]


// ToDo import and Route using pageInfo instead of hard coding, but have to be able to pass them all to webpack ...


const Router: React.FunctionComponent = () => {

  return(
    <Switch>
      <Route exact path='/' component={Home} />

      <Route exact path='/index.html' component={Home} />

      
      {pageList.map( (item, index) => {
        return <Route path={`/${pageInfo.data[index].name}`} component={item} key={pageInfo.data[index].name} />
      })}
      
      <Route component={Tcc404} />

    </Switch>
  );
}

//  <Route path='/Home' component={pageList[0]} />
//   <Route path='/Beginners' component={pageList[1]} /> 

export default Router;