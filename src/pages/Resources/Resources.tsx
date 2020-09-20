import React from 'react';
import { Link } from 'react-router-dom'

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import theme from "../../global/theme";

import whiteCrow from '../../images/whiteCrow.jpg'
import facebook from "../../images/facebook.png";
import meetup from "../../images/meetup.png";

const useStyles = makeStyles({

  
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
  yootoob: {
    borderStyle: "none",
    borderRadius: "8px",
    boxShadow: theme.shadows[8],
    [theme.breakpoints.up('xs')]: {
      width: "280px",
      height: "157px",
    },
    [theme.breakpoints.up('md')]: {
      width: "373px",
      height: "210px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "560px",
      height: "315px",
    },
    
  }
  
});
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Resources: React.FunctionComponent = (props) => {
  const classes = useStyles();

  return(
    <div>
      <ResponsiveContainer>
        <h1>Resources</h1>

        <h3>Short form videos</h3>

        <h4>
          Master Lee Chan
        </h4>
        <p>Master Chan's form is immaculate. This video is especially helpful as foot positions can be seen very clearly</p>
        <iframe 
          src="https://www.youtube.com/embed/Ihwz94E-Rs8"  
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; "
          className={classes.yootoob} 
        >
        </iframe>

        <h4>Mike Pecor</h4>
        <p>
          This is a helpful guide for beginners as Mike shows the whole form and talks through each move in detail. There are 22 Chapters, all contained within an hour long video.
          A good way to review material taught in class
        </p>

        <iframe
          src="https://www.youtube.com/embed/tljjjyRuUG8" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; " 
          className={classes.yootoob} 
        ></iframe>
        
        <h3>Books</h3>
        <Link to="https://www.amazon.com/ideas/amzn1.account.AHVX4CTBMPZRVGRYBNSH2DXNQJCA/1QVJ46A6OU9LG">
          Recommended books on Amazon
        </Link>

        <h3>Bob Amacker</h3>

        <p>
          Bob Amacker learned directly from Chen man ching and traveled to study with a number of other masters, as well as becoming an expert in some external martial arts.
          He is one of a very few number of people who is able to use Tai Chi as a fighting art, without dropping back to an external (hard) approach.
          He is also making his advanced knowledge accessible to all.
        </p>
        <p>
          Gary has been studying with Bob for a long time, Craig a few years, and John is working on an online Long form class.
        </p>
        <p>
          Bob's YouTube channel has a mix of informational, beginner and advanced material. All the material is incredibly insightful and is highly recommended. 
        </p>
        <Grid container>
          <Grid item xs={4} sm={3}>
            <img src={whiteCrow} alt="White crow logo" />
          </Grid>
          <Grid item xs={8} sm={7} lg={6}>
            <Grid container>
              <Grid item xs={12}>
                <Link to="https://whitecrowtaiji.com/">
                  Bob's web page
                </Link>
              </Grid>
              <br /> <br />
              <Grid item xs={12}>
                <Link to="https://www.youtube.com/channel/UC9glD1EU1YRqEzoJmz1K27g">
                  Bob's YouTube channel
            </Link>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
        <br />
        <p>
          Bob's books are more suitable for intermediate and advanced students. They are both in the &nbsp; 
          <Link to="https://www.amazon.com/ideas/amzn1.account.AHVX4CTBMPZRVGRYBNSH2DXNQJCA/1QVJ46A6OU9LG">
            list of recommended books on Amazon. 
          </Link>
          &nbsp; Only Kindle versions are available, but there are no issues with the formatting
        </p>
          
        <h3>Our social media</h3>

        <p>
          Please sign up for our Facebook and Meetup pages. Meetup allows you to RSVP to classes and start discussions. 
          We are active on Facebook and post info about classes, links to videos and cool images
        </p>
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
        
      </ResponsiveContainer>
    </div>
  );
}

export default Resources;

/*
<p>
          Here are some resource for you to look over.

          Here is the video I mentioned  https://www.youtube.com/watch?v=Ihwz94E-Rs8&list=PLpCKTC-9TwckKUAYKBE3M1uMCe4AzF1yp

          For beginners this video series might be best; https://www.youtube.com/watch?v=tljjjyRuUG8&t=1276s

          Please also sign up for the meetup site at https://www.meetup.com/Cheng-Man-Ching-Tai-Chi-Chuan-Group/

          Where you can then RSVP to the classes, start discussions with other students etc.

          More items can be found under the  More tab and then go to Message Boards. There you will also find other great resources.

          Also please sign up for the Face Book page https://www.facebook.com/chengmanchingtaichi/

          As we are active there and things are posted all the time that may be of interest to you.

          Recommend books https://www.amazon.com/ideas/amzn1.account.AHVX4CTBMPZRVGRYBNSH2DXNQJCA/1QVJ46A6OU9LG
        </p>

        <p>
          Part 1 & 2  of   Lifting the Hands which involves  "Plucking up the back"  to verify you are

          doing the lift correctly.  Bob Amacker correctly points there are two other ways to prevent

          your partner from lifting you or disabling the move other than breaking your back
          1  Lean on your partner
          2  you have the straight back but trying to use your biceps instead rotating from the shoulders.





          https://www.youtube.com/watch?v=1zhx1SKN3NE





          https://www.youtube.com/watch?v=YBcW1rP8V4o
        </p>

  */