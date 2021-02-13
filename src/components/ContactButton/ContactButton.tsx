import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";

const useStyles = makeStyles({
  buttonBox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    '&  a': {
      color: "white",
      textDecoration: 'none',
    }
  },
  contactButton: {
    color: theme.palette.secondary.contrastText,
  },
})

const ContactButton: React.FunctionComponent = () => {

const classes= useStyles();

return (
  <div className={classes.buttonBox}>
    <Button 
      variant="contained" 
      size="large"
      color="secondary" 
      className={classes.contactButton}
    >
      <Link to="/Contact#contact">
        Contact us
      </Link>
    </Button>
  </div>
)
}

export default ContactButton