import React from 'react';

import { passClasses} from "../../global/common"

interface MoreProps {
  id: string;
  className?: string;
}

const EditBlock: React.FunctionComponent<MoreProps> = (props) => {

  return(
    <div className={passClasses(props.className)} >
      {props.children}
    </div>
  );
}

export default EditBlock;