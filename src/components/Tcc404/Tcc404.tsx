import React from 'react';

import { Box, Button,Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

import MyLink from "../../components/MyLink/MyLink";
import dog from "../../images/doggy.jpg";

const myStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textDecoration: 'none',
      color: theme.palette.primary.main
    },
    pageBox: {
      [theme.breakpoints.down('sm')]: {
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
      maxWidth: "800px"
    },
    button: {
      color: theme.palette.secondary.contrastText,
      '&:hover': {
        boxShadow: theme.shadows[12]
      }
    },
  })
)

const Tcc404:React.FunctionComponent = (props) => {
  const myClasses = myStyles(); 

  return(
    <Box mx="auto" display="flex" justifyContent="center" 
      flexDirection="column" className={myClasses.pageBox}>
      <Box mx="auto" px={2}>
        <h1 className={myClasses.title}>
          Whoops, that was a 404 ! That page doesn't exist
        </h1>
      </Box>
      
      <Box p={2} mx="auto">
        <Button variant="contained" color="secondary" className={myClasses.button}>
          <MyLink to="/Home" >
            Take me back to the home page
          </MyLink>
        </Button>
      </Box>
      
      <Box px={2} mx="auto">
        <img src={dog} className={myClasses.doggy}
          alt="A meditating dog, just what you need for a 404" />
      </Box>
    </Box>
  );
}

export default Tcc404;