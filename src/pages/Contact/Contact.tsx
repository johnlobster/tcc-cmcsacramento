import React from 'react';

import { Link } from 'react-router-dom'
import axios from "axios";

import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {Phone, Person, Email, Description, Message, Send} from '@material-ui/icons';


import useHashScrolling from "../../hooks/useHashScrolling"
import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'
import EditBlock from '../../components/EditBlock/EditBlock'
import {Draft} from '../../components/Draft/Draft'
import GMap from '../../components/GMap/GMap'
import Social from '../../components/Social/Social'
import theme from '../../global/theme'

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
// interface MoreProps {
// }

const Contact: React.FunctionComponent = (props) => {

  const contactStyles = useStyles()

  // useHashScrolling([])

  // Contact form setup
  // Name and Email are required - make them controlled so can set error 
  const [contactFormName, setName] = React.useState("")
  const [formNameError, setFormNameError ] = React.useState(false)
  const [contactFormEmail, setEmail] = React.useState("")
  const [formEmailError, setFormEmailError] = React.useState(false)
  const [contactFormSubject, setSubject] = React.useState("")
  const [contactFormMessage, setMessage] = React.useState("")

  const [mailMessage, setMailMessage] = React.useState("")

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setName(event.target.value);
    if ( event.target.value.length > 0) {
      setFormNameError(false)
    }
  };
  
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setEmail(event.target.value);
    if (event.target.value.length > 0) {
      setFormEmailError(false)
    }
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSubject(event.target.value)
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setMessage(event.target.value)

  }

  const contactSubmit = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    // check Name and Email
    if (contactFormName.length === 0) {
      setFormNameError(true)
    }
    if (contactFormEmail.length === 0) {
      setFormEmailError(true)
    } 
    if ((contactFormName.length > 0) && (contactFormEmail.length > 0)) {
      const messageBody = {
        name: contactFormName,
        email: contactFormEmail,
        subject: contactFormSubject,
        message:  contactFormMessage
      }
      setMailMessage("Message sent")
      // const lambdaAddress = "www.cmctaichisacramento.com/.netlify/functions/mailer"
      const lambdaAddress = "/.netlify/functions/mailer" // development proxies to localhost:9000
      console.log("Contact: Message sent to lambda server")
      axios.post(lambdaAddress, JSON.stringify(messageBody))
        .then( (response) => {
          console.log("Contact: Lambda server replied")
          console.log(response)
          setMailMessage("Message received")
        })
        .catch( (err) => {
          console.log("Contact: Lambda server was very sad")
          console.log(err)
          setMailMessage("Message sent, but the internet lost it somewhere")

        })
    } else {
      setMailMessage("Message not sent, please check Name and Email")

    }
  }

  const clearForm = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    setName("")
    setFormNameError(false)
    setEmail("")
    setFormEmailError(false)
    setMailMessage("  ")
    setSubject("")
    setMessage("")
  }

  return(
    <ResponsiveContainer>
      <div>
        <h1>Location, contact and web site information</h1>
      </div>

      <Grid container>
        <Grid item xs={12} id="location">
          <h2>Location and times</h2>
          <Grid container>
            <Grid item xs={12} sm={7} className={contactStyles.pictureBox}>
              <img src={bigRoom} alt="Hagan community center" />
            </Grid>
            <Grid item xs={12} sm={5}>
              <h4>Hagan community center</h4>
              <h5>2197 Chase Dr, Rancho Cordova, CA 95670</h5>
              <Phone /> 916 369 9844 (Office)
            </Grid>
          </Grid>
          {/* <p>
            <EditBlock id="classTimes" content="<h4>Class times</h4><h5>Saturdays</h5> Advanced<br>9-10am Class<br>10-10:30am Beginner"></EditBlock>
          </p> */}
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
          
          <Grid container>
            <Grid item xs={12} sm={6} md={8}>
              <p>
                The community center has three rooms. If our usual room is booked for an event, we will be in one of the others, please look for the sign. 
                The big room is accessed from the right as you walk towards it.
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={contactStyles.pictureSignBox} >
              <img src={sign} alt="Tai chi this way"  />
            </Grid>
          </Grid>
          <br />
          
          <EditBlock id="directions" content="<p>Google maps does not find the location correctly using the name/address and will happily send you to the other side of Hagan park</p><p>
          To get to the community center, turn off Coloma onto Chase drive. Drive past the High school and community theatre.
          Turn right just before the park entrance and park anywhere. The community center is up some steps, past the ponds
          </p>
          <p>The community pool is being refurbished, so there are barriers at the back of the community center. This does not affect access to the community center</p>
          ">
          
          </EditBlock>
            
          <GMap />

          <Button variant="contained" color="secondary" className={contactStyles.openMap}>
            <a 
              target="_blank"
              href="https://www.google.com/maps/place/Hagan+Community+Center/@38.6014079,-121.3118612,17z/data=!3m1!4b1!4m5!3m4!1s0x809addab44082533:0xd2077a03010da7ad!8m2!3d38.6014079!4d-121.3096672"
            >
              Open in Google maps
            </a>
          </Button>

          {/* <p>The following map, if accessed on a phone, will allow you to navigate to the correct place</p> */}

        </Grid>

        <Grid item xs={12} id="contact">
          <h2>Email contact</h2>
          <p>
            To send us Email, please use the following form. The message will be sent anonymously, so don't forget to fill in your own Email address.
            You can also contact us through Facebook or Meetup
          </p>
          <Draft>
            <div >
              <Grid container className={contactStyles.contactForm}>
                <Grid item xs={2} sm={1}>
                  <Person color="primary" fontSize="large" />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <TextField
                    id="contactName"
                    label="Name"
                    variant="outlined"
                    required
                    value = {contactFormName}
                    onChange={handleNameChange}
                    error={formNameError}
                  />
                </Grid>

                <Grid item xs={2} sm={1}>
                  <Email color="primary" fontSize="large" />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <TextField
                    id="contactEmail"
                    label="Your Email address"
                    variant="outlined"
                    required
                    value = {contactFormEmail}
                    onChange={handleEmailChange}
                    error={formEmailError}
                  />
                </Grid>

                <Grid item xs={2} sm={1}>
                  <Description color="primary" fontSize="large" />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <TextField
                    id="contactSubject"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    value={contactFormSubject}
                    onChange={handleSubjectChange}
                  />
                </Grid>

                <Grid item xs={2} sm={1}>
                  <Message color="primary" fontSize="large" />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <TextField
                    id="contactMessage"
                    label="Message"
                    variant="outlined"
                    multiline
                    fullWidth
                    value={contactFormMessage}
                    onChange={handleMessageChange}
                  />
                </Grid>

                <Grid item xs={2} sm={1}>
                </Grid>
                <Grid item xs={10} sm={11}>
                  <div style={{minHeight: "2rem"}}>
                    {mailMessage}
                  </div>
                </Grid>

                <Grid item xs={2} sm={1}>
                  <Send color="primary" fontSize="large" />
                </Grid>
                <Grid item xs={10} sm={8} md={6}>
                  <Grid container justify="space-between" className={contactStyles.buttonBox}>
                      <Button variant="contained" color="secondary" onClick={contactSubmit}>
                        Send message
                      </Button>
                      <Button variant="contained" color="secondary" onClick={clearForm}>
                        Clear Email form
                      </Button>
                  </Grid>                  
                </Grid>

              </Grid>


            </div>
          </Draft>
          
          <Grid container justify="center">
            <Grid item xs={8} md={6}>
              <Social />
            </Grid>
          </Grid>
          
        </Grid>
        
        <Grid item xs={12} id="disclaimer">
          <EditBlock id="legalizeMe" content="<h3>Liability Disclaimer</h3>
          <p>
            Like any physical sport, martial arts always carry the possibility of injury. The instructors and venue accept no responsibility for 
            any injury incurred in their pursuit. Besides seeking proper “hands-on” instruction, in the event of any doubts concerning possible stress or strain 
            to the student a physician should be consulted for assurance that no instruction is counter-indicated by the student’s physical condition.
          </p>
          ">
          </EditBlock>
          
        </Grid>
        
        <Grid item xs={12} id="privacy">
          <h3>Data privacy</h3>
          <p>
            This website collects no data, exceeding all data protection standards
          </p>
          <p>
            However, there are links to external sites, such as Google maps and YouTube.
            These may be able to collect information, based on 3rd party cookies stored on your web browser from other web pages you have visited.
        </p>
        <p>
          This is, unfortunately, part of how the modern internet operates and provides funding for the services we use on a daily basis, such as web browsers, search
          engines, videos (YouTube) and social media.
        </p>
        <p>
          It is not quite as sinister as it sounds - the information is only used to target advertising for you.
          This website has no advertising, which is the source of most of the issues in data privacy. The links to social media on this web site are simple links, and do
          not send any information to Facebook or Meetup. This makes it a little harder for you to share on social media, and you will have to take an extra step to "like" us.
        </p>
        </Grid>

        <Grid item xs={12}>
          <h2>About this website</h2>

          <p>Some information for nerds like me</p>
          <p>
            Web technologies
            <ul>
              <li>React</li>
              <li>react-router</li>
              <li>Netlify</li>
              <li>Material-UI</li>
            </ul>
          </p>

        </Grid>

      </Grid>
      
    </ResponsiveContainer>
    
  );
}

export default Contact;