import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";
import facebook from "../../images/facebook.png";
import meetup from "../../images/meetup.png";

const useStyles = makeStyles({

  bgImage: {
    position: 'absolute',
    top: '-12vw',
    left: '15vw',
    zIndex: -100,
    width: '55vw',
    maxWidth: '50%',
    height: 'auto'
  },
  bgImageBox: {
    marginBottom: '2.2rem',
  },
  circularMenuContainer: {
    width: "100%",
    maxWidth: `${theme.breakpoints.values.md}px`,
  },
  map: {
    width: 'auto',
    height: '35vw',
    maxHeight: '250px',
    margin: '0 auto',

  },
  contactCard: {
    height: '100%',
  },
  customCard: {
    color: theme.palette.text.primaryColorDark,
    '& > a': {
      textDecoration: "none",
    }
  },
  // not so useful now I changed the defaults. This doesn't affect headings
  // because the <h.> style I set is more specific

  welcome: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.15rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
    },

  },

  logoBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  linkBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 10% 1rem 10%',
  },
  logoFacebook: {
    width: '80%',
    [theme.breakpoints.up('xs')]: {
      maxWidth: '80px',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '120px',
    },
    '&:hover': {
      // grow
    },
  },
  logoMeetup: {
    width: '80%',
    [theme.breakpoints.up('xs')]: {
      maxWidth: '200px',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '400px',
    },
    padding: '10px 0'
  },
  mapTitle: {
    '& > *': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  eSpan: {
    '& *': {
      lineHeight: 'inherit'
    }
  },
  email: {
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    '& a': {
      textDecoration: "none",
    },
    '& img': {
      width: "80%",
    }
  },
  centerContent: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  emailGifBox: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  }
});
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Social: React.FunctionComponent = (props) => {

  const classes= useStyles()
  
  return(
    <div>
      <Grid container >
        <Grid item xs={6} className={classes.centerContent}>
          <div className={classes.logoBox} >
            <a href="https://www.facebook.com/chengmanchingtaichi/" className={classes.linkBox}>
              <img src={facebook} alt="Click here to visit our facebook page" className={classes.logoFacebook} />
            </a>
          </div>
        </Grid>

        <Grid item xs={6} className={classes.centerContent}>
          <div className={classes.logoBox}>
            <a href="https://www.meetup.com/Cheng-Man-Ching-Tai-Chi-Chuan-Group/" className={classes.linkBox}>
              <img src={meetup} alt="Click here to visit our meetup page" className={classes.logoMeetup} />
            </a>
          </div>

        </Grid>

      </Grid>
    </div>
  );
}

export default Social;