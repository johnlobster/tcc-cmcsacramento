import React from 'react';

import { Box, Button,Theme, Link } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// import { spacing } from '@material-ui/system';

import dog from "../../images/doggy.jpg";

const myStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textDecoration: 'none',
      color: theme.palette.primary.main
    },
    pageBox: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.between('sm', 'lg')]: {
        width: '75%'
      },
      [theme.breakpoints.up('lg')]: {
        width: '65%',
      },
      maxWidth: "1000px"
    },
    doggy: {
      maxWidth: "70vw",
      boxShadow: theme.shadows[10]
    },
    buttonBox: {
      boxShadow: theme.shadows[8],
      '&:hover': {
      boxShadow: theme.shadows[20]
      }
    },
    button: {
      color: theme.palette.secondary.contrastText,
      fontSize: '1.5rem',
    },
  })
)

const Tcc404:React.FunctionComponent = (props) => {
  const myClasses = myStyles(); 

  return(
    <Box mx="auto" display="flex" justifyContent="center" 
      flexDirection="column" 
      className={myClasses.pageBox}>
      <Box mx="auto" px={2}>
        <h3 className={myClasses.title}>
          Whoops, that was a 404 ! That page doesn't exist
        </h3>
      </Box>
      
      <Box p={2} mx="auto" py={3} >
        <Button variant="contained" size="large" color="secondary" className={myClasses.buttonBox} >
          <Link href="/Home" className={myClasses.button}>
            Take me back to the home page
          </Link>
        </Button>
      </Box>
      
      <Box px={2} pb={1} mx="auto">
        <img src={dog} className={myClasses.doggy}
          alt="A meditating dog, just what you need for a 404" />
      </Box>
    </Box>
  );
}

export default Tcc404;