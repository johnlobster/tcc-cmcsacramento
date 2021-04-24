import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../../global/theme'
import { Phone, Person, Email, Description, Message, Send } from '@material-ui/icons';

import EditBlock from '../../components/EditBlock/EditBlock'
import GMap from '../../components/GMap/GMap'

import bigRoom from "../../images/bigRoom.jpeg"
import sign from "../../images/sign.jpg"

const useStyles = makeStyles({
  contactForm: {
    marginTop: '1.5em',
    marginBottom: '1.5em',
    '& > *': {
      marginTop: '1em'
    }
  },
  pictureBox: {
    display: 'flex',
    '& img': {
      width: '95%',
      alignSelf: 'center',
    },
  },
  pictureSignBox: {
    display: 'flex',
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'space-around',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },

    '& img': {
      // width: '80%',
      height: "8rem",
      alignSelf: 'center',
    },
  },
  buttonBox: {
    '& button': {
      marginTop: "0.25rem",
      marginBottom: "0.25rem",
    }
  },
  openMap: {
    '& a': {
      color: "white",
      textDecoration: 'none',
    }
  }
})
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
interface MoreProps {
  showQRCodes: boolean;
}

const Hagen: React.FunctionComponent<MoreProps> = () => {

  const contactStyles = useStyles()

  

  return(
    <div>
      <Grid item xs={12} id="location">
        <h4>Location</h4>
        <Grid container>
          <Grid item xs={12} sm={4} className={contactStyles.pictureBox}>
            <img src={bigRoom} alt="Hagan community center" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h4>Hagan community center</h4>
            <h5>2197 Chase Dr, Rancho Cordova, CA 95670</h5>
            <Phone /> 916 369 9844 (Office)
          </Grid>
          
        </Grid>
        
        <h4>Class times</h4>
        <h5>Saturdays</h5>
        <Grid container>
          <Grid item xs={6} sm={4} md={3}>
            8:30 - 9am
            </Grid>
          <Grid item xs={6} sm={4}>
            Advanced
            </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={4} md={3}>
            9 &nbsp; &nbsp; - 10am
            </Grid>
          <Grid item xs={6} sm={4}>
            Class
            </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={4} md={3}>
            10 &nbsp; - 10:30am
            </Grid>
          <Grid item xs={6} sm={4}>
            Beginners
            </Grid>
        </Grid>
        <br />

        

        {/* <GMap /> */}

        {/* <Button variant="contained" color="secondary" className={contactStyles.openMap}>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Hagan+Community+Center/@38.6014079,-121.3118612,17z/data=!3m1!4b1!4m5!3m4!1s0x809addab44082533:0xd2077a03010da7ad!8m2!3d38.6014079!4d-121.3096672"
          >
            Open in Google maps
            </a>
        </Button> */}

        {/* <p>The following map, if accessed on a phone, will allow you to navigate to the correct place</p> */}

      </Grid>
    </div>
  );
}

export default Hagen;