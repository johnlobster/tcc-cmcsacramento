import React from 'react';

import { passClasses } from "../../global/common"

// add more props 
// add <EditSpan-moreProps> to type
// interface EditSpan-moreProps {
// }

interface MoreProps { 
  id: string; 
  className?: string; } 

const EditSpan:React.FunctionComponent<MoreProps> = (props) => {

  const passedClasses: string = passClasses(props.className);
  
  return(
    <React.Fragment>
    { (passedClasses.length !== 0) ? 
      <span className={passedClasses}>
        {props.children}
      </span>
    :
      <span>
        {props.children}
      </span>
    }
    </React.Fragment>

  );
}

export default EditSpan;