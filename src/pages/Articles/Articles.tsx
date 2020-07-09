import React from 'react';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Articles: React.FunctionComponent = (props) => {
  return(
    <div>
      <h1>I am a Articles</h1>
    </div>
  );
}

export default Articles;