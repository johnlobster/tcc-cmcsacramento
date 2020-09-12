import React from 'react';

import { Card, CardContent, CardMedia, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import theme from "../../global/theme";
import EditBlock from "../../components/EditBlock/EditBlock"
import EditSpan from '../../components/EditSpan/EditSpan';
import CircleMenu from "../../components/CircleMenu/CircleMenu";
import VSeparator from "../../components/VSeparator/VSeparator"
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'


import map from "../../images/map2.jpg";
import cmc from "../../images/cmc1_fade.png";
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
    margin: '0 auto'
  },
  contactCard: {
    height: '100%'
  },
  customCard: {
    color: theme.palette.text.primaryColorDark
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
  eSpan : {
    '& *': {
      lineHeight: 'inherit'
    }
  }
});


const Home: React.FunctionComponent = () => {
  const classes = useStyles();
  //   Tai Chi Chuan
  return(
    <div>
      <ResponsiveContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <h1 className={classes.eSpan}><EditSpan id="Home_welcome_title">Welcome to Jīnbǎo (Golden treasure) Tai Chi Chuan</EditSpan></h1>

            {/* Background image */}
            <div style={{position: 'relative'}}>
              <img src={cmc} alt="Cheng man ching" className={classes.bgImage} />
            </div>

          <EditBlock id="Home_welcome1" className={classes.welcome} 
          content={`
            <p>
              Here you’ll find 
              the information you need about our Tai Chi courses, our team, our teaching and our
              style. Professor Cheng Man Ching’s class is equally suited for beginners and
              practitioners of other martial arts. Gain strength, balance, poise and resiliency
              while engaging in a modified form of Tai Chi created for busy people. 
            </p>
            <p>
              You will learn health benefits and internal practice (mindfulness) by
              studying the methods developed by one of the best-known students of Yang cheng fu.
              We welcome people of any age or skill level and love to see people try out 
              Tai Chi for the first time. Everyone is encouraged to learn at their own 
              pace.
            </p>
            `} 
          /> 
          <VSeparator lines={1} />


          <EditBlock id="Home_welcome2" className={classes.welcome} content={`
            <h2>We teach</h2>
            <ul>
              <li>Form. Cheng man ching's 37 movement form</li>
              <li>Tuishu (sensing hands), partner work with fixed foot position</li>
              <li>Moving step Tuishu</li>
              <li>Da lu - simple two person form</li>
              <li>San shou - advanced two person form with applications</li>
            </ul>
          `} />
          <VSeparator lines={1} />

          <div className={classes.welcome}>
            <EditBlock id="Home_covid19" content={`
              <h2>Covid-19 update</h2>
              <p>
                We have access to the Hagan community center again.
              </p>
              <p>
                We will be following social distancing protocols. Keep 6' apart,
                wear masks, and no partner practice
              </p>
            `} />
          </div>
          
          <VSeparator lines={1} />
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card raised={true} className={classes.customCard + " " + classes.contactCard}>
                <CardContent>
                  <Typography variant="h4" component="h3" >
                    Contact us through social media
                  </Typography>
                  <Grid container >
                    <Grid item xs={6}>
                      <div className={classes.logoBox} >
                        <a href="https://www.facebook.com/chengmanchingtaichi/" className={classes.linkBox}>
                          <img src={facebook} alt="Click here to visit our facebook page" className={classes.logoFacebook} />
                        </a>
                      </div>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <div className={classes.logoBox}>
                        <a href="https://www.meetup.com/Cheng-Man-Ching-Tai-Chi-Chuan-Group/" className={classes.linkBox}>
                          <img src={meetup} alt="Click here to visit our meetup page" className={classes.logoMeetup} />
                        </a>
                      </div>
                      
                    </Grid>
          
                  </Grid>

                  <Typography variant="h4" component="h3">
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
                    <Typography variant="h4" component="h3">
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
      
      <Grid container spacing={2} className={"responsiveContainer " + classes.circularMenuContainer}>
        <Grid item xs={12}>
          <Box><CircleMenu /></Box>
        </Grid>
      </Grid>
      </ResponsiveContainer>

    </div>
  );
}

export default Home;
