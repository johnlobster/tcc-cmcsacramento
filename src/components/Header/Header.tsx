import React from 'react';

import {Box} from '@material-ui/core'

// import { createMuiTheme, Theme } from '/styles';

// add more props 
// add <Header-moreProps> to type
// interface Header-moreProps {
// }

const Header:React.FunctionComponent = (props) => {
  return(
    <div>
      <Box bgcolor="primary.main" color="text.primary" >
        <h1>Header</h1>
      </Box>
      <Box bgcolor="secondary.main" color="text.secondary" >
        <h1>More</h1>
      </Box>
    </div>
    
  );
}

export default Header;