import React from 'react';

import { Card, CardContent, Button, Box, Grid, GridSize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";

import CardToBlock from "../../components/CardToBlock/CardToBlock";

const useStyles = makeStyles({
  container: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '85%',
    },
    [theme.breakpoints.up('md')]: {
      width: '75%',
    },
    maxWidth: `${theme.breakpoints.values.md}px`,
    padding: '1rem',
    margin: '1rem auto 2rem auto'
  },
});

// add more props 
// add <Beginners-moreProps> to type
// interface Beginners-moreProps {
// }


const aCard = (
  <div>
    <h6 style={{ color: "green" }}>I got passed down !!!</h6>
  </div>
);
const Beginners:React.FunctionComponent = (props) => {

  const classes = useStyles();
  return(
    <div>
      <h1>Beginners' page</h1>

      <Grid container className={classes.container}>
        <CardToBlock id="test1" cardContent={aCard}>
          <p>Hello world</p>
        </CardToBlock>
      </Grid>

    </div>

    

  );
}

export default Beginners;