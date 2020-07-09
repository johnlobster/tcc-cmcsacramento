import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";
import classes from '*.module.css';

const useStyles = makeStyles({
  container: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      padding: '1rem 0.1rem 1rem 0.1rem',

    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '85%',
      padding: '1rem 0.3rem 1rem 0.3rem',

    },
    [theme.breakpoints.up('md')]: {
      width: '75%',
      padding: '1rem 0.5rem 1rem 0.5rem',

    },
    maxWidth: `${theme.breakpoints.values.md}px`,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  
})

const ContactButton: React.FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      {props.children}
    </Grid>
  )
}

export default ContactButton