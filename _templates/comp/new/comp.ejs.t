---
to: <%= Name %>/<%= Name %>.tsx
unless_exists: true
---

import React from 'react';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const <%= Name %>: React.FunctionComponent = (props) => {
  return(
    <div>
      <h1>I am a <%= Name %></h1>
    </div>
  );
}

export default <%= Name %>;