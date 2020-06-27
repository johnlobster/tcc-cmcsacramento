import React from 'react';

import { Grid } from '@material-ui/core';


// I redefined Grid container to be responsive, which breaks if you nest grids, so 
// this component overrides my override

interface MoreProps {
  container?:boolean
}
const NestedGridContainer: React.FunctionComponent<MoreProps> = (props) => {


  return (
      <Grid container {...props} style={{ width: '100%' }}>
        <div>
          {props.children}
        </div>
      </Grid>
    
  )
}

export default NestedGridContainer;