// creates a popup for a printable flyer

import React from 'react';
import QRcode from 'qrcode';


import { Grid, Popper, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Phone} from '@material-ui/icons';

import VSeparator from "../../components/VSeparator/VSeparator"
import {socialData} from '../../data/social-data'

import tjt from "../../images/Taijitu.svg";
import bigRoom from "../../images/bigRoom.jpeg"
import map from "../../images/map2.jpg";

const useStyles = makeStyles({
  header: {
    margin: '0em 2em 1em 4em',
  },
  title: {
    fontFamily: 'RoofRunnersActive, serif',
    letterSpacing: '0.4rem',
  },
  tjt: {
    paddingTop: '1.5rem',
    width: "65%"
  },
  popUp: {
    // Needs to be size of American letter 8.5x11 inches
    // so height will be 11/8 times width, multiply by 1.375
    width: '92vw',
    marginLeft: '4vw', // center
  },
  popUpPage: {
    height: '126.5vw',
    backgroundColor: 'white',

  },
  stdMargin: {
    marginLeft: '2rem',
    marginRight: '0.75rem',
  },
  map: {
    width: "90%",
    paddingTop: '1.2rem'
  },
  socialLogo: {
    '& img': {
      height: '4rem',
    },
    
  },

  
})

// import socialData from '../../data/social-data'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Flyer: React.FunctionComponent = (props) => {

  const flyerStyles = useStyles()

  const webQrRef = React.useRef(null)
  const mapQrRef = React.useRef(null)
  const meetupQrRef = React.useRef(null)
  const facebookQrRef = React.useRef(null)


  const [popperAnchorEl, popperSetAnchorEl] = React.useState<null | HTMLElement>(null);

  const handlePopperClick = (event: React.MouseEvent<HTMLElement>) => {
    popperSetAnchorEl(popperAnchorEl ? null : event.currentTarget);
    setTimeout( () => {
      // create the QR codes - have to wait until popper has opened, otherwise elements don't exist yet
      QRcode.toCanvas(webQrRef.current, "https://www.cmctaichisacramento.com", { scale: 6 })
      QRcode.toCanvas(mapQrRef.current, "https://www.google.com/maps/place/Hagan+Community+Center/@38.6014079,-121.3118612,17z/data=!3m1!4b1!4m5!3m4!1s0x809addab44082533:0xd2077a03010da7ad!8m2!3d38.6014079!4d-121.3096672", { scale: 4 })
      QRcode.toCanvas(meetupQrRef.current, socialData[1].url, { scale: 5 })
      QRcode.toCanvas(facebookQrRef.current, socialData[0].url, { scale: 5 })


    }, 500)
    
  };

  const popperOpen = Boolean(popperAnchorEl);
  const popperId = popperOpen ? 'simple-popper' : undefined;

  return(
    <div>
      <VSeparator lines={1} />
      {/* Button for opening the flyer */}
      <Button variant="contained" color="secondary" onClick={handlePopperClick}>
        Print Flyer
      </Button>
      <VSeparator lines={1} />

      <Popper id={popperId} open={popperOpen} anchorEl={popperAnchorEl}>
        <Paper elevation={2} variant="outlined" className={flyerStyles.popUp}>
          <Button variant="contained" color="secondary" onClick={handlePopperClick}>
            Close Flyer
          </Button>
        
          <div id="printablePage" className={flyerStyles.popUpPage}>
            <Grid container style={{paddingTop: "2rem"}}>
              <Grid item xs={5}>
                <div className={flyerStyles.header}>
                  <h1 className={flyerStyles.title}>Tai Chi </h1>
                  <h4>Sacramento Cheng Man Ch'ing Tai Chi Group</h4>
                  <h4>Jinbao(Golden Treasure) Tai Chi Chuan</h4>
                </div>
              </Grid>
              <Grid item xs={2}>
                <img src={tjt} alt="Yin Yang" className={flyerStyles.tjt} />
              </Grid>
              <Grid item xs={5}>
                <Grid container>
                  <Grid item xs={12}>
                    <h4 className={flyerStyles.stdMargin}>www.cmctaichisacramento.com</h4>
                  </Grid>
                  <Grid item xs={12}>
                    <canvas ref={webQrRef} height="200" width="200" />
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} className={flyerStyles.stdMargin}>
                <p>
                  Professor Cheng Man Ch'ing’s class is equally suited for beginners and
                  practitioners of other martial arts. Gain strength, balance, poise and resiliency
                  while engaging in a modified form of Tai Chi created for busy people.
                </p>
                <p>
                  You will learn health benefits and internal practice (mindfulness) by
                  studying the methods developed by one of the best-known students of Yang Cheng Fu.
                  We welcome people of any age or skill level and love to see people try out
                  Tai Chi for the first time. Everyone is encouraged to learn at their own
                  pace.
                </p>
              </Grid>
            </Grid>
            
            
            <Grid container className={flyerStyles.stdMargin}>
              
                <Grid item xs={12}>
                  <h4>Class times</h4>
                </Grid>
                <Grid item xs={12}>
                  <h5>Saturdays</h5>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6} sm={4} md={3}>
                      8:30 - 9am
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      Advanced
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6} sm={4} md={3}>
                      9 &nbsp; &nbsp; - 10am
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      Main class
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6} sm={4} md={3}>
                      10 &nbsp; - 10:30am
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      Beginners
                    </Grid>
                  </Grid>
                </Grid>
                

              
              <Grid item xs={3}>
                <h4>Hagan community center</h4>
                <h5>2197 Chase Dr, Rancho Cordova, CA 95670</h5>
                <Phone /> 916 369 9844 (Office)
              </Grid>
              <Grid item xs={4}>
                <img src={map} alt="Map to location" className={flyerStyles.map} />
              </Grid>
              <Grid item xs={5}>
                <h4>Scan for Google map</h4>
                <canvas ref={mapQrRef} height="150" width="150" />
              </Grid>
              
              
            </Grid>


            <Grid container className={flyerStyles.stdMargin}>
              <Grid item xs={12}>
                <h3>Social media</h3>
              </Grid>
              <Grid item xs={4} className={flyerStyles.socialLogo}>
                <img src={socialData[1].logo} alt={socialData[1].altText} />
              </Grid>
              <Grid item xs={4}>
                <h4>{socialData[1].name}</h4>
                <p>{socialData[1].url}</p>
              </Grid>
              
              <Grid item xs={4} >
                <div style={{ width: '80%' }}>
                  <canvas ref={meetupQrRef} height="200" width="200" />
                </div>
              </Grid>
              <Grid item xs={4} className={flyerStyles.socialLogo}>
                <img src={socialData[0].logo} alt={socialData[0].altText} />
              </Grid>
              <Grid item xs={4}>
                <h4>{socialData[0].name}</h4>
                <p>{socialData[0].url}</p>
              </Grid>
              
              <Grid item xs={4}>
                <div style={{ width: '80%' }}>
                  <canvas ref={facebookQrRef} height="200" width="200" />
                </div>
              </Grid>
            </Grid>
          </div>
        
          <Button variant="contained" color="secondary" onClick={handlePopperClick}>
            Close Flyer
          </Button>
        </Paper>
      </Popper>
        
        
    </div>
  );
}

export default Flyer;