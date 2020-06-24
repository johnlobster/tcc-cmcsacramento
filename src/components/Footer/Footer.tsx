import React from 'react';

import { Theme, Box } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';

// add more props 
// add <Footer-moreProps> to type
// interface Footer-moreProps {
// }

const footerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.fade
    },
  })
)

const Footer:React.FunctionComponent = (props) => {
  const footerClasses = footerStyles();
  return(
    <Box className={footerClasses.root}>
      <h2>Footer</h2>
    </Box>
  );
}

export default Footer;