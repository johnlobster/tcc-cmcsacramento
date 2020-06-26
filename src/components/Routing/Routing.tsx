import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import * as pageInfo from "../../data/page-info"; // single source of truth
import Beginners from "../../pages/Beginners/Beginners";
import Home from "../../pages/Home/Home";
import Tcc404 from "../../pages/Tcc404/Tcc404";

// ToDo import and Route using pageInfo instead of hard coding

// add more props 
// add <Routing-moreProps> to type
// interface RoutingMoreProps {
//   pages: pageInfo.pageData
// }

const Routing: React.FunctionComponent = (props) => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/Beginners' component={Beginners} />

      <Route component={Tcc404} />

    </Switch>
  );
}


export default Routing;