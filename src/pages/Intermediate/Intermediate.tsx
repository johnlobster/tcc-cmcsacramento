import React from 'react';

import VSeparator from '../../components/VSeparator/VSeparator'


// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Intermediate: React.FunctionComponent = (props) => {
  return(
    <div>
      <VSeparator lines={3} />
      <h1>I am a Intermediate</h1>
    </div>
  );
}

export default Intermediate;