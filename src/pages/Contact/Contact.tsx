import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useHashScrolling from "../../hooks/useHashScrolling"

import ResponsiveContainer from '../../components/ResponsiveContainer/ResponsiveContainer'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Contact: React.FunctionComponent = (props) => {

  useHashScrolling()

  return(
    <ResponsiveContainer>
      <div>
        <h1>Location, contact and site information</h1>
      </div>

      <Grid container>
        <Grid item xs={12} id="location">
          <h2>Location</h2>
        </Grid>
        <Grid item xs={12} id="contact">
          <h2>Contact via email</h2>
        </Grid>
        <Grid item xs={12} id="disclaimer">
          <h3>Disclaimer (Bob)</h3>
          <p>
            Disclaimer: Like any physical sport, martial arts always carry the possibility of injury. The author and publisher accept no responsibility for any injury incurred in their pursuit. Besides seeking proper “hands-on” instruction, in the event of any doubts concerning possible stress or strain to the student a physician should be consulted for assurance that no instructions contained herein are counter-indicated by the reader’s physical condition.
          </p>
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
            It is not as sinister as it sounds, this information is only used to target advertising for you.
            This website has no advertising, which is the source of most of the issues in data privacy. The links to social media on this web site are simple links, and do
            not send any information to Facebook or Meetup. This makes it a little harder for you to share on social media, and you will have to take an extra step to "like" us.
        </p>
        </Grid>
        <Grid item xs={12}>

        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <h2>About this website</h2>
        </Grid>
      </Grid>

      <Grid container >
        <Grid item xs={12}>

        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>

        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </ResponsiveContainer>
    
  );
}

export default Contact;