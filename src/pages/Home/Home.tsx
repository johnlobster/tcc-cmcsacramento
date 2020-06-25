import React from 'react';

import { Card, CardContent, CardMedia, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import theme from "../../global/theme";
import EditBlock from "../../components/EditBlock/EditBlock"
import EditSpan from '../../components/EditSpan/EditSpan';
import CircleMenu from "../../components/CircleMenu/CircleMenu";

import map from "../../images/map2.jpg";
import cmc from "../../images/cmc1_fade.png";
import facebook from "../../images/f_logo_RGB-Hex-Blue_512.png";
import meetup from "../../images/meetup.png";

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
  bgImage: {
    position: 'absolute',
    top: '-1.5rem',
    left: '0',
    zIndex: -100,
    width: '55vw',
    maxWidth: '50%',
    height: 'auto'
  },
  menuContainer: {
    width: "100%",
    maxWidth: `${theme.breakpoints.values.md}px`,
    overflowX: 'hidden'
  },
  map: {
    width: 'auto',
    height: '35vw',
    maxHeight: '250px',
    margin: '0 auto'
  },
  contactCard: {
    height: '100%'
  },
  customCard: {
    color: theme.palette.text.primaryColorDark
  },
  welcome: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
    },
    
  },
  linkBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  logoFacebook: {
    width: '20vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '60%',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '30%',
    },
    padding: '10px 0',
    '&:hover': {
      // grow
    }
  },
  logoMeetup: {
    width: '40vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70%',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
    },
    padding: '10px 0'
  },
  mapTitle: {
    '& > *': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
});


const Home:React.FunctionComponent = (props) => {
  const classes = useStyles();

  return(
    <div>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12}>
          
          <EditBlock id="Home_welcome" className={classes.welcome}>
            <h4>Welcome to Jīnbǎo (Golden treasure) Tai Chi Chuan</h4>

            {/* Background image */}
            <div style={{position: 'relative'}}>
              <img src={cmc} alt="Background image of Cheng man ching" className={classes.bgImage} />
            </div>
            <p>
              Here you’ll find 
              the information you need about our Tai Chi courses, our team, our teaching and our
              style. Professor Cheng Man Ching’s class is equally suited for beginners and
              practitioners of other martial arts. Gain strength, balance, poise and resiliency
              while engaging in a modified form of Tai Chi created for busy people. 
            </p><p>
              You will learn health benefits and internal practice (mindfulness) by
              studying the methods developed by one of the best-known students of Yang cheng fu.
              We welcome people of any age or skill level and love to see people try out 
              Tai Chi for the first time. We encourage everyone to learn at their own 
              pace.
            </p>
            <h4>We teach</h4>
            <ul>
              <li>Form</li>
              <li>Tuishu (sensing hands), partner work with fixed foot position</li>
              <li>Moving step Tuishu</li>
              <li>Da lu - simple two person form</li>
              <li>San shou - advanced two person form with applications</li>
            </ul>
            <br />
          </EditBlock>

          <div className={classes.welcome}>
            <h4>Covid-19 update</h4>
            <p>
              <EditSpan id="Home_covid19">
                The Hagan community center is closed, so no classes until further notice
            </EditSpan>
            </p>
            <p>
              <EditSpan id="Home_covid19_b">
                We expect that when are able to resume classes, we will be following social distancing protocols. Keep 6' apart,
                wear masks, and no partner practice
            </EditSpan>
            </p>
            <br />
          </div>
          
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card raised={true} className={classes.customCard + " " + classes.contactCard}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Contact us through social media
                  </Typography>
                  <Grid container >
                    <Grid item xs={6}>
                      <Grid container justify="center" alignItems="center">
                        <a href="https://www.facebook.com/chengmanchingtaichi/" className={classes.linkBox}>
                          <img src={facebook} alt="Click here to visit our facebook page" className={classes.logoFacebook} />
                        </a>
                      </Grid>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <Grid container justify="center" alignItems="center">
                        <a href="https://www.meetup.com/Cheng-Man-Ching-Tai-Chi-Chuan-Group/" className={classes.linkBox}>
                          <img src={meetup} alt="Click here to visit our meetup page" className={classes.logoMeetup} />
                        </a>
                      </Grid>
                      
                    </Grid>
          
                  </Grid>

                  <Typography variant="h5" component="h2" gutterBottom>
                    Contact us through Email
                  </Typography>

                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card raised={true} className={classes.customCard}>
                  <CardMedia className={classes.map}
                    component="img"
                    alt="Click here to find directions to Tai chi group"
                    image={map}
                    title="Click here to find directions to Tai chi group"
                  />
                  <CardContent className={classes.mapTitle}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <span >
                        Location and class times
                      </span>
                    </Typography>
                  </CardContent>                
              </Card>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      
      <Grid container className={classes.container + " " + classes.menuContainer}>
        <Grid item xs={12}>
          <Box><CircleMenu /></Box>
        </Grid>
      </Grid>

    </div>
  );
}

export default Home;
