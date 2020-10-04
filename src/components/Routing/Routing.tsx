import React  from 'react';
import { Switch, Route,  } from 'react-router-dom';

import * as pageInfo from "../../data/page-info"; // single source of truth, but not sure how to use it here

import Tcc404 from "../../pages/Tcc404/Tcc404";

// const pageList = [ // this doesn't make it any more dry ..., maybe pull path from pageInfo.data
//   Home,
//   Beginners,
//   Intermediate,
//   Advanced,
//   About,
//   History,
//   Articles,
//   Resources,
//   Contact
// ]


// ToDo import and Route using pageInfo instead of hard coding, but have to be able to pass them all to webpack ...


const Router: React.FunctionComponent = () => {

  return(
    <Switch>
      <Route exact path='/' component={pageInfo.allPages[0].reactPage} />

      <Route exact path='/index.html' component={pageInfo.allPages[0].reactPage} />

      
      {pageInfo.allPages.map( (item, index) => {
        return <Route path={`/${item.name}`} component={item.reactPage} key={`${item.name}_${index}`} />
      })}
      
      <Route component={Tcc404} />

    </Switch>
  );
}

//  <Route path='/Home' component={pageList[0]} />
//   <Route path='/Beginners' component={pageList[1]} /> 

export default Router;