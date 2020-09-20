import React from 'react';

import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Articles: React.FunctionComponent = (props) => {
  return(
    <div>
      <ResponsiveContainer>
        <h1>Articles</h1>
        <p>Coming soon</p>
      </ResponsiveContainer>
    </div>
  );
}

export default Articles;