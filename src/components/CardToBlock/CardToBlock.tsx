import React from 'react';

import { Card, CardActions, CardContent, Button, Box, Grid, GridSize, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";

// The component is a Grid item that switches between full width and card size on open/close
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
  button: {
    color: theme.palette.secondary.contrastText
  }
});

interface MoreProps { 
  id: string;
  columnWidth?: number; 
  className?: string;
  cardMedia?: React.ReactElement;
  cardContent?: React.ReactElement; 
} 

const CardToBlock:React.FunctionComponent<MoreProps> = (props) => {

  const classes = useStyles();

  let [open, changeOpen] = React.useState(false);
  const openBlock: () => void = () => {
    changeOpen(true);
  }
  const closeBlock: () => void = () => {
    changeOpen(false);
  }
  
  let itemWidth: GridSize = 6; // default size of grid item
  if (props.columnWidth) {
    itemWidth = props.columnWidth as GridSize;
  }

  return(
    <React.Fragment>
      <Grid item xs={12} style={{display: open ? "block" : "none"}}>
        {props.children}
        <Box>
          <Button variant="contained" size="large" 
            color="secondary" className={classes.button} onClick={closeBlock}>Close article</Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={itemWidth} style={{ display: open ? "none" : "block" }}>
        <Card raised={true} >
          <React.Fragment>
            <CardContent>
              {props.cardContent}
            </CardContent>
            <CardActionArea>
              <CardActions>
                <Button variant="contained" size="large"
                  color="secondary" className={classes.button} onClick={openBlock}>Read more</Button>
              </CardActions>
            </CardActionArea>
            
          </React.Fragment>
        </Card>
      </Grid>
        
    </React.Fragment>

  );
}

export default CardToBlock;

