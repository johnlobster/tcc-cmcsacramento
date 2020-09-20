import React from 'react';

import { Grid } from '@material-ui/core';

// Behaves as a mui <Grid item> except that size can be overridden to be 12 columns

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
type gridSize = boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined

interface MoreProps {
  expand: boolean; // if true, overrides item width (xs={} etc) to be 100%
  xs?: gridSize;
  sm?: gridSize;
  md?: gridSize;
  lg?: gridSize;
  xl?: gridSize;
}

const ExpandableGridItem: React.FunctionComponent<MoreProps> = (props) => {

  // const [full, fullUpdate] = React.useState(false)

  return(
    <div>
      { props.expand ? (
        <Grid item 
          { ...props}
          style={{maxWidth: '100%'}}
        >
          {props.children}
        </Grid>
      ): (
        <Grid item
          {...props}
        >
          {props.children}
        </Grid>
      )}
    </div>
    
  );
}

export default ExpandableGridItem;