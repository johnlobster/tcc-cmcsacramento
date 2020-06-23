import React from 'react';

import { Card, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import {
//   palette,
//   PaletteProps,
//   spacing,
//   SpacingProps,
//   typography,
//   TypographyProps,
// } from '@material-ui/system';

import CircleMenu from "../../components/CircleMenu/CircleMenu";

// add more props 
// add <Home-moreProps> to type
// interface Home-moreProps {
// }

const useStyles = makeStyles({
  root: {
    backgroundColor: 'cornsilk',
    color: 'black',
    minWidth: '25%'
  },
  media: {
    height: 140,
  },
});


const Home:React.FunctionComponent = (props) => {
  const classes = useStyles();

  return(
    <div>
      <h1>Home page</h1>
      <div><CircleMenu /></div>
      
      <Box m={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Card raised={true} className={classes.root}>
              <h4>I am a card</h4>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card raised={true} className={classes.root}>
              <h4>I am a card as well !</h4>
            </Card>
          </Grid>
        </Grid>
      </Box>
      
      
    </div>
  );
}

export default Home;