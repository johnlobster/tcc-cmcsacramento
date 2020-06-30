import React from 'react';

import { Card, CardActions, CardContent, Button, Box, Grid, GridSize, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SlideArticle from '../../components/SlideArticle/SlideArticle'
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
  id: string; // id of block and used for database
  elementToScrollTo: HTMLElement | null;  // scroll here when article closed
  columnWidth?: number;                   // number of columns taken up by card. Perhaps should be responsive. Article itself will be 12
  className?: string;                     // classes to be passed down 
  cardImage?: string;                     // url of an image used both by card and article
  imageAlt?: string;                      // alt attribute of image
  cardContent?: React.ReactElement;       // html for card, other than buttons at the bottom
  open?: boolean;                         // if set, then article is open on first render. Very useful for creating links directly to the article
                                          // note - changing this prop will cause a re-render, but will not open the article
} 




const CardToBlock:React.FunctionComponent<MoreProps> = (props) => {

  const classes = useStyles();

  // open means that the article is visible and card is hidden, so start off seeing card
  let [open, changeOpen] = React.useState(false); 
  const openBlock: () => void = () => {
    changeOpen(true);
    // changeEnableEnterTransition(true)
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
  // check attributes/props and set defaults
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
      
      {/* style={{display: open ? "block" : "none"}} */}
      <SlideArticle id={props.id} in={open}>
      <Grid item xs={12} >
        <Paper elevation={1}>
          <article>
            <Box p={2}>
              {props.cardImage && (
                <img src={props.cardImage} alt={altTextBlock} className={classes.cardImage} />
              )}
              {props.children}
            </Box>
          </article>
          
          {/* control buttons for article when open */}
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
      </SlideArticle>

      {/* Card */}
      <SlideArticle id={props.id + "_card"} in={! open}>

      <Grid item xs={12} sm={itemWidth}>
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
      </SlideArticle>

    </React.Fragment>

  );
}

export default CardToBlock;

