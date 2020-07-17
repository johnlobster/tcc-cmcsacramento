import React from 'react';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

// rhythm is hard coded as 1.5. Should be part of theme
interface MoreProps {
  lines: number;
}
const VSeparator: React.FunctionComponent<MoreProps> = (props) => {
  return(
    <React.Fragment>
      { (props.lines > 0) && 
        <div style={ {marginBottom: `${props.lines * 1.5}rem` }} />
      }
    </React.Fragment>
    
  );
}

export default VSeparator;