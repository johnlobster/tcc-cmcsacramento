import React from 'react';

import { passClasses } from "../../global/common"

// add more props 
// add <EditSpan-moreProps> to type
// interface EditSpan-moreProps {
// }

interface MoreProps { 
  id: string; 
  className?: string; } 

const EditSpan:React.FunctionComponent = (props) => {

  return(
    <div className={passClasses(props.className)}>
      {props.children}
    </div>
  );
}

export default EditSpan;