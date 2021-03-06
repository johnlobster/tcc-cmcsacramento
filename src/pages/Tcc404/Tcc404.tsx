import React from 'react';
import {Link} from 'react-router-dom'
import { Box, Button,Theme, Typography} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
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
      maxWidth: "1000px",
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

const Tcc404: React.FunctionComponent = () => {
  const myClasses = myStyles(); 

  return(
    <ResponsiveContainer>
      <Box mx="auto" display="flex" justifyContent="center" 
        flexDirection="column" 
        className={myClasses.pageBox}>
        <Typography variant="h2" component="h2" className={myClasses.title}>
          Whoops, that was a 404 ! That page doesn't exist
        </Typography>
        
        <Box p={2} mx="auto" py={3} >
          <Button variant="contained" size="large" color="secondary" className={myClasses.buttonBox} >
            <Link to="/Home" className={myClasses.button}>
              Take me back to the home page
            </Link>
          </Button>
        </Box>
        
        <Box px={2} pb={1} mx="auto">
          <img src={dog} className={myClasses.doggy}
            alt="A meditating dog, just what you need for a 404" />
        </Box>
      </Box>
    </ResponsiveContainer>
  );
}

export default Tcc404;