import React from 'react';

import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const History: React.FunctionComponent = (props) => {
  return(
    <div>
      <ResponsiveContainer>
        <h1>History</h1>
        <p>Tai chi has a long history. This section of the web site, not so much </p>
      </ResponsiveContainer>
    </div>
  );
}

export default History;