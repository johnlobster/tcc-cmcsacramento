import React from 'react';

import VSeparator from '../../components/VSeparator/VSeparator'
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import TypographyTest from '../../components/TypographyTest/TypographyTest'


// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Intermediate: React.FunctionComponent = (props) => {
  return(
    <div>
      <ResponsiveContainer>

      <VSeparator lines={3} />
      <h1>I am Intermediate, using this to test typography</h1>
      <VSeparator lines={2} />
      <TypographyTest />
    </ResponsiveContainer>
    </div>
  );
}

export default Intermediate;