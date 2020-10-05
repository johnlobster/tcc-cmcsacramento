import React from 'react';

// A mui flexbox item showing a card that can be expanded into and article
// Behaves as a mui <Grid item> except that size can be overridden to be 12 columns

// combines ExpandableGridItem and CardToBlock

import { Grid, Paper, Box, Button, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SlideArticle from '../../components/SlideArticle/SlideArticle'
import theme from "../../global/theme";

type gridSize = boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined

const mkStyles = makeStyles({
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
    width: '100%',
    justifyContent: 'space-between',
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
  paper: {
    backgroundColor: theme.palette.background.articlePaper,
  },
  closedItem: {
    '& > *': {
      height: "100%", // by making immediate child element 100% high, grid items will all have the same height in a single row
    },
  }
});

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
interface MoreProps {
  open: boolean;
  openCallback: (open: boolean) => void;
  cardContent?: React.ReactElement;       // html for card, other than buttons at the bottom. Article HTML passed as children
  id: string;                             // passed for debug info, etc

  xs?: gridSize;                          // Grid responsive sizing, passed down to <Grid item>
  sm?: gridSize;
  md?: gridSize;
  lg?: gridSize;
  xl?: gridSize;
}

const ExpandingCard: React.FunctionComponent<MoreProps> = (props) => {

  const classes = mkStyles()

  const handleOpen: () => void = () => {
    props.openCallback(true)
  }

  const handleClose: () => void = () => {
    props.openCallback(false)
  }

  const scroller: () => void = () => {
    console.log("Gotta scroll")
  }

  return(
    <React.Fragment>
      { props.open ? (
        <Grid item
          {...props}
          style={{ flexGrow: 0, maxWidth: '100%', flexBasis: '100%' }}
        >
          <SlideArticle id={props.id + "_article"} in={props.open}>
            <div>
              <Paper elevation={1} className={classes.paper}>
                <article>
                  {props.children}
                </article>

                {/* control buttons for article when open */}
                <Box p={1}>
                  <div className={classes.buttonBox}>
                    <Button variant="contained" size="large"
                      color="secondary" className={classes.closeButton}
                      onClick={handleClose}
                    >
                      Close article
                    </Button>
                    <Button size="large" className={classes.upButton} disabled onClick={scroller} >
                      Go to top of page
                    </Button>
                  </div>

                </Box>
              </Paper>
            </div>
          </SlideArticle>
        </Grid>
      ) : (
        <Grid item className={classes.closedItem}
            {...props}
          >
            {/* Card */}
            <SlideArticle id={props.id + "_card"} in={!props.open}>
              <div>
                <Card raised={true} >
                  <React.Fragment>
                    <CardContent>
                      {props.cardContent}
                    </CardContent>
                    

                    <CardActions>
                      <div className={classes.buttonBox}>
                        <Button variant="contained" size="large"
                          color="secondary" className={classes.closeButton} onClick={handleOpen}>
                            Read more
                        </Button>

                      </div>
                    </CardActions>

                  </React.Fragment>
                </Card>
              </div>
            </SlideArticle>
          </Grid>
      )}
    </React.Fragment>
  );
}

export default ExpandingCard;