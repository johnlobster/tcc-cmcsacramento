import React from 'react';
import { Link } from 'react-router-dom'

import { Theme, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import theme from "../../global/theme";
import VSeparator from "../VSeparator/VSeparator"
import tjt from "../../images/Taijitu.svg";

const footerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.fade
    },
    copyBox: {
      display: 'flex',
      justifyContent: 'center',
    },
    copy: {
      fontSize: '0.8rem',
      margin: '0 auto',
      padding: '0.5rem 0 1rem 0'
    },
    contentBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    disclaimer: {
      padding: '1rem 7vw 0 0',
    },
    tjt: {
      height: '5rem',
      width: 'auto',
      padding: '0 auto 0 0',
    }
  })
)

const Footer: React.FunctionComponent = (props) => {
  const classes = footerStyles(theme);
  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <br />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <img src={tjt} alt="Yin Yang" className={classes.tjt} />
        </Grid>
        <Grid item xs={7} sm={6} lg={4}>
          <p>
            Like any physical activity, Tai chi must be studied at your own risk and we cannot be held responsible for any injury that might occur
            <Link to="/Contact/#disclaimer"> Click here for full liability information</Link>

          </p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={9} sm={7} lg={5}>
          <p>
            This website collects no data <Link to="/Contact/#privacy">Click here for full privacy information</Link>
          </p>
        </Grid>
      </Grid>
      <div className={classes.copyBox}>
        <span className={classes.copy}><em>© 2020 Jinbao Tai Chi Chuan </em></span>
      </div>
    </div>
    
  );
}

export default Footer;