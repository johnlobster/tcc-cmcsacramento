import React from 'react';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Contact: React.FunctionComponent = (props) => {
  return(
    <div>
      <h1>I am a Contact</h1>
    </div>
  );
}

export default Contact;