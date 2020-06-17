import React from 'react';

import dog from "../../images/doggy.jpg";

const Tcc404:React.FunctionComponent = (props) => {
  return(
    <div>
      <h1>
        Whoops, that was a 404 !
      </h1>
      <img src={dog} 
        alt="A meditating dog, just what you need for a 404" />
    </div>
  );
}

export default Tcc404;