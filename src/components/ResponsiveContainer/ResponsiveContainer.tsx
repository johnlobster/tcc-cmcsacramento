import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";

const useStyles = makeStyles({
  container: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      padding: '1.5rem 1.5rem 1.5rem 1.5rem',

    },
    [theme.breakpoints.between('sm', 'lg')]: {
      width: '100%',
      padding: '0 3rem',

    },
    [theme.breakpoints.up('lg')]: {
      width: '75%',
      padding: '0 3rem',

    },
    maxWidth: `${theme.breakpoints.values.lg}px`,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  
})

const ContactButton: React.FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {props.children}
    </div>
  )
}

export default ContactButton