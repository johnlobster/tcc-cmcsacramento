import React from 'react';

import { Card, CardActions, CardContent, Button, Box, Grid, GridSize, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";

// The component is a Grid item that switches between full width and card size on open/close
// The article content (props.children) displays when open and card displays when closed
const useStyles = makeStyles({
  container: {
    [theme.breakpoints.up('xs')]: {
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
  buttonBox: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '0.5rem',
    paddingLeft: '0.5rem'
  },
  closeButton: {
    color: theme.palette.secondary.contrastText,
  },
  upButton: {
    color: theme.palette.text.primaryColor
  },
  cardImage: {
    width: '9vw',
    padding: '1rem',
  },
  
});

interface MoreProps { 
  id: string;
  elementToScrollTo: HTMLElement | null;
  columnWidth?: number; 
  className?: string;
  cardImage?: string;
  imageAlt?: string;
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
  
  const scroller: () => void = () => {
    if (props.elementToScrollTo) {
      props.elementToScrollTo.scrollIntoView();
    } else {
      window.scrollTo(0,0);
    }
    
  }
  // check attributes
  let itemWidth: GridSize = 6; // default size of grid item
  if (props.columnWidth) {
    itemWidth = props.columnWidth as GridSize;
  }

  let altTextCard: string = "card";
  if ( props.cardImage && props.imageAlt) {
    // altText = `alt="${props.imageAlt}"`;
    altTextCard = props.imageAlt;

  }

  let altTextBlock: string = "Illustration for article";
  if (props.cardImage && props.imageAlt) {
    // altText = `alt="${props.imageAlt}"`;
    altTextBlock = props.imageAlt;

  }
  
  return(
    <React.Fragment>
      {/* Block  (article) */}
      <Grid item xs={12}  style={{display: open ? "block" : "none"}}>
        <Paper elevation={1}>
          <Box p={2}>
            {props.cardImage && (
              <img src={props.cardImage} alt={altTextBlock} className={classes.cardImage} />
            )}
            {props.children}
          </Box>
          
          <Box p={1}>
            <div className={classes.buttonBox}>
              <Button variant="contained" size="large"
                color="secondary" className={classes.closeButton} 
                onClick={closeBlock}
              >
                Close article
              </Button>
              <Button size="large" className={classes.upButton} onClick={scroller} >
                  Go to top of page
              </Button>
            </div>
            
          </Box>
        </Paper>
        
        
      </Grid>

      {/* Card */}
      <Grid item xs={12} sm={itemWidth} style={{ display: open ? "none" : "block" }}>
        <Card raised={true} >
          <React.Fragment>
            {props.cardImage && (
              <img src={props.cardImage} alt={altTextCard} className={classes.cardImage} />
            )}
            {props.cardContent && (
              <CardContent>
                {props.cardContent}
              </CardContent>
            )}
            
            <CardActions>
              <div className={classes.buttonBox}>
                <Button variant="contained" size="large"
                  color="secondary" className={classes.closeButton} onClick={openBlock}>Read more</Button>
              </div>
            </CardActions>
            
          </React.Fragment>
        </Card>
      </Grid>
        
    </React.Fragment>

  );
}

export default CardToBlock;

